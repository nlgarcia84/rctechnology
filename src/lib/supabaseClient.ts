// Este será el único archivo donde inicializaremos
// el cliente de Supabase usando las variables de entorno
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

// Verificación de seguridad para TypeScript
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las variables de entorno de Supabase');
}

// Exportamos el cliente con los tipos detectados
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
