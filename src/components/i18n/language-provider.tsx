"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { LoaderCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DEFAULT_LOCALE,
  ENABLED_LOCALES,
  SUPPORTED_LOCALES,
  findLocale,
  type LocaleCode,
  type LocaleOption,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: LocaleCode;
  locales: LocaleOption[];
  isTranslating: boolean;
  setLocale: (locale: LocaleCode) => void;
};

type TextTarget = {
  kind: "text";
  node: Text;
  source: string;
};

type AttributeTarget = {
  kind: "attribute";
  element: Element;
  attribute: string;
  source: string;
};

type TranslationTarget = TextTarget | AttributeTarget;

const STORAGE_KEY = "together.locale";
const TRANSLATION_CACHE_KEY = "together.translationCache.v1";
const TRANSLATION_BREAK = "\n|||TOGETHER_TRANSLATION_BREAK|||";
const TRANSLATABLE_ATTRIBUTES = ["placeholder", "aria-label", "title", "alt"] as const;
const TRANSLATION_INDICATOR_FAILSAFE_MS = 12000;
const TRANSLATION_REQUEST_TIMEOUT_MS = 7000;
const TRANSLATION_CONCURRENCY = 4;

const LanguageContext = createContext<LanguageContextValue | null>(null);

function scheduleAfterHydration(callback: () => void) {
  let firstFrame = 0;
  let secondFrame = 0;

  const run = () => {
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(callback);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  return () => {
    document.removeEventListener("DOMContentLoaded", run);

    if (firstFrame) {
      window.cancelAnimationFrame(firstFrame);
    }

    if (secondFrame) {
      window.cancelAnimationFrame(secondFrame);
    }
  };
}

function applyDocumentLocale(locale: LocaleOption) {
  document.documentElement.lang = locale.htmlLang;
  document.documentElement.dir = locale.dir;
}

function shouldTranslateText(value: string) {
  const text = value.replace(/\s+/g, " ").trim();

  if (text.length < 2) return false;
  if (!/[A-Za-zÀ-ÿ]/.test(text)) return false;
  if (text.includes("@")) return false;
  if (/^https?:\/\//i.test(text)) return false;
  if (/^[\d\s.,:/+()%\-–—|]+$/.test(text)) return false;
  if (/^(TOGETHER|LGPD|GDPR|DPO|ANPD|ECA|B2B|SLA|UX|UI)$/i.test(text)) return false;

  return true;
}

function isInsideIgnoredElement(element: Element | null) {
  return Boolean(
    element?.closest(
      "script,style,noscript,textarea,select,option,code,pre,.notranslate,[translate='no']",
    ),
  );
}

function getVisibleTextParts(value: string) {
  const prefix = value.match(/^\s*/)?.[0] ?? "";
  const suffix = value.match(/\s*$/)?.[0] ?? "";

  return {
    prefix,
    core: value.trim(),
    suffix,
  };
}

function chunkTexts(texts: string[], maxChars = 1800) {
  const chunks: string[][] = [];
  let current: string[] = [];
  let currentLength = 0;

  texts.forEach((text) => {
    const nextLength = currentLength + text.length + TRANSLATION_BREAK.length;

    if (current.length > 0 && nextLength > maxChars) {
      chunks.push(current);
      current = [];
      currentLength = 0;
    }

    current.push(text);
    currentLength += text.length + TRANSLATION_BREAK.length;
  });

  if (current.length > 0) {
    chunks.push(current);
  }

  return chunks;
}

function normalizeTranslatedPart(value: string) {
  return value.replace(/^\s+|\s+$/g, "");
}

async function fetchWithTimeout(url: string) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), TRANSLATION_REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    window.clearTimeout(timeout);
  }
}

function parseGoogleTranslation(payload: unknown) {
  return Array.isArray(payload)
    ? ((payload[0] as unknown[]) ?? [])
        .map((part) => (Array.isArray(part) ? String(part[0] ?? "") : ""))
        .join("")
    : "";
}

async function runWithConcurrency<T, R>(
  items: T[],
  limit: number,
  worker: (item: T) => Promise<R>,
) {
  const results: R[] = [];
  let cursor = 0;

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        results[index] = await worker(items[index]);
      }
    }),
  );

  return results;
}

async function fetchSingleTranslation(source: string, targetLanguage: string) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=${encodeURIComponent(
    targetLanguage,
  )}&dt=t&q=${encodeURIComponent(source)}`;

  const response = await fetchWithTimeout(url);

  if (!response.ok) {
    return "";
  }

  return normalizeTranslatedPart(parseGoogleTranslation(await response.json()));
}

async function translateChunk(chunk: string[], targetLanguage: string) {
  const translations = new Map<string, string>();
  const joined = chunk.join(TRANSLATION_BREAK);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=${encodeURIComponent(
    targetLanguage,
  )}&dt=t&q=${encodeURIComponent(joined)}`;

  try {
    const response = await fetchWithTimeout(url);

    if (!response.ok) {
      throw new Error(`Translation request failed with ${response.status}`);
    }

    const translated = parseGoogleTranslation(await response.json());
    const translatedParts = translated.split(TRANSLATION_BREAK);

    if (translatedParts.length === chunk.length) {
      chunk.forEach((source, index) => {
        translations.set(source, normalizeTranslatedPart(translatedParts[index]));
      });
      return translations;
    }
  } catch {
    // Fallback below translates individual strings in this chunk.
  }

  const fallbackTranslations = await runWithConcurrency(
    chunk,
    TRANSLATION_CONCURRENCY,
    (source) => fetchSingleTranslation(source, targetLanguage),
  );

  chunk.forEach((source, index) => {
    if (fallbackTranslations[index]) {
      translations.set(source, fallbackTranslations[index]);
    }
  });

  return translations;
}

async function fetchTranslations(texts: string[], targetLanguage: string) {
  const chunks = chunkTexts(texts);
  const chunkResults = await runWithConcurrency(
    chunks,
    TRANSLATION_CONCURRENCY,
    (chunk) => translateChunk(chunk, targetLanguage),
  );
  const translations = new Map<string, string>();

  chunkResults.forEach((chunkTranslations) => {
    chunkTranslations.forEach((translated, source) => {
      translations.set(source, translated);
    });
  });

  return translations;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<LocaleCode>(DEFAULT_LOCALE);
  const [isTranslating, setIsTranslating] = useState(false);
  const textOriginalsRef = useRef(new WeakMap<Text, string>());
  const textNodesRef = useRef(new Set<Text>());
  const attributeOriginalsRef = useRef(new WeakMap<Element, Map<string, string>>());
  const attributeElementsRef = useRef(new Set<Element>());
  const cacheRef = useRef<Record<string, string>>({});
  const runIdRef = useRef(0);
  const translatingRef = useRef(false);
  const observerTimeoutRef = useRef<number | null>(null);
  const indicatorTimeoutRef = useRef<number | null>(null);
  const lastPathnameRef = useRef<string | null>(null);

  const hideTranslationIndicator = useCallback((runId: number) => {
    if (runIdRef.current !== runId) return;

    if (indicatorTimeoutRef.current) {
      window.clearTimeout(indicatorTimeoutRef.current);
      indicatorTimeoutRef.current = null;
    }

    setIsTranslating(false);
  }, []);

  const showTranslationIndicator = useCallback((runId: number) => {
    if (indicatorTimeoutRef.current) {
      window.clearTimeout(indicatorTimeoutRef.current);
    }

    setIsTranslating(true);

    indicatorTimeoutRef.current = window.setTimeout(() => {
      hideTranslationIndicator(runId);
    }, TRANSLATION_INDICATOR_FAILSAFE_MS);
  }, [hideTranslationIndicator]);

  const finishTranslation = useCallback((runId: number, showLoading: boolean) => {
    window.setTimeout(() => {
      if (runIdRef.current !== runId) return;

      translatingRef.current = false;

      if (showLoading) {
        hideTranslationIndicator(runId);
      }
    }, 180);
  }, [hideTranslationIndicator]);

  const loadCache = useCallback(() => {
    try {
      cacheRef.current = JSON.parse(window.localStorage.getItem(TRANSLATION_CACHE_KEY) ?? "{}");
    } catch {
      cacheRef.current = {};
    }
  }, []);

  const saveCache = useCallback(() => {
    try {
      window.localStorage.setItem(TRANSLATION_CACHE_KEY, JSON.stringify(cacheRef.current));
    } catch {
      // Cache failure should not block translation.
    }
  }, []);

  const restoreOriginalLanguage = useCallback(() => {
    const hasTrackedTargets =
      textNodesRef.current.size > 0 || attributeElementsRef.current.size > 0;

    if (!hasTrackedTargets) {
      runIdRef.current += 1;
      translatingRef.current = false;
      setIsTranslating(false);
      return;
    }

    const runId = runIdRef.current + 1;
    runIdRef.current = runId;
    translatingRef.current = true;
    showTranslationIndicator(runId);

    textNodesRef.current.forEach((node) => {
      const original = textOriginalsRef.current.get(node);

      if (original !== undefined && node.isConnected) {
        node.data = original;
      }
    });

    attributeElementsRef.current.forEach((element) => {
      const originals = attributeOriginalsRef.current.get(element);

      if (!originals || !element.isConnected) return;

      originals.forEach((value, attribute) => {
        element.setAttribute(attribute, value);
      });
    });

    finishTranslation(runId, true);
  }, [finishTranslation, showTranslationIndicator]);

  const collectTargets = useCallback(() => {
    const targets: TranslationTarget[] = [];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const textNode = node as Text;

        if (isInsideIgnoredElement(textNode.parentElement)) return NodeFilter.FILTER_REJECT;

        const original = textOriginalsRef.current.get(textNode) ?? textNode.data;
        const { core } = getVisibleTextParts(original);

        if (!shouldTranslateText(core)) return NodeFilter.FILTER_REJECT;

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let node = walker.nextNode() as Text | null;

    while (node) {
      if (!textOriginalsRef.current.has(node)) {
        textOriginalsRef.current.set(node, node.data);
        textNodesRef.current.add(node);
      }

      const original = textOriginalsRef.current.get(node);

      if (original) {
        targets.push({ kind: "text", node, source: getVisibleTextParts(original).core });
      }

      node = walker.nextNode() as Text | null;
    }

    document
      .querySelectorAll<Element>(TRANSLATABLE_ATTRIBUTES.map((attr) => `[${attr}]`).join(","))
      .forEach((element) => {
        if (isInsideIgnoredElement(element)) return;

        let originals = attributeOriginalsRef.current.get(element);

        if (!originals) {
          originals = new Map<string, string>();
          attributeOriginalsRef.current.set(element, originals);
          attributeElementsRef.current.add(element);
        }

        TRANSLATABLE_ATTRIBUTES.forEach((attribute) => {
          const current = element.getAttribute(attribute);

          if (!current) return;

          if (!originals.has(attribute)) {
            originals.set(attribute, current);
          }

          const source = originals.get(attribute) ?? current;
          const { core } = getVisibleTextParts(source);

          if (!shouldTranslateText(core)) return;

          targets.push({ kind: "attribute", element, attribute, source: core });
        });
      });

    return targets;
  }, []);

  const translateDocument = useCallback(
    async (targetLocale: LocaleOption, options?: { showLoading?: boolean }) => {
      const showLoading = options?.showLoading ?? true;

      if (targetLocale.code === DEFAULT_LOCALE) {
        restoreOriginalLanguage();
        return;
      }

      const runId = runIdRef.current + 1;
      runIdRef.current = runId;
      translatingRef.current = true;

      if (showLoading) {
        showTranslationIndicator(runId);
      }

      const targets = collectTargets();
      const uniqueTexts = Array.from(new Set(targets.map((target) => target.source)));
      const missingTexts = uniqueTexts.filter(
        (source) => !cacheRef.current[`${targetLocale.googleCode}:${source}`],
      );

      if (missingTexts.length > 0) {
        try {
          const fetchedTranslations = await fetchTranslations(missingTexts, targetLocale.googleCode);

          fetchedTranslations.forEach((translated, source) => {
            if (translated) {
              cacheRef.current[`${targetLocale.googleCode}:${source}`] = translated;
            }
          });

          saveCache();
        } catch {
          if (runIdRef.current === runId) {
            finishTranslation(runId, showLoading);
          }
          return;
        }
      }

      if (runIdRef.current !== runId) {
        return;
      }

      targets.forEach((target) => {
        const translated = cacheRef.current[`${targetLocale.googleCode}:${target.source}`];

        if (!translated) return;

        if (target.kind === "text") {
          const original = textOriginalsRef.current.get(target.node) ?? target.node.data;
          const { prefix, suffix } = getVisibleTextParts(original);
          const nextValue = `${prefix}${translated}${suffix}`;

          if (target.node.isConnected && target.node.data !== nextValue) {
            target.node.data = nextValue;
          }

          return;
        }

        if (target.element.isConnected && target.element.getAttribute(target.attribute) !== translated) {
          target.element.setAttribute(target.attribute, translated);
        }
      });

      finishTranslation(runId, showLoading);
    },
    [collectTargets, finishTranslation, restoreOriginalLanguage, saveCache, showTranslationIndicator],
  );

  const scheduleTranslation = useCallback(
    (targetLocale: LocaleOption) => {
      if (observerTimeoutRef.current) {
        window.clearTimeout(observerTimeoutRef.current);
      }

      observerTimeoutRef.current = window.setTimeout(() => {
        void translateDocument(targetLocale, { showLoading: false });
      }, 250);
    },
    [translateDocument],
  );

  useEffect(() => {
    loadCache();

    const storedLocale = findLocale(window.localStorage.getItem(STORAGE_KEY));

    if (storedLocale.code !== DEFAULT_LOCALE) {
      const runId = runIdRef.current + 1;
      runIdRef.current = runId;
      translatingRef.current = true;
      applyDocumentLocale(storedLocale);
      showTranslationIndicator(runId);

      return scheduleAfterHydration(() => {
        applyDocumentLocale(storedLocale);
        setLocaleState(storedLocale.code);
      });
    }

    return scheduleAfterHydration(() => {
      applyDocumentLocale(storedLocale);
      setLocaleState(storedLocale.code);
    });
  }, [loadCache, showTranslationIndicator]);

  useEffect(() => {
    const targetLocale = findLocale(locale);

    applyDocumentLocale(targetLocale);

    return scheduleAfterHydration(() => {
      if (targetLocale.code === DEFAULT_LOCALE) {
        restoreOriginalLanguage();
        return;
      }

      void translateDocument(targetLocale);
    });
  }, [locale, restoreOriginalLanguage, translateDocument]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (translatingRef.current) return;

      const targetLocale = findLocale(locale);

      if (targetLocale.code !== DEFAULT_LOCALE) {
        scheduleTranslation(targetLocale);
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...TRANSLATABLE_ATTRIBUTES],
    });

    return () => {
      observer.disconnect();

      if (observerTimeoutRef.current) {
        window.clearTimeout(observerTimeoutRef.current);
      }
    };
  }, [locale, scheduleTranslation]);

  useEffect(() => {
    if (!pathname) return;

    if (lastPathnameRef.current === null) {
      lastPathnameRef.current = pathname;
      return;
    }

    if (lastPathnameRef.current === pathname) {
      return;
    }

    lastPathnameRef.current = pathname;

    const targetLocale = findLocale(locale);

    if (targetLocale.code === DEFAULT_LOCALE) {
      return;
    }

    return scheduleAfterHydration(() => {
      void translateDocument(targetLocale, { showLoading: true });
    });
  }, [locale, pathname, translateDocument]);

  const setLocale = useCallback((nextLocale: LocaleCode) => {
    const next = findLocale(nextLocale);

    if (next.code === locale) return;

    window.localStorage.setItem(STORAGE_KEY, next.code);
    setLocaleState(next.code);
    applyDocumentLocale(next);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      locales: ENABLED_LOCALES,
      isTranslating,
      setLocale,
    }),
    [isTranslating, locale, setLocale],
  );

  const activeLocale = findLocale(locale);

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <div
        className={[
          "notranslate pointer-events-none fixed right-4 top-24 z-[90] transition-all duration-300 md:right-6",
          isTranslating
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0",
        ].join(" ")}
        translate="no"
        aria-hidden={!isTranslating}
      >
        <div className="overflow-hidden rounded-full border border-neutral-200 bg-white/95 px-3.5 py-2 shadow-[0_18px_45px_rgba(18,18,18,0.12)] backdrop-blur-xl">
          <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-neutral-800">
            <LoaderCircle className="h-3.5 w-3.5 animate-spin text-brand-500" />
            <span>Aplicando idioma {activeLocale.shortLabel}</span>
          </div>
          <span className="mt-2 block h-0.5 w-full overflow-hidden rounded-full bg-neutral-100">
            <span className="block h-full w-1/2 animate-[translation-progress_1.1s_ease-in-out_infinite] rounded-full bg-brand-400" />
          </span>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    return {
      locale: DEFAULT_LOCALE,
      locales: SUPPORTED_LOCALES.filter((locale) => locale.enabled),
      isTranslating: false,
      setLocale: () => undefined,
    };
  }

  return context;
}
