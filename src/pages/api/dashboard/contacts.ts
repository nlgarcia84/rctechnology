import type { APIRoute } from 'astro';
import {
  getAdminSupabase,
  getPublicSupabase,
} from '../../../lib/supabaseClient';

async function requireAdminFromJwt(request: Request) {
  const authHeader = request.headers.get('authorization') ?? '';
  if (!authHeader.startsWith('Bearer ')) {
    throw new Error('Unauthorized');
  }

  const token = authHeader.slice('Bearer '.length).trim();
  if (!token) {
    throw new Error('Unauthorized');
  }

  // 1) Validar que el JWT corresponde a un usuario autenticado
  const authClient = getPublicSupabase();
  const { data: userData, error: userError } =
    await authClient.auth.getUser(token);
  if (userError || !userData.user) {
    throw new Error('Unauthorized');
  }

  // 2) Verificar que ese usuario está en admin_users
  const adminClient = getAdminSupabase();
  const { data: adminRow, error: adminError } = await adminClient
    .from('admin_users')
    .select('user_id')
    .eq('user_id', userData.user.id)
    .maybeSingle();

  if (adminError || !adminRow) {
    throw new Error('Forbidden');
  }

  return userData.user;
}

export const GET: APIRoute = async ({ request }) => {
  try {
    // Validar admin antes de cualquier operación
    await requireAdminFromJwt(request);

    const url = new URL(request.url);

    // Parámetros de paginación y búsqueda con valores por defecto y límites
    const page = Math.max(1, Number(url.searchParams.get('page') ?? 1));
    const per_page = Math.min(
      100,
      Math.max(1, Number(url.searchParams.get('per_page') ?? 20)),
    );
    const search = (url.searchParams.get('search') ?? '').trim();
    const sortParam = url.searchParams.get('sort') ?? 'created_at.desc';

    const [sortByRaw, sortDirRaw] = sortParam.split('.');
    const sortBy = sortByRaw || 'created_at';
    const sortDir = (sortDirRaw === 'asc' ? 'asc' : 'desc') as 'asc' | 'desc';

    const offset = (page - 1) * per_page;
    const rangeStart = offset;
    const rangeEnd = offset + per_page - 1;

    // Crear cliente admin (usa la clave secreta desde env)
    const supabase = getAdminSupabase();

    // Construir la consulta: seleccionamos campos explícitos para evitar exponer columnas sensibles
    let query = supabase
      .from('contact_messages')
      .select('id,name,email,message,created_at', { count: 'exact' })
      .order(sortBy, { ascending: sortDir === 'asc' })
      .range(rangeStart, rangeEnd);

    // Búsqueda simple: nombre, email o mensaje (ilike -> case-insensitive)
    if (search) {
      // El patrón con % para ilike
      const q = `%${search}%`;
      // `.or()` acepta expresiones separadas por comas
      query = query.or(`name.ilike.${q},email.ilike.${q},message.ilike.${q}`);
    }

    const { data, error, count } = await query;
    if (error) throw error;

    // Respuesta con datos y metadatos de paginación
    return new Response(
      JSON.stringify({
        data: data ?? [],
        meta: { page, per_page, total: count ?? 0 },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err: any) {
    // Errores controlados: si es 'Unauthorized' devolvemos 401, si no 500
    const status =
      err.message === 'Unauthorized'
        ? 401
        : err.message === 'Forbidden'
          ? 403
          : 500;
    return new Response(JSON.stringify({ error: err.message }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
