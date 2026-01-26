import type { ZodType } from 'zod';

export async function apiGet<T>(url: string, schema: ZodType<T>) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`API request to ${url} failed with status ${res.status}`);
  }

  const json = await res.json();

  return schema.parse(json);
}
