"use client";

import { useSyncExternalStore } from "react";

// The page is static, so the dates have to be checked in the visitor's
// browser. The server snapshot is null: during the server render and the first
// paint nothing date-dependent is decided yet.

// For testing only: ?now=2026-11-05T10:00:00%2B01:00 pretends it's that
// moment. Honoured on localhost and Vercel preview links, never on the real
// domain, so nobody can fake the founding price.
function override(): number | null {
  const host = window.location.hostname;
  const allowed =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".vercel.app");
  if (!allowed) return null;
  const value = new URLSearchParams(window.location.search).get("now");
  if (!value) return null;
  const t = Date.parse(value);
  return Number.isNaN(t) ? null : t;
}

// Rounded to the minute so the snapshot stays stable between ticks.
export function currentNow(): number {
  return override() ?? Math.floor(Date.now() / 60_000) * 60_000;
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

export function useNow(): number | null {
  return useSyncExternalStore(subscribe, currentNow, () => null);
}
