const METRIKA_ID = 49073798;
const CONSENT_KEY = "metrika_consent";
const SCRIPT_SRC = "https://mc.yandex.ru/metrika/tag.js";

export type MetrikaConsent = "accepted" | "declined";

type YmFn = ((...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

declare global {
  interface Window {
    ym?: YmFn;
  }
}

let initialized = false;

function getStoredConsent(): MetrikaConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "accepted" || value === "declined") {
      return value;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function setStoredConsent(value: MetrikaConsent): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
}

function ensureYmStub(): YmFn {
  if (!window.ym) {
    const ym = function (...args: unknown[]) {
      (ym.a = ym.a || []).push(args);
    } as YmFn;
    ym.l = Date.now();
    window.ym = ym;
  }
  return window.ym;
}

function loadTagScript(): void {
  const already = Array.from(document.scripts).some(
    (s) => s.src === SCRIPT_SRC,
  );
  if (already) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = SCRIPT_SRC;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);
}

function initMetrika(): void {
  if (initialized) return;
  initialized = true;

  const ym = ensureYmStub();
  loadTagScript();
  ym(METRIKA_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

export function useMetrika() {
  function accept(): void {
    setStoredConsent("accepted");
    initMetrika();
  }

  function decline(): void {
    setStoredConsent("declined");
  }

  function initFromStoredConsent(): void {
    if (getStoredConsent() === "accepted") {
      initMetrika();
    }
  }

  return {
    accept,
    decline,
    initFromStoredConsent,
    getStoredConsent,
  };
}
