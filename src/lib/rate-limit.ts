// In-memory rate limiter — works for single-instance Railway deployments.
// Keyed by IP address. Old entries are purged once they expire.

interface Entry {
  count: number;
  resetAt: number;
}

const store = new Map<string, Entry>();

// Periodically purge expired entries so the Map doesn't grow unbounded.
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
  }
}, 60_000);

/**
 * Returns true if the request is allowed, false if it exceeds the limit.
 * @param key      Usually the client IP address.
 * @param limit    Max number of requests allowed in the window.
 * @param windowMs Time window in milliseconds.
 */
export function isAllowed(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) return false;

  entry.count++;
  return true;
}

/** Extract the best available client IP from a Next.js request. */
export function getClientIp(req: Request): string {
  return (
    (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}
