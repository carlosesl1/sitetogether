export type LocaleCode = "pt" | "en" | "es" | "ar";

export type LocaleOption = {
  code: LocaleCode;
  label: string;
  shortLabel: string;
  flag: string;
  htmlLang: string;
  googleCode: string;
  dir: "ltr" | "rtl";
  enabled: boolean;
};

export const DEFAULT_LOCALE: LocaleCode = "pt";

export const SUPPORTED_LOCALES: LocaleOption[] = [
  {
    code: "pt",
    label: "Português",
    shortLabel: "PT",
    flag: "🇧🇷",
    htmlLang: "pt-BR",
    googleCode: "pt",
    dir: "ltr",
    enabled: true,
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
    flag: "🇺🇸",
    htmlLang: "en",
    googleCode: "en",
    dir: "ltr",
    enabled: true,
  },
  {
    code: "es",
    label: "Español",
    shortLabel: "ES",
    flag: "🇪🇸",
    htmlLang: "es",
    googleCode: "es",
    dir: "ltr",
    enabled: false,
  },
  {
    code: "ar",
    label: "العربية",
    shortLabel: "AR",
    flag: "🇸🇦",
    htmlLang: "ar",
    googleCode: "ar",
    dir: "rtl",
    enabled: false,
  },
];

export const ENABLED_LOCALES = SUPPORTED_LOCALES.filter((locale) => locale.enabled);

export const GOOGLE_TRANSLATE_TARGETS = SUPPORTED_LOCALES.filter(
  (locale) => locale.code !== DEFAULT_LOCALE,
)
  .map((locale) => locale.googleCode)
  .join(",");

export function findLocale(code: string | null | undefined): LocaleOption {
  return (
    SUPPORTED_LOCALES.find((locale) => locale.code === code && locale.enabled) ??
    SUPPORTED_LOCALES.find((locale) => locale.code === DEFAULT_LOCALE)!
  );
}
