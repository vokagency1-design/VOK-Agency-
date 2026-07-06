export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ar", "ku"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeMeta: Record<Locale, { label: string; dir: "ltr" | "rtl"; native: string }> = {
  en: { label: "English", dir: "ltr", native: "English" },
  ar: { label: "Arabic", dir: "rtl", native: "العربية" },
  ku: { label: "Kurdish (Sorani)", dir: "rtl", native: "کوردیی سۆرانی" },
};
