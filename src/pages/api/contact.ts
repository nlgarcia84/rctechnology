// src/pages/api/contact.ts

import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabaseClient';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const name = String(data.name ?? '').trim();
    const surname = String(data.surname ?? '').trim();
    const email = String(data.email ?? '').trim();
    const message = String(data.message ?? '').trim();

    if (!name || !surname || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son obligatorios.' }),
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, surname, email, message }]);

    if (error) {
      return new Response(
        JSON.stringify({ error: 'Error al guardar el mensaje.' }),
        { status: 500 },
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error del servidor.' }), {
      status: 500,
    });
  }
};
