import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Volume2, ArrowLeft } from 'lucide-react';
import { useSpeechStore } from '../store/speechStore';
import { useLanguageStore } from '../store/languageStore';
import LanguageSelector from './LanguageSelector';

const content = {
  en: {
    title: 'Bolo Akshar',
    subtitle: 'Learn alphabets and basic words',
    youSaid: 'You Said:',
    alphabets: 'Alphabets',
    basicWords: 'Basic Words',
    backToHome: 'Back to Home',
  },
  hi: {
    title: 'बोलो अक्षर',
    subtitle: 'वर्णमाला और बुनियादी शब्द सीखें',
    youSaid: 'आपने कहा:',
    alphabets: 'वर्णमाला',
    basicWords: 'बुनियादी शब्द',
    backToHome: 'होम पर वापस जाएं',
  },
  mr: {
    title: 'बोला अक्षर',
    subtitle: 'मुळाक्षरे आणि मूलभूत शब्द शिका',
    youSaid: 'तुम्ही म्हणालात:',
    alphabets: 'मुळाक्षरे',
    basicWords: 'मूलभूत शब्द',
    backToHome: 'मुख्यपृष्ठावर परत जा',
  }
};

const words = {
  en: [
    { word: 'Apple', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300&h=300' },
    { word: 'Book', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=300&h=300' },
    { word: 'Cat', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=300&h=300' },
  ],
  hi: [
    { word: 'सेब', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300&h=300' },
    { word: 'किताब', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=300&h=300' },
    { word: 'बिल्ली', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=300&h=300' },
  ],
  mr: [
    { word: 'सफरचंद', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300&h=300' },
    { word: 'पुस्तक', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=300&h=300' },
    { word: 'मांजर', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=300&h=300' },
  ],
};

const alphabets = {
  en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  hi: 'अ आ इ ई उ ऊ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म'.split(' '),
  mr: 'अ आ इ ई उ ऊ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म'.split(' '),
};

export default function BoloAkshar() {
  const navigate = useNavigate();
  const { text } = useSpeechStore();
  const { language } = useLanguageStore();
  
  const playAudio = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'mr-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  const t = content[language];
  const currentAlphabets = alphabets[language];
  const currentWords = words[language];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.backToHome}
        </button>
        <LanguageSelector />
      </div>

      <h2 className="text-3xl font-bold text-purple-800 mb-4">{t.title}</h2>
      <p className="text-gray-600 mb-8">{t.subtitle}</p>
      
      {/* Speech Recognition Text Display */}
      {text && (
        <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">{t.youSaid}</h3>
          <p className="text-gray-800 text-lg">{text}</p>
        </div>
      )}
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">{t.alphabets}</h3>
        <div className="grid grid-cols-6 gap-4 mb-8">
          {currentAlphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => playAudio(letter)}
              className="aspect-square flex items-center justify-center bg-white rounded-lg shadow-md text-2xl font-bold text-purple-600 hover:bg-purple-50 transition-colors relative group"
            >
              {letter}
              <Volume2 className="absolute bottom-1 right-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">{t.basicWords}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWords.map(({ word, image }) => (
            <div
              key={word}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={image} alt={word} className="w-full h-48 object-cover" />
              <div className="p-4 flex items-center justify-between">
                <span className="text-xl font-medium">{word}</span>
                <button
                  onClick={() => playAudio(word)}
                  className="p-2 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <Volume2 className="text-purple-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}