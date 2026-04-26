import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
// Asegúrate de que este import coincida con tu export en src/lib/supabaseClient
import { supabase } from '../lib/supabaseClient';

export const server = {
  enviarContacto: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2), // Antes era 'nombre'
      surname: z.string().min(2), // Antes era 'apellido'
      email: z.string().email(),
      message: z.string().min(5), // Antes era 'texto'
    }),
    handler: async (input) => {
      // Ahora usamos directamente los nuevos nombres del input
      const { data, error } = await supabase.from('contact_messages').insert([
        {
          name: input.name,
          surname: input.surname,
          email: input.email,
          message: input.message,
        },
      ]);

      if (error) throw new Error(error.message);
      return { success: true };
    },
  }),
};
