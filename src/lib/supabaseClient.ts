import { createClient } from '@supabase/supabase-js';

/*
  Cliente Supabase - explicado

  Estrategia:
  - `publicSupabase` es el cliente pensado para uso en el frontend. Solo debe usarse
    si tienes Row Level Security (RLS) activado y políticas que permitan las operaciones
    que expones al navegador.
  - `getAdminSupabase()` crea un cliente con la clave secreta (service/secret key).
    Esa clave NUNCA debe exponerse al cliente; úsala únicamente en endpoints/server-side.

  Variables de entorno soportadas (en orden de preferencia):
  - PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_PUBLISHABLE_KEY  (recomendado para variables públicas)
  - PUBLIC_SUPABASE_ANON_KEY o SUPABASE_ANON_KEY (compatibilidad con nombre antiguo)
  - SUPABASE_URL y SUPABASE_SECRET_KEY / SUPABASE_SERVICE_ROLE_KEY (server-only)
*/

// URL pública del proyecto (expuesta) — Vite/Astro expone import.meta.env.PUBLIC_* al cliente
const publicUrl =
  import.meta.env.PUBLIC_SUPABASE_URL ??
  process.env.PUBLIC_SUPABASE_URL ??
  import.meta.env.SUPABASE_URL ??
  process.env.SUPABASE_URL ??
  '';

// Clave pública (publishable / anon). Puede llamarse publishable o anon según la versión de Supabase
const publishableKey =
  import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ??
  process.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.PUBLIC_SUPABASE_ANON_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  '';

// Cliente público — solo instanciar si tenemos la URL y la clave pública
export const publicSupabase =
  publicUrl && publishableKey ? createClient(publicUrl, publishableKey) : null;

/**
 * Crea y devuelve un cliente admin/server-side usando la clave secreta.
 * USO: solo desde endpoints (server). No importes la clave secreta en código cliente.
 */
export function getAdminSupabase() {
  const url =
    process.env.SUPABASE_URL ??
    process.env.PUBLIC_SUPABASE_URL ??
    import.meta.env.PUBLIC_SUPABASE_URL ??
    import.meta.env.SUPABASE_URL;

  // Soportamos varios nombres para la clave secreta por compatibilidad
  const key =
    process.env.SUPABASE_SECRET_KEY ??
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY ??
    import.meta.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error(
      'Faltan las variables de entorno admin (SUPABASE_SECRET_KEY o SUPABASE_SERVICE_ROLE_KEY)',
    );
  }

  return createClient(url, key);
}

/**
 * Helper para obtener el cliente público desde server-side (con error claro si falta config).
 */
export function getPublicSupabase() {
  if (!publicSupabase) {
    throw new Error(
      'Faltan las variables públicas de Supabase (PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY)',
    );
  }
  return publicSupabase;
}
