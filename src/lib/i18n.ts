import es from './translations/es.json';
import ca from './translations/ca.json';
import en from './translations/en.json';

export type Locale = 'es' | 'ca' | 'en';

const translations: Record<Locale, Record<string, string>> = { es, ca, en };

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? key;
}

export const LOCALES: Locale[] = ['es', 'ca', 'en'];
