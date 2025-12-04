import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  if (supabase) return supabase;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are not configured.');
    return null;
  }

  supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
};
