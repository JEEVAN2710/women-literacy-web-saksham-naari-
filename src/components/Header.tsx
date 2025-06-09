import React from 'react';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { useSpeechStore } from '../store/speechStore';
import LanguageSelector from './LanguageSelector';
import { useLanguageStore } from '../store/languageStore';

export default function Header() {
  const { text, isListening, setText, setIsListening } = useSpeechStore();
  const { t } = useLanguageStore();

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');
        setText(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in this browser.');
    }
  };

  return (
    <div>
      <nav className="bg-white py-4 px-6 shadow-sm relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <div className="flex items-center">
            <div className="hand-drawn-character" />
            <div className="text-center">
              <h1 className="hand-drawn text-3xl font-bold text-gray-800 hand-drawn-border">
                {t('header.title')}
              </h1>
              <p className="hand-drawn text-lg text-gray-600 mt-1">
                {t('header.subtitle')}
              </p>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </nav>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-12 flex justify-center">
        <div className="relative">
          {/* Tap Here Text with Arrow */}
          <div className="absolute -left-8 -top-12 transform -rotate-12">
            <div className="text-red-500 font-handwriting text-3xl font-bold filter drop-shadow-lg animate-bounce">
              {t('header.tapHere')}
              <svg className="w-16 h-16 ml-1 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Microphone with Rays */}
          <div className="relative">
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 origin-center"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                  }}
                >
                  <div className="h-1.5 w-12 bg-purple-400/50 absolute top-1/2 left-full ml-2 transform -translate-y-1/2 animate-pulse" 
                    style={{
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                </div>
              ))}
            </div>
            
            <button 
              onClick={startListening}
              className="relative bg-transparent p-10 rounded-full cursor-pointer transform hover:scale-110 transition-all duration-300 hover:rotate-12"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.4))'
              }}
            >
              <FaMicrophoneAlt 
                size={96}
                className={`text-purple-600 ${isListening ? 'animate-pulse' : ''}`}
              />
            </button>
          </div>

          {/* Speech Text Display */}
          {text && (
            <div className="mt-8 bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
              <p className="text-gray-800 text-lg">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}