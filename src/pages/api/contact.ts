// Importa el tipo APIRoute de Astro y el cliente de Supabase
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabaseClient';

// Define el handler para peticiones POST (envío del formulario)
export const POST: APIRoute = async ({ request }) => {
  // Obtiene los datos enviados en el formulario
  const data = await request.formData();
  const name = data.get('name');
  const surname = data.get('surname');
  const email = data.get('email');
  const message = data.get('message');

  // Validación básica: verifica que todos los campos estén presentes
  if (!name || !surname || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Todos los campos son obligatorios.' }),
      { status: 400 },
    );
  }

  // Inserta los datos en la tabla contact_messages de Supabase
  const { error } = await supabase
    .from('contact_messages')
    .insert([{ name, surname, email, message }]);

  // Maneja posibles errores al insertar en la base de datos
  if (error) {
    return new Response(
      JSON.stringify({ error: 'Error al guardar el mensaje.' }),
      { status: 500 },
    );
  }

  // Respuesta exitosa si todo salió bien
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
