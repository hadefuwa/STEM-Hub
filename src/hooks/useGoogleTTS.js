import { useState } from 'react';

/**
 * TTS hook (disabled)
 * Keeps API shape for components without providing audio.
 */
export const useGoogleTTS = () => {
  const [state] = useState({
    enabled: false,
    speaking: false,
    lastText: '',
    rate: 1,
    pitch: 0,
    autoRead: false,
    readAnswers: false,
    voices: [],
    currentVoice: null
  });

  return {
    ...state,
    speak: async () => Promise.resolve(),
    stop: () => {},
    replay: () => {},
    setRate: () => {},
    setEnabled: () => {},
    setAutoRead: () => {},
  };
};

export const useAutoSpeak = () => {};

export default useGoogleTTS;
