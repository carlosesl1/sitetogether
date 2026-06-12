"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/i18n/language-provider";
import { DEFAULT_LOCALE, type LocaleCode, type LocaleOption } from "@/lib/i18n";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

function FlagMark({ locale }: { locale: LocaleOption }) {
  if (locale.code === "pt") {
    return (
      <span
        className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full bg-[#169b62] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#ffdf00]" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#002776]" />
      </span>
    );
  }

  if (locale.code === "en") {
    return (
      <span
        className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #b22234 0 2px, #ffffff 2px 4px)",
        }}
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 h-3 w-3 bg-[#3c3b6e]" />
      </span>
    );
  }

  if (locale.code === "es") {
    return (
      <span
        className="h-5 w-5 shrink-0 overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #aa151b 0 25%, #f1bf00 25% 75%, #aa151b 75% 100%)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className="h-5 w-5 shrink-0 overflow-hidden rounded-full bg-[#006c35] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
      aria-hidden="true"
    />
  );
}

export function LanguageSwitcher({
  variant = "light",
  compact = false,
  className,
}: LanguageSwitcherProps) {
  const { locale, locales, isTranslating, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isDark = variant === "dark";
  const currentLocale = locales.find((option) => option.code === locale) ?? locales[0];
  const isTranslatedLocale = currentLocale.code !== DEFAULT_LOCALE;

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSelect(nextLocale: LocaleCode) {
    setLocale(nextLocale);
    setIsOpen(false);
  }

  return (
    <div
      ref={wrapperRef}
      className={cn("notranslate relative inline-flex shrink-0", className)}
      translate="no"
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-busy={isTranslating}
        aria-label={`Selecionar idioma. Idioma ativo: ${currentLocale.label}`}
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          "inline-flex h-10 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold uppercase transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2",
          compact ? "gap-1.5 px-2.5 tracking-[0.14em]" : "gap-2 px-3 tracking-[0.16em]",
          isTranslatedLocale
            ? isDark
              ? "border-brand-400/60 bg-brand-400/15 text-white shadow-[0_0_0_1px_rgba(255,214,55,0.08)]"
              : "border-brand-400/70 bg-brand-100 text-neutral-950 shadow-[0_8px_24px_rgba(245,192,0,0.18)] backdrop-blur"
            : isDark
              ? "border-white/10 bg-white/5 text-neutral-300 hover:border-brand-400/30 hover:bg-white/10 hover:text-white"
              : "border-neutral-200 bg-white/80 text-neutral-700 shadow-sm backdrop-blur hover:border-brand-400/50 hover:bg-white hover:text-neutral-900",
          isOpen
            ? isDark
              ? "border-brand-400/40 bg-white/10"
              : "border-brand-400/60 bg-white shadow-md"
            : "",
          compact ? "w-[82px]" : "w-[104px]",
        )}
      >
        {!compact ? (
          <Languages
            strokeWidth={2.15}
            className={cn(
              "h-[17px] w-[17px] shrink-0",
              isTranslatedLocale
                ? "text-brand-600"
                : isDark
                  ? "text-brand-400"
                  : "text-neutral-700",
            )}
          />
        ) : null}
        <FlagMark locale={currentLocale} />
        <span className="min-w-[16px] text-center">{currentLocale.shortLabel}</span>
        {isTranslating ? (
          <LoaderCircle
            className={cn(
              "h-3.5 w-3.5 animate-spin",
              isDark ? "text-brand-400" : "text-brand-500",
            )}
          />
        ) : (
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform",
              isOpen ? "rotate-180" : "",
              isDark ? "text-neutral-500" : "text-neutral-400",
            )}
          />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {isTranslating ? "Carregando idioma" : ""}
      </span>

      {isTranslating ? (
        <span
          aria-hidden="true"
          data-language-loading-indicator="pulse"
          className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_0_3px_rgba(245,197,24,0.18)]" />
        </span>
      ) : null}

      {isOpen ? (
        <div
          role="listbox"
          aria-label="Idiomas disponíveis"
          className={cn(
            "absolute right-0 top-[calc(100%+10px)] z-[80] min-w-[172px] overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-xl",
            isDark
              ? "border-white/10 bg-neutral-950/95 shadow-black/40"
              : "border-neutral-200 bg-white/95 shadow-neutral-900/10",
          )}
        >
          {locales.map((option) => {
            const isSelected = option.code === currentLocale.code;

            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option.code)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                  isDark
                    ? "text-neutral-300 hover:bg-white/10 hover:text-white"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950",
                  isSelected
                    ? isDark
                      ? "bg-brand-400 text-neutral-950 hover:bg-brand-400 hover:text-neutral-950"
                      : "bg-neutral-950 text-white hover:bg-neutral-950 hover:text-white"
                    : "",
                )}
              >
                <FlagMark locale={option} />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[11px] font-black uppercase leading-none tracking-[0.18em]">
                    {option.shortLabel}
                  </span>
                  <span
                    className={cn(
                      "mt-1 text-[10px] font-semibold normal-case tracking-normal",
                      isSelected
                        ? isDark
                          ? "text-neutral-800"
                          : "text-neutral-300"
                        : isDark
                          ? "text-neutral-500"
                          : "text-neutral-400",
                    )}
                  >
                    {option.label}
                  </span>
                </span>
                {isSelected ? <Check className="h-4 w-4 shrink-0" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
