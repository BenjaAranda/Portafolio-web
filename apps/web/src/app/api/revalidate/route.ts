import { revalidateTag } from 'next/cache';
import { validateWebhook } from '@/lib/webhook';
export async function POST(request: Request) {
  const result = await validateWebhook(request, process.env.SANITY_WEBHOOK_SECRET);
  if (!result.ok) return Response.json({ error: result.error }, { status: result.status });
  revalidateTag('portfolio', { expire: 0 });
  return Response.json({ revalidated: true });
}
