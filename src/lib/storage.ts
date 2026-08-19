export interface AttemptRecord {
  examSlug: string;
  mode: "practice" | "exam";
  score: number;
  total: number;
  completedAt: string;
}

const KEY = "azpractice:attempts";
const MAX_RECORDS = 50;

export function loadAttempts(): AttemptRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveAttempt(record: AttemptRecord): void {
  if (typeof window === "undefined") return;
  try {
    const existing = loadAttempts();
    const next = [record, ...existing].slice(0, MAX_RECORDS);
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — fail silently
  }
}

export function attemptsForExam(slug: string): AttemptRecord[] {
  return loadAttempts().filter((a) => a.examSlug === slug);
}
