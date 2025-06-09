import { create } from 'zustand';
import { translations, Language } from '../translations';

type DeepKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${DeepKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

type TranslationPath = DeepKeyOf<typeof translations.en>;

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (path: TranslationPath) => string;
}

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
  t: (path) => {
    const language = get().language;
    return path.split('.').reduce((obj, key) => obj[key], translations[language] as any) || path;
  },
}));