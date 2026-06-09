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
      name: z
        .string()
        .trim()
        .min(1, { message: 'El nombre es obligatorio.' })
        .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
      surname: z
        .string()
        .trim()
        .min(1, { message: 'El apellido es obligatorio.' })
        .min(2, { message: 'El apellido debe tener al menos 2 caracteres.' }),
      email: z
        .string()
        .trim()
        .min(1, { message: 'El correo es obligatorio.' })
        .pipe(z.email({ message: 'Introduce un correo valido.' })),
      message: z
        .string()
        .trim()
        .min(1, { message: 'El mensaje es obligatorio.' })
        .min(5, { message: 'El mensaje debe tener al menos 5 caracteres.' }),
    }),
    handler: async (input: ContactInput) => {
      if (!hasSupabaseConfig) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Faltan las variables de entorno de Supabase.',
        });
      }

      const supabase = getSupabaseClient();
      const { error: dbError } = await supabase.from('contact_messages').insert([
        {
          name: input.name,
          surname: input.surname,
          email: input.email,
          message: input.message,
        },
      ]);

      if (dbError) {
        console.error('Error al guardar en Supabase:', dbError.message);
      }

      if (import.meta.env.RESEND_API_KEY) {
        try {
          const { Resend } = await import('resend');
          const resend = new Resend(import.meta.env.RESEND_API_KEY);
          await resend.emails.send({
            from: import.meta.env.CONTACT_EMAIL_FROM ?? 'onboarding@resend.dev',
            to: import.meta.env.CONTACT_EMAIL_TO,
            subject: `Nuevo mensaje de ${input.name} ${input.surname}`,
            html: `
              <h2>Nuevo mensaje de contacto</h2>
              <p><strong>Nombre:</strong> ${input.name} ${input.surname}</p>
              <p><strong>Email:</strong> ${input.email}</p>
              <p><strong>Mensaje:</strong></p>
              <p>${input.message}</p>
            `,
          });
        } catch (emailError) {
          console.error('Error al enviar email:', emailError);
        }
      }

      return { success: true };
    },
  }),
};
