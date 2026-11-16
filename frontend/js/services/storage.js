// Thin wrapper around localStorage. Fails silently (private mode, blocked storage)
// so the app keeps working in memory. Swap for API calls when backend/ exists.

const PREFIX = 'karaage:';

export function load(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* storage unavailable: keep in-memory state only */
  }
}
