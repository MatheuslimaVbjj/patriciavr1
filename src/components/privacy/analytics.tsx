"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const CONSENT_KEY = "pg-cookie-consent";
const CONSENT_EVENT = "cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(CONSENT_KEY) === "analytics";
}

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  const allowed = useSyncExternalStore(subscribe, getSnapshot, () => false);

  if (!measurementId || !allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
