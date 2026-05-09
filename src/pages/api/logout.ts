import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  // Eliminar cookie de autenticación
  cookies.delete('auth_token', { path: '/' });

  // Redirigir a login
  return redirect('/login');
};
