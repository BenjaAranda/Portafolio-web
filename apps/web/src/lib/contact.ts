import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[^\r\n]+$/),
  email: z.email().max(254),
  subject: z.string().trim().min(3).max(150).regex(/^[^\r\n]+$/),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(200).default(''),
});

const DEFAULT_RECIPIENT = 'benjamin.aranda.dev@gmail.com';

export function contactRecipient() {
  const configured = process.env.CONTACT_TO_EMAIL;
  const candidate = configured?.trim() || DEFAULT_RECIPIENT;
  return z.email().safeParse(candidate).success ? candidate : undefined;
}

const attempts = new Map<string, { count: number; until: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

// Best-effort local limit; each server instance has its own map.
export function contactRateLimited(key: string, now = Date.now()) {
  for (const [storedKey, entry] of attempts) {
    if (entry.until <= now) attempts.delete(storedKey);
  }
  if (attempts.size >= 1000 && !attempts.has(key)) {
    const oldest = attempts.keys().next().value;
    if (oldest) attempts.delete(oldest);
  }
  const current = attempts.get(key);
  if (!current || current.until <= now) {
    attempts.set(key, { count: 1, until: now + WINDOW_MS });
    return false;
  }
  if (current.count >= MAX_ATTEMPTS) return true;
  current.count += 1;
  return false;
}
