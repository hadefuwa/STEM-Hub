import React, { useState } from 'react';
import { speak, isSpeaking } from '../utils/textToSpeech';

/**
 * Interactive Question Component
 * Displays a multiple choice question with immediate feedback
 * Once answered, cannot be changed - requires lesson restart
 */
function InteractiveQuestion({ question, options, correctIndex, explanation, questionId, onAnswer }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleTTS = async () => {
    if (!question) return;
    
    try {
      // Read the question first
      await speak(question, { volume: 1.0, rate: 0.9, pitch: 1.0 });
      
      // Wait for speech to complete before reading options
      const waitForSpeech = () => {
        return new Promise((resolve) => {
          const checkInterval = setInterval(() => {
            if (!isSpeaking()) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 100);
        });
      };
      
      await waitForSpeech();
      
      // Small pause between question and options
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Read each option with its letter
      for (let i = 0; i < options.length; i++) {
        const optionText = `${String.fromCharCode(65 + i)}. ${options[i]}`;
        await speak(optionText, { volume: 1.0, rate: 0.9, pitch: 1.0 });
        await waitForSpeech();
        // Small pause between options
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } catch (err) {
      console.error('Error speaking question:', err);
    }
  };

  const handleSelect = (index) => {
    if (showFeedback) return; // Don't allow changing answer after feedback
    
    setSelectedIndex(index);
    const correct = index === correctIndex;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Notify parent component of the answer
    if (onAnswer && questionId !== undefined) {
      onAnswer(questionId, correct);
    }
  };

  const getOptionStyle = (index) => {
    const baseStyle = {
      padding: '12px 16px',
      margin: '8px 0',
      borderRadius: '8px',
      border: '1px solid var(--border-1)',
      backgroundColor: 'var(--surface-1)',
      color: 'var(--text-1)',
      cursor: showFeedback ? 'default' : 'pointer',
      transition: 'all 0.2s',
      textAlign: 'left',
      fontSize: '15px',
      lineHeight: '1.5',
    };

    if (!showFeedback) {
      return baseStyle;
    }

    if (index === correctIndex) {
      return {
        ...baseStyle,
        borderColor: 'rgba(124, 247, 180, 0.7)',
        backgroundColor: 'rgba(124, 247, 180, 0.18)',
        color: 'var(--text-1)',
        fontWeight: '600',
      };
    }

    if (index === selectedIndex && !isCorrect) {
      return {
        ...baseStyle,
        borderColor: 'rgba(255, 93, 93, 0.7)',
        backgroundColor: 'rgba(255, 93, 93, 0.18)',
        color: 'var(--text-1)',
      };
    }

    return {
      ...baseStyle,
      opacity: 0.6,
    };
  };

  return (
    <div style={{
      margin: '30px 0',
      padding: '20px',
      backgroundColor: 'var(--surface-2)',
      borderRadius: '12px',
      border: '1px solid var(--border-1)',
      boxShadow: 'var(--shadow-1)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '15px',
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: 'var(--text-1)',
          flex: 1,
        }}>
          {question}
        </div>
        <button
          onClick={handleTTS}
          style={{
            padding: '8px 12px',
            backgroundColor: 'var(--accent-1)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(72, 229, 255, 0.8)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title="Listen to question"
        >
          🔊
        </button>
      </div>
      
      <div>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            style={getOptionStyle(index)}
            onMouseEnter={(e) => {
              if (!showFeedback) {
                e.currentTarget.style.borderColor = 'var(--border-2)';
                e.currentTarget.style.backgroundColor = 'rgba(20, 34, 64, 0.9)';
              }
            }}
            onMouseLeave={(e) => {
              if (!showFeedback) {
                e.currentTarget.style.borderColor = 'var(--border-1)';
                e.currentTarget.style.backgroundColor = 'var(--surface-1)';
              }
            }}
          >
            {String.fromCharCode(65 + index)}. {option}
          </div>
        ))}
      </div>

      {showFeedback && (
        <div style={{
          marginTop: '15px',
          padding: '12px',
          borderRadius: '8px',
          backgroundColor: isCorrect ? 'rgba(124, 247, 180, 0.18)' : 'rgba(255, 182, 94, 0.18)',
          border: `1px solid ${isCorrect ? 'rgba(124, 247, 180, 0.6)' : 'rgba(255, 182, 94, 0.6)'}`,
        }}>
          <div style={{
            fontWeight: '600',
            color: 'var(--text-1)',
            marginBottom: explanation ? '8px' : '0',
          }}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </div>
          {!isCorrect && (
            <div style={{
              fontSize: '14px',
              color: 'var(--text-2)',
              marginTop: '8px',
              fontWeight: '600',
            }}>
              ⚠️ You must restart the lesson to try again.
            </div>
          )}
          {explanation && (
            <div style={{
              fontSize: '14px',
              color: 'var(--text-2)',
              marginTop: '5px',
            }}>
              {explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default InteractiveQuestion;

