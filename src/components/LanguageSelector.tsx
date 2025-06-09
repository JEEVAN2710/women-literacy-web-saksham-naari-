import React from 'react';
import { useLanguageStore } from '../store/languageStore';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-purple-600 text-white'
            : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'hi'
            ? 'bg-purple-600 text-white'
            : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
        }`}
      >
        हिंदी
      </button>
      <button
        onClick={() => setLanguage('mr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'mr'
            ? 'bg-purple-600 text-white'
            : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
        }`}
      >
        मराठी
      </button>
    </div>
  );
}