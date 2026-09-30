// Demo-only authentication stored in this browser. Replace with a backend for
// accounts that must be shared across devices or protected server-side.

import type { DemoUser } from "@/types/auth";

const DEMO_USERS_KEY = "bytespace_demo_users";
const LEGACY_DEMO_USER_KEY = "bytespace_demo_user";
const DEMO_SESSION_KEY = "bytespace_demo_session";

function isDemoUser(value: unknown): value is DemoUser {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return typeof record.name === "string" && typeof record.email === "string" && typeof record.password === "string";
}

function readDemoUsers(): DemoUser[] {
  if (typeof window === "undefined") throw new Error("Authentication is only available in the browser.");

  try {
    const serializedUsers = window.localStorage.getItem(DEMO_USERS_KEY);
    if (serializedUsers) {
      const parsed: unknown = JSON.parse(serializedUsers);
      if (Array.isArray(parsed)) return parsed.filter(isDemoUser);
      throw new Error("Saved accounts are invalid.");
    }

    const legacySerializedUser = window.localStorage.getItem(LEGACY_DEMO_USER_KEY);
    if (!legacySerializedUser) return [];
    const legacyUser: unknown = JSON.parse(legacySerializedUser);
    return isDemoUser(legacyUser) ? [legacyUser] : [];
  } catch {
    throw new Error("Browser storage is unavailable. Enable site storage and try again.");
  }
}

export function registerDemoUser(user: DemoUser): { ok: true } | { ok: false; reason: "duplicate" } {
  const email = user.email.trim().toLowerCase();
  const users = readDemoUsers();
  if (users.some((savedUser) => savedUser.email.trim().toLowerCase() === email)) {
    return { ok: false, reason: "duplicate" };
  }

  try {
    window.localStorage.setItem(DEMO_USERS_KEY, JSON.stringify([
      ...users,
      { ...user, name: user.name.trim(), email },
    ]));
    return { ok: true };
  } catch {
    throw new Error("Could not save your account on this device. Check browser storage and try again.");
  }
}

export function verifyCredentials(email: string, password: string): { ok: true; user: DemoUser } | { ok: false } {
  const normalizedEmail = email.trim().toLowerCase();
  const user = readDemoUsers().find((savedUser) => (
    savedUser.email.trim().toLowerCase() === normalizedEmail && savedUser.password === password
  ));
  return user ? { ok: true, user } : { ok: false };
}

export function saveDemoSession(user: DemoUser): void {
  if (typeof window === "undefined") throw new Error("Authentication is only available in the browser.");

  try {
    window.localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({
      name: user.name,
      email: user.email.trim().toLowerCase(),
      signedIn: true,
    }));
  } catch {
    throw new Error("Could not save your sign-in on this device. Check browser storage and try again.");
  }
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
