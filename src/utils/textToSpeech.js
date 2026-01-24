/**
 * Text-to-Speech Utility Module (disabled)
 * No-op implementation so the app runs without TTS.
 */

const isElectron = () => false;
const isWebSpeechSupported = () => false;
const isSupported = () => false;

const speak = async () => Promise.resolve();
const stop = () => {};
const pause = () => {};
const resume = () => {};
const isPaused = () => false;
const isSpeaking = () => false;
const getVoices = () => [];

const getPreferences = () => ({
  enabled: false,
  autoRead: false,
  readAnswers: false,
  rate: 1.0,
  pitch: 1.0,
  volume: 1.0,
  voice: null,
  preferredVoice: null
});

const savePreferences = () => {};
const setEnabled = () => {};
const setAutoRead = () => {};
const setReadAnswers = () => {};

const textToSpeech = {
  isElectron,
  isWebSpeechSupported,
  isSupported,
  speak,
  stop,
  pause,
  resume,
  isPaused,
  isSpeaking,
  getVoices,
  getPreferences,
  savePreferences,
  setEnabled,
  setAutoRead,
  setReadAnswers,
  autoRead: false
};

export default textToSpeech;
export {
  speak,
  stop,
  pause,
  resume,
  isPaused,
  isSpeaking,
  isSupported,
  getVoices,
  getPreferences,
  savePreferences,
  setEnabled,
  setAutoRead,
  setReadAnswers
};
