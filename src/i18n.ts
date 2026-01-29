export const languages = ['es', 'en'] as const;
export const defaultLanguage = 'es';

export type Lang = (typeof languages)[number]
