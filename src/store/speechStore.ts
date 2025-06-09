import { create } from 'zustand';

interface SpeechState {
  text: string;
  isListening: boolean;
  setText: (text: string) => void;
  setIsListening: (isListening: boolean) => void;
}

export const useSpeechStore = create<SpeechState>((set) => ({
  text: '',
  isListening: false,
  setText: (text) => set({ text }),
  setIsListening: (isListening) => set({ isListening }),
}));