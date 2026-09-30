// DEMO ONLY - plain text in localStorage, not secure, not real authentication.

import type { DemoUser } from "@/types/auth";

const DEMO_USER_KEY = "bytespace_demo_user";

function isDemoUser(value: unknown): value is DemoUser {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return typeof record.name === "string" && typeof record.email === "string" && typeof record.password === "string";
}

export function saveDemoUser(user: DemoUser): void {
  if (typeof window === "undefined") throw new Error("Demo accounts are only available in the browser.");
  window.localStorage.setItem(DEMO_USER_KEY, JSON.stringify(user));
}

export function getDemoUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const serialized = window.localStorage.getItem(DEMO_USER_KEY);
    if (!serialized) return null;
    const parsed: unknown = JSON.parse(serialized);
    return isDemoUser(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function verifyCredentials(email: string, password: string): { ok: true; user: DemoUser } | { ok: false } {
  const user = getDemoUser();
  if (!user) return { ok: false };
  if (user.email.trim().toLowerCase() !== email.trim().toLowerCase() || user.password !== password) {
    return { ok: false };
  }
  return { ok: true, user };
}

export function delay(milliseconds: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    if (signal?.aborted) {
      resolve();
      return;
    }

    let timer = 0;
    const finish = () => {
      window.clearTimeout(timer);
      signal?.removeEventListener("abort", onAbort);
      resolve();
    };
    const onAbort = () => finish();
    timer = window.setTimeout(finish, milliseconds);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}