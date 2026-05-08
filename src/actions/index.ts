import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { getSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

type ContactInput = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2),
      surname: z.string().min(2),
      email: z.string().email(),
      message: z.string().min(5),
    }),
    handler: async (input: ContactInput) => {
      if (!hasSupabaseConfig) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Faltan las variables de entorno de Supabase.',
        });
      }

      const supabase = getSupabaseClient();
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: input.name,
          surname: input.surname,
          email: input.email,
          message: input.message,
        },
      ]);

      if (error) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      return { success: true };
    },
  }),
};
