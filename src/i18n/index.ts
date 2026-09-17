import { createI18n } from "vue-i18n";
import ru from "../locales/ru";
import en from "../locales/en";

export type AppLocale = "ru" | "en";

const STORAGE_KEY = "locale";

function readStoredLocale(): AppLocale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return "ru";
}

function applyDocumentLang(locale: AppLocale) {
  document.documentElement.lang = locale;
}

const initialLocale = typeof window !== "undefined" ? readStoredLocale() : "ru";

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: "ru",
  messages: { ru, en },
});

if (typeof window !== "undefined") {
  applyDocumentLang(initialLocale);
}

export function setLocale(next: AppLocale) {
  i18n.global.locale.value = next;
  applyDocumentLang(next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
}

export function getLocale(): AppLocale {
  return i18n.global.locale.value as AppLocale;
}
