import { s as supabase } from './supabaseClient_DKYvw2QP.mjs';
import * as z from 'zod/v4';
import { d as defineAction } from './entrypoint_g7PPwlsS.mjs';

const server = {
  enviarContacto: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      // Antes era 'nombre'
      surname: z.string().min(2),
      // Antes era 'apellido'
      email: z.string().email(),
      message: z.string().min(5)
      // Antes era 'texto'
    }),
    handler: async (input) => {
      const { data, error } = await supabase.from("contact_messages").insert([
        {
          name: input.name,
          surname: input.surname,
          email: input.email,
          message: input.message
        }
      ]);
      if (error) throw new Error(error.message);
      return { success: true };
    }
  })
};

export { server };
