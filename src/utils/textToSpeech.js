/**
 * Text-to-Speech Utility Module
 * Uses Web Speech API for reading text aloud
 */

// Check if TTS is supported
const isSupported = () => {
  return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
};

// Get available voices (with async handling)
let voicesLoaded = false;
let voices = [];

const loadVoices = () => {
  if (typeof window === 'undefined' || !isSupported()) {
    return [];
  }
  
  voices = window.speechSynthesis.getVoices();
  voicesLoaded = voices.length > 0;
  return voices;
};

// Load voices when they become available
if (typeof window !== 'undefined' && isSupported()) {
  // Some browsers load voices asynchronously
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  // Try to load immediately
  loadVoices();
  
  // Also try after a short delay (some browsers need this)
  setTimeout(loadVoices, 100);
}

// Get user preferences from localStorage
const getPreferences = () => {
  try {
    const stored = localStorage.getItem('ttsPreferences');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to load TTS preferences:', e);
  }
  
  // Default preferences
  return {
    enabled: true,  // TTS enabled by default
    autoRead: false,
    readAnswers: true,  // Read answers when selected enabled by default
    voice: null, // Will use default system voice
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
  };
};

// Save user preferences to localStorage
const savePreferences = (prefs) => {
  try {
    localStorage.setItem('ttsPreferences', JSON.stringify(prefs));
  } catch (e) {
    console.warn('Failed to save TTS preferences:', e);
  }
};

// Current utterance reference for control
let currentUtterance = null;

/**
 * Speak text using TTS
 * @param {string} text - Text to speak
 * @param {Object} options - Optional settings (voice, rate, pitch, volume)
 * @returns {Promise} - Resolves when speech starts, rejects on error
 */
const speak = (text, options = {}) => {
  if (!isSupported()) {
    return Promise.reject(new Error('Text-to-speech is not supported in this browser'));
  }

  if (!text || typeof text !== 'string') {
    return Promise.reject(new Error('Invalid text provided'));
  }

  return new Promise((resolve, reject) => {
    try {
      // Stop any current speech
      stop();

      // Get preferences
      const prefs = getPreferences();
      
      // Create utterance
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice
      if (options.voice || prefs.voice) {
        const voiceName = options.voice || prefs.voice;
        const availableVoices = getVoices();
        const selectedVoice = availableVoices.find(v => 
          v.name === voiceName || v.voiceURI === voiceName
        );
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
      }
      
      // Set properties
      utterance.rate = options.rate !== undefined ? options.rate : prefs.rate;
      utterance.pitch = options.pitch !== undefined ? options.pitch : prefs.pitch;
      utterance.volume = options.volume !== undefined ? options.volume : prefs.volume;
      
      // Event handlers
      utterance.onstart = () => {
        currentUtterance = utterance;
        resolve();
      };
      
      utterance.onend = () => {
        currentUtterance = null;
      };
      
      utterance.onerror = (event) => {
        currentUtterance = null;
        reject(new Error(`Speech synthesis error: ${event.error}`));
      };
      
      // Speak
      window.speechSynthesis.speak(utterance);
      
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Stop current speech
 */
const stop = () => {
  if (isSupported()) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
};

/**
 * Pause current speech
 */
const pause = () => {
  if (isSupported()) {
    window.speechSynthesis.pause();
  }
};

/**
 * Resume paused speech
 */
const resume = () => {
  if (isSupported()) {
    window.speechSynthesis.resume();
  }
};

/**
 * Get available voices
 * @returns {Array} Array of voice objects
 */
const getVoices = () => {
  if (!isSupported()) {
    return [];
  }
  
  // Ensure voices are loaded
  if (!voicesLoaded) {
    loadVoices();
  }
  
  return voices.length > 0 ? voices : window.speechSynthesis.getVoices();
};

/**
 * Check if currently speaking
 * @returns {boolean}
 */
const isSpeaking = () => {
  if (!isSupported()) {
    return false;
  }
  return window.speechSynthesis.speaking;
};

/**
 * Check if currently paused
 * @returns {boolean}
 */
const isPaused = () => {
  if (!isSupported()) {
    return false;
  }
  return window.speechSynthesis.paused;
};

/**
 * Set default voice
 * @param {string} voiceName - Name or URI of the voice
 */
const setVoice = (voiceName) => {
  const prefs = getPreferences();
  prefs.voice = voiceName;
  savePreferences(prefs);
};

/**
 * Set speech rate
 * @param {number} rate - Rate between 0.1 and 10
 */
const setRate = (rate) => {
  const prefs = getPreferences();
  prefs.rate = Math.max(0.1, Math.min(10, rate));
  savePreferences(prefs);
};

/**
 * Set pitch
 * @param {number} pitch - Pitch between 0 and 2
 */
const setPitch = (pitch) => {
  const prefs = getPreferences();
  prefs.pitch = Math.max(0, Math.min(2, pitch));
  savePreferences(prefs);
};

/**
 * Set volume
 * @param {number} volume - Volume between 0 and 1
 */
const setVolume = (volume) => {
  const prefs = getPreferences();
  prefs.volume = Math.max(0, Math.min(1, volume));
  savePreferences(prefs);
};

/**
 * Set auto-read preference
 * @param {boolean} enabled
 */
const setAutoRead = (enabled) => {
  const prefs = getPreferences();
  prefs.autoRead = enabled;
  savePreferences(prefs);
};

/**
 * Set read answers preference
 * @param {boolean} enabled
 */
const setReadAnswers = (enabled) => {
  const prefs = getPreferences();
  prefs.readAnswers = enabled;
  savePreferences(prefs);
};

/**
 * Set TTS enabled state
 * @param {boolean} enabled
 */
const setEnabled = (enabled) => {
  const prefs = getPreferences();
  prefs.enabled = enabled;
  savePreferences(prefs);
  if (!enabled) {
    stop();
  }
};

export {
  isSupported,
  speak,
  stop,
  pause,
  resume,
  getVoices,
  isSpeaking,
  isPaused,
  getPreferences,
  savePreferences,
  setVoice,
  setRate,
  setPitch,
  setVolume,
  setAutoRead,
  setReadAnswers,
  setEnabled,
};

