import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.SUPABASE_URL ?? process.env.SUPABASE_URL ?? '';
const supabaseAnonKey =
  import.meta.env.SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? '';

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function getSupabaseClient() {
  if (!supabase) {
    throw new Error('Faltan las variables de entorno de Supabase');
  }

  return supabase;
}
