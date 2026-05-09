import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request, redirect }) => {
  // Obtener datos del formulario
  const formData = await request.formData();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  // Validar que existan email y password
  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: 'Email y contraseña requeridos' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  try {
    // Crear cliente Supabase para login (usa clave pública)
    const supabase = createClient(
      import.meta.env.PUBLIC_SUPABASE_URL || '',
      import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
    );

    // Autenticar con Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      return new Response(
        JSON.stringify({ error: error?.message || 'Error al iniciar sesión' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // Guardar sesión en cookie
    const { access_token, refresh_token } = data.session;

    // Crear respuesta con redirect
    const response = new Response(null, {
      status: 302,
      headers: {
        Location: '/dashboard',
        'Set-Cookie': `auth_token=${access_token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`,
      },
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
