"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const CONSENT_KEY = "pg-cookie-consent";
const CONSENT_EVENT = "cookie-consent-change";

type Consent = "essential" | "analytics" | null | "server";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Consent {
  const value = localStorage.getItem(CONSENT_KEY);
  return value === "essential" || value === "analytics" ? value : null;
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, () => "server");

  function save(value: "essential" | "analytics") {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (consent === "server" || consent !== null) return null;

  return (
    <aside className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-3xl border border-ink/10 bg-white p-5 shadow-2xl sm:p-6" aria-label="Preferências de cookies">
      <p className="font-serif text-xl text-ink">Sua privacidade importa</p>
      <p className="mt-2 text-sm leading-6 text-muted">
        Usamos cookies essenciais para o funcionamento do site. Cookies de análise só serão ativados com sua autorização. Consulte a <Link href="/cookies" className="font-semibold text-brand underline">política de cookies</Link>.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button onClick={() => save("essential")} className="min-h-11 rounded-full border border-ink/15 px-5 py-2 text-sm font-semibold text-ink hover:bg-sand">
          Somente essenciais
        </button>
        <button onClick={() => save("analytics")} className="min-h-11 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-strong">
          Aceitar análise
        </button>
      </div>
    </aside>
  );
}
