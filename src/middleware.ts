import { defineMiddleware } from 'astro/middleware';

const SUPPORTED = ['es', 'ca', 'en'] as const;
type Locale = (typeof SUPPORTED)[number];

export const onRequest = defineMiddleware((context, next) => {
  let locale: Locale = 'es';

  const cookie = context.cookies.get('locale')?.value;
  if (cookie && SUPPORTED.includes(cookie as Locale)) {
    locale = cookie as Locale;
  }

  context.locals.locale = locale;
  return next();
});
