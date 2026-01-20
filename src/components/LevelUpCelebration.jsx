import React, { useEffect, useState } from 'react';
import { CHARACTER_LEVELS } from '../data/characters';

function LevelUpCelebration({ show, onClose, levelIndex, avatarSvg, levelColor }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (show) {
      // Generate confetti particles
      const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1,
        rotation: Math.random() * 360,
        color: ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#98FB98'][Math.floor(Math.random() * 5)],
      }));
      setConfetti(particles);

      // Auto-close after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const currentLevel = CHARACTER_LEVELS[levelIndex];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100000,
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes confettiFall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px ${levelColor}66; }
          50% { box-shadow: 0 0 40px ${levelColor}aa, 0 0 60px ${levelColor}66; }
        }
      `}</style>

      {/* Confetti */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.left}%`,
            width: '10px',
            height: '10px',
            backgroundColor: particle.color,
            animation: `confettiFall ${particle.duration}s ease-in ${particle.delay}s`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        />
      ))}

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '500px',
          width: '90%',
          boxShadow: `0 20px 60px rgba(0,0,0,0.3)`,
          animation: 'bounce 0.6s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: `linear-gradient(90deg, ${levelColor}, ${levelColor}88)`,
          }}
        />

        <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</div>
        
        <h2
          style={{
            margin: '0 0 20px 0',
            fontSize: '32px',
            background: `linear-gradient(135deg, ${levelColor}, ${levelColor}cc)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Level Up!
        </h2>

        <div
          style={{
            display: 'inline-block',
            padding: '20px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${levelColor}22, #ffffff)`,
            border: `3px solid ${levelColor}88`,
            marginBottom: '20px',
            animation: 'glow 2s ease-in-out infinite',
          }}
          dangerouslySetInnerHTML={{ __html: avatarSvg }}
        />

        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
          Level {levelIndex + 1}: {currentLevel?.name}
        </div>

        <p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>
          Amazing work! Keep learning to reach the next level!
        </p>

        <button
          onClick={onClose}
          style={{
            padding: '12px 32px',
            backgroundColor: levelColor,
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          Continue Learning
        </button>
      </div>
    </div>
  );
}

export default LevelUpCelebration;
