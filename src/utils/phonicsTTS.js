/**
 * Phonics Text-to-Speech Utility
 * Generates pure phoneme sounds for phonics lessons
 * Uses edge-tts (high-quality) in Electron, falls back to Web Speech API
 */
import { speak as baseSpeak, stop as baseStop } from './textToSpeech';

// Phoneme mappings for pure sounds
const PHONEME_MAP = {
  // Vowels
  'a': 'æ', // as in "cat"
  'e': 'ɛ', // as in "bed"
  'i': 'ɪ', // as in "sit"
  'o': 'ɒ', // as in "hot"
  'u': 'ʌ', // as in "cup"
  
  // Consonants
  'm': 'm',
  's': 's',
  't': 't',
  'b': 'b',
  'c': 'k',
  'd': 'd',
  'f': 'f',
  'g': 'g',
  'h': 'h',
  'j': 'dʒ',
  'k': 'k',
  'l': 'l',
  'n': 'n',
  'p': 'p',
  'q': 'kw',
  'r': 'r',
  'v': 'v',
  'w': 'w',
  'x': 'ks',
  'y': 'j',
  'z': 'z',
};

// Blends and words with phonetic pronunciation
const BLEND_PRONUNCIATIONS = {
  'ma': 'mæ',
  'me': 'mɛ',
  'mo': 'mɒ',
  'at': 'æt',
  'it': 'ɪt',
  'on': 'ɒn',
  'cat': 'kæt',
  'mat': 'mæt',
  'sun': 'sʌn',
  'dog': 'dɒg',
  'hat': 'hæt',
};

/**
 * Speak a pure phoneme sound
 * @param {string} letter - Single letter to speak
 * @param {Object} options - TTS options
 */
export const speakPhoneme = async (letter, options = {}) => {
  if (!letter || letter.length === 0) return;

  const lowerLetter = letter.toLowerCase();
  const phoneme = PHONEME_MAP[lowerLetter];

  if (!phoneme) {
    // Fallback to letter name
    return speakLetter(letter, options);
  }

  // Get example word and phonics teaching phrase
  const { sound, word } = getPhonicsTeaching(lowerLetter);

  // Use centralized TTS (edge-tts in Electron, Web Speech API fallback)
  // Speak the sound, then the word, then the sound again
  try {
    // First: Just the sound
    await baseSpeak(sound, {
      volume: options.volume !== undefined ? options.volume : 1.0,
      rate: 0.5, // Very slow for the isolated sound
      pitch: options.pitch !== undefined ? options.pitch : 1.0,
      awaitCompletion: true,
    });

    // Small pause
    await new Promise(resolve => setTimeout(resolve, 300));

    // Then: "as in [word]"
    await baseSpeak(`as in ${word}`, {
      volume: options.volume !== undefined ? options.volume : 1.0,
      rate: 0.8,
      pitch: options.pitch !== undefined ? options.pitch : 1.0,
      awaitCompletion: true,
    });

    // Small pause
    await new Promise(resolve => setTimeout(resolve, 300));

    // Finally: The sound again
    await baseSpeak(sound, {
      volume: options.volume !== undefined ? options.volume : 1.0,
      rate: 0.5,
      pitch: options.pitch !== undefined ? options.pitch : 1.0,
      awaitCompletion: true,
    });
  } catch (error) {
    console.error('Error speaking phoneme:', error);
    throw error;
  }
};

/**
 * Speak a letter name
 */
export const speakLetter = async (letter, options = {}) => {
  // Use centralized TTS (edge-tts in Electron, Web Speech API fallback)
  try {
    await baseSpeak(letter.toUpperCase(), {
      volume: options.volume !== undefined ? options.volume : 1.0,
      rate: options.rate || 0.8, // For Web Speech API fallback
      pitch: options.pitch || 1.2, // For Web Speech API fallback
      awaitCompletion: true,
    });
  } catch (error) {
    console.error('Error speaking letter:', error);
    throw error;
  }
};

/**
 * Speak a blend or word
 */
export const speakBlend = async (blend, options = {}) => {
  // Use phonetic pronunciation if available
  const pronunciation = BLEND_PRONUNCIATIONS[blend.toLowerCase()] || blend;
  
  // Use centralized TTS (edge-tts in Electron, Web Speech API fallback)
  try {
    await baseSpeak(pronunciation, {
      volume: options.volume !== undefined ? options.volume : 1.0,
      rate: options.rate || 0.6, // Slower for blending (Web Speech API fallback)
      pitch: options.pitch || 1.2, // Slightly higher pitch (Web Speech API fallback)
      awaitCompletion: true,
    });
  } catch (error) {
    console.error('Error speaking blend:', error);
    throw error;
  }
};

/**
 * Speak a word slowly, then blended
 */
export const speakWordSlowlyThenBlended = async (word, options = {}) => {
  // First speak each letter sound slowly
  for (let i = 0; i < word.length; i++) {
    await speakPhoneme(word[i], { rate: 0.6, ...options, awaitCompletion: true });
    await new Promise(resolve => setTimeout(resolve, 300)); // Pause between sounds
  }
  
  // Then speak the word blended
  await new Promise(resolve => setTimeout(resolve, 500));
  await speakBlend(word, { rate: 0.8, ...options, awaitCompletion: true });
};

/**
 * Get phonics teaching for a letter - returns the sound and an example word
 * This uses the traditional phonics approach: sound, example, sound
 */
function getPhonicsTeaching(letter) {
  const teachings = {
    // Vowels - short vowel sounds with example words
    'a': { sound: 'ah', word: 'apple' },
    'e': { sound: 'eh', word: 'elephant' },
    'i': { sound: 'ih', word: 'igloo' },
    'o': { sound: 'ah', word: 'octopus' },
    'u': { sound: 'uh', word: 'umbrella' },

    // Consonants with clear example words
    'b': { sound: 'buh', word: 'ball' },
    'c': { sound: 'kuh', word: 'cat' },
    'd': { sound: 'duh', word: 'dog' },
    'f': { sound: 'ff', word: 'fish' },
    'g': { sound: 'guh', word: 'goat' },
    'h': { sound: 'hh', word: 'hat' },
    'j': { sound: 'juh', word: 'jam' },
    'k': { sound: 'kuh', word: 'kite' },
    'l': { sound: 'luh', word: 'lion' },
    'm': { sound: 'mm', word: 'monkey' },
    'n': { sound: 'nuh', word: 'nest' },
    'p': { sound: 'puh', word: 'pig' },
    'q': { sound: 'kwuh', word: 'queen' },
    'r': { sound: 'rr', word: 'rabbit' },
    's': { sound: 'ss', word: 'sun' },
    't': { sound: 'tuh', word: 'tiger' },
    'v': { sound: 'vuh', word: 'van' },
    'w': { sound: 'wuh', word: 'water' },
    'x': { sound: 'ks', word: 'box' },
    'y': { sound: 'yuh', word: 'yellow' },
    'z': { sound: 'zz', word: 'zebra' },
  };

  return teachings[letter] || { sound: letter, word: letter };
}

/**
 * Stop current speech
 */
export const stopSpeech = () => {
  // Use centralized stop function
  baseStop();
};

/**
 * Wait for voices to load
 */
export const waitForVoices = () => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve([]);
      return;
    }
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
    
    // Timeout after 2 seconds
    setTimeout(() => {
      resolve(window.speechSynthesis.getVoices());
    }, 2000);
  });
};
