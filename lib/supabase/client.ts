import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

let client: SupabaseClient<Database> | null = null;

/**
 * Lazily creates the browser Supabase client.
 *
 * Only NEXT_PUBLIC_* variables are inlined into the browser bundle by Next.js,
 * so those are the only ones read here. Returns null (instead of throwing at
 * import time and taking the whole page down) when they are missing.
 */
export function getSupabase(): SupabaseClient<Database> | null {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  client = createClient<Database>(url, anonKey, {
    // The site only inserts anonymously; no auth session to keep.
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
