/**
 * Phonics Text-to-Speech Utility (disabled)
 * No-op implementation so phonics lessons run without audio.
 */

export const speakPhoneme = async () => Promise.resolve();
export const speakLetter = async () => Promise.resolve();
export const speakBlend = async () => Promise.resolve();
export const speakWordSlowlyThenBlended = async () => Promise.resolve();
export const stopSpeech = () => {};
export const waitForVoices = () => Promise.resolve([]);
