import React, { useEffect, useMemo, useState, useRef } from 'react';
import useDataStore from '../store/dataStore';
import { Subject } from '../models/Subject';
import { useNavigate } from 'react-router-dom';
import ActivityTable from '../components/ActivityTable';
import { createAvatar } from '@dicebear/core';
import { adventurer, adventurerNeutral, micah, notionists, thumbs, pixelArt, avataaars } from '@dicebear/collection';
import { CHARACTER_LEVELS } from '../data/characters';
import LevelUpCelebration from '../components/LevelUpCelebration';
import { getUnlockedAccessories, buildAvatarOptions } from '../data/accessories';

function SubjectSelectionScreen() {
  const navigate = useNavigate();
  const getStatistics = useDataStore(state => state.getStatistics);
  const getAllLessonsForSubject = useDataStore(state => state.getAllLessonsForSubject);
  const hasCompletedLesson = useDataStore(state => state.hasCompletedLesson);
  
  const userId = useDataStore(state => state.getUserId());
  const stats = getStatistics();
  const getMedalCounts = useDataStore(state => state.getMedalCounts);
  const medalCounts = getMedalCounts();
  const [showLevelUp, setShowLevelUp] = useState(false);
  const prevLevelIndexRef = useRef(null);
  
  // Calculate total progress across all subjects
  const allSubjects = Subject.allSubjects;
  let totalLessons = 0;
  let totalCompleted = 0;
  
  allSubjects.forEach(subject => {
    const lessons = getAllLessonsForSubject(subject.id);
    totalLessons += lessons.length;
    lessons.forEach(lesson => {
      if (hasCompletedLesson(userId, lesson.yearId, lesson.subjectId, lesson.lessonNumber)) {
        totalCompleted++;
      }
    });
  });
  
  const overallProgress = totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;
  
  const levelIndex = (() => {
    const foundIndex = CHARACTER_LEVELS.findIndex(level => overallProgress <= level.max);
    return foundIndex === -1 ? CHARACTER_LEVELS.length - 1 : foundIndex;
  })();
  
  const student = useDataStore(state => state.getStudentById(userId));
  const selectedAccessories = student?.selectedAccessories || [];
  const unlockedAccessories = getUnlockedAccessories(levelIndex);
  
  const storedAvatarConfig = student?.avatarConfig || {
    style: 'adventurer',
    seed: student?.name || 'Student',
    backgroundColor: 'b6e3f4',
  };

  // Detect level-up
  useEffect(() => {
    const foundIndex = CHARACTER_LEVELS.findIndex(level => overallProgress <= level.max);
    const currentLevelIndex = foundIndex === -1 ? CHARACTER_LEVELS.length - 1 : foundIndex;
    
    if (prevLevelIndexRef.current !== null && currentLevelIndex > prevLevelIndexRef.current) {
      setShowLevelUp(true);
    }
    prevLevelIndexRef.current = currentLevelIndex;
  }, [overallProgress]);

  const avatarStyles = [
    { id: 'adventurer', label: 'Adventurer', collection: adventurer },
    { id: 'adventurerNeutral', label: 'Adventurer Neutral', collection: adventurerNeutral },
    { id: 'notionists', label: 'Notionists', collection: notionists },
    { id: 'micah', label: 'Micah', collection: micah },
    { id: 'thumbs', label: 'Thumbs', collection: thumbs },
    { id: 'pixelArt', label: 'Pixel Art', collection: pixelArt },
    { id: 'avataaars', label: 'Avataaars', collection: avataaars },
  ];

  const avatarStyle = avatarStyles.find(style => style.id === storedAvatarConfig.style) || avatarStyles[0];
  const avatarSvg = useMemo(() => {
    const options = buildAvatarOptions(selectedAccessories, storedAvatarConfig.backgroundColor);
    return createAvatar(avatarStyle.collection, {
      seed: storedAvatarConfig.seed || 'Student',
      ...options,
    }).toString();
  }, [storedAvatarConfig.backgroundColor, storedAvatarConfig.seed, avatarStyle.collection, selectedAccessories]);
  const currentLevel = CHARACTER_LEVELS[levelIndex];
  const levelBadges = ['🌱', '🧭', '⚔️', '🌟', '👑'];
  const levelColors = ['#66bb6a', '#42a5f5', '#ffa726', '#ab47bc', '#fbc02d'];
  const levelBadge = levelBadges[levelIndex] || '⭐';
  const levelColor = levelColors[levelIndex] || '#42a5f5';
  
  // Scale avatar with level (1.0x to 1.3x)
  const avatarScale = 1.0 + (levelIndex * 0.075);
  
  // Generate next level preview (if not at max)
  const nextLevelIndex = levelIndex < CHARACTER_LEVELS.length - 1 ? levelIndex + 1 : null;
  const nextLevelColor = nextLevelIndex !== null ? levelColors[nextLevelIndex] : null;
  const nextAvatarSvg = useMemo(() => {
    if (nextLevelIndex === null) return null;
    const options = buildAvatarOptions(selectedAccessories, storedAvatarConfig.backgroundColor);
    return createAvatar(avatarStyle.collection, {
      seed: storedAvatarConfig.seed || 'Student',
      ...options,
    }).toString();
  }, [nextLevelIndex, storedAvatarConfig.seed, storedAvatarConfig.backgroundColor, avatarStyle.collection, selectedAccessories]);
  const levelProgress = (() => {
    if (CHARACTER_LEVELS.length === 0) return 0;
    if (levelIndex === CHARACTER_LEVELS.length - 1) return 100;
    const range = currentLevel.max - currentLevel.min;
    if (range <= 0) return 100;
    const progress = ((overallProgress - currentLevel.min) / range) * 100;
    return Math.min(100, Math.max(0, Math.round(progress)));
  })();

  const handleSubjectClick = (subjectId) => {
    navigate(`/lessons?subjectId=${subjectId}`);
  };

  const cardBase = {
    backgroundColor: 'var(--surface-2)',
    border: '1px solid var(--border-1)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-1)',
  };

  return (
    <div style={{ 
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>      <LevelUpCelebration
        show={showLevelUp}
        onClose={() => setShowLevelUp(false)}
        levelIndex={levelIndex}
        avatarSvg={avatarSvg}
        levelColor={levelColor}
      />
      <div style={{
        width: '100%',
        maxWidth: '1200px',
      }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '20px',
        color: 'var(--text-1)'
      }}>
        Select Subject
      </h1>

      {/* Avatar Studio - Compact */}
      <div style={{
        marginBottom: '30px',
        padding: '16px 20px',
        ...cardBase,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
      }}>
        <style>{`
          @keyframes homePulse {
            0%, 100% { 
              box-shadow: 0 4px 15px ${levelColor}66;
            }
            50% { 
              box-shadow: 0 6px 25px ${levelColor}aa;
            }
          }
          @keyframes miniAuraRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes miniSparkle {
            0%, 100% { transform: translateY(0px); opacity: 0.6; }
            50% { transform: translateY(-8px); opacity: 1; }
          }
        `}</style>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flex: 1,
        }}>
          {/* Avatar */}
          <div style={{
            background: levelIndex >= 4
              ? `radial-gradient(circle, ${levelColor}44, ${levelColor}11)`
              : `linear-gradient(135deg, ${levelColor}33, var(--surface-1))`,
            borderRadius: '12px',
            padding: '12px',
            border: levelIndex === CHARACTER_LEVELS.length - 1 
              ? `3px solid ${levelColor}` 
              : `2px solid ${levelColor}55`,
            position: 'relative',
            boxShadow: levelIndex >= 3
              ? `0 ${5 + levelIndex * 2}px ${15 + levelIndex * 5}px ${levelColor}88`
              : `0 ${5 + levelIndex * 2}px ${15 + levelIndex * 5}px ${levelColor}${Math.min(22 + levelIndex * 8, 88).toString(16)}`,
            animation: levelIndex >= 4 ? 'homePulse 2s ease-in-out infinite' : 'none',
            overflow: 'visible',
          }}>
            {/* Level 5 Mini Aura */}
            {levelIndex >= 4 && (
              <div style={{
                position: 'absolute',
                width: '130%',
                height: '130%',
                border: `2px solid ${levelColor}`,
                borderRadius: '50%',
                top: '-15%',
                left: '-15%',
                animation: 'miniAuraRotate 3s linear infinite',
                opacity: 0.4,
              }} />
            )}
            
            {/* Level 3+ Sparkles */}
            {levelIndex >= 2 && Array.from({ length: levelIndex >= 4 ? 3 : 2 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  fontSize: '12px',
                  top: `${10 + i * 30}%`,
                  right: `${-5 + i * 10}%`,
                  animation: `miniSparkle ${1.5 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                ✨
              </div>
            ))}
            
            <div style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              fontSize: '16px',
              filter: levelIndex >= 4 ? `drop-shadow(0 0 5px ${levelColor})` : 'none',
            }}>
              {levelBadge}
            </div>
            <div
              style={{
                width: '80px',
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `scale(${Math.min(avatarScale, 1.15)})`,
                filter: levelIndex >= 4
                  ? `drop-shadow(0 0 10px ${levelColor})`
                  : levelIndex >= 2
                  ? `drop-shadow(0 0 5px ${levelColor}88)`
                  : 'none',
              }}
              dangerouslySetInnerHTML={{ __html: avatarSvg }}
            />
          </div>
          
          {/* Info */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-1)', marginBottom: '4px' }}>
              {student?.name || 'Student'}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)', marginBottom: '8px' }}>
              Level {levelIndex + 1} · {currentLevel.name}
            </div>
            <div style={{
              width: '100%',
              maxWidth: '300px',
              height: '8px',
              backgroundColor: 'rgba(120, 190, 255, 0.2)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${levelProgress}%`,
                height: '100%',
                backgroundColor: levelColor,
                transition: 'width 0.3s ease',
              }} />
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '4px' }}>
              {levelProgress}% to next level
            </div>
          </div>
        </div>

        {/* Customize Button */}
        <button
          onClick={() => navigate('/character')}
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: levelColor,
            color: 'white',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '14px',
            whiteSpace: 'nowrap',
            boxShadow: 'var(--shadow-1)',
          }}
        >
          🎨 Customize
        </button>
      </div>
      
      {/* Overall Progress Stats */}
      <div style={{
        marginBottom: '30px',
        padding: '20px',
        ...cardBase,
      }}>
        <h2 style={{
          margin: '0 0 15px 0',
          fontSize: '20px',
          color: 'var(--text-1)',
          textAlign: 'center',
        }}>
          📊 Overall Progress
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '20px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--accent-1)' }}>
              {totalCompleted}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)', marginTop: '5px' }}>
              Lessons Completed
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--accent-2)' }}>
              {totalLessons}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)', marginTop: '5px' }}>
              Total Lessons
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--accent-3)' }}>
              {stats.totalQuizzes}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)', marginTop: '5px' }}>
              Quizzes Completed
            </div>
          </div>
          {stats.averageScore > 0 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--accent-1)' }}>
                {Math.round(stats.averageScore)}%
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-2)', marginTop: '5px' }}>
                Average Score
              </div>
            </div>
          )}
        </div>
        <div style={{
          width: '100%',
          height: '12px',
          backgroundColor: 'rgba(120, 190, 255, 0.2)',
          borderRadius: '6px',
          overflow: 'hidden',
          marginTop: '10px',
        }}>
          <div style={{
            width: `${overallProgress}%`,
            height: '100%',
            backgroundColor: 'var(--accent-1)',
            transition: 'width 0.3s',
            borderRadius: '6px',
          }} />
        </div>
        <div style={{
          textAlign: 'center',
          marginTop: '10px',
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--text-1)',
        }}>
          {Math.round(overallProgress)}% Complete
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}>
        {Subject.allSubjects.map(subject => (
          <div
            key={subject.id}
            onClick={() => handleSubjectClick(subject.id)}
            style={{
              padding: '24px',
              ...cardBase,
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-2)';
              e.currentTarget.style.backgroundColor = 'rgba(20, 34, 64, 0.95)';
              e.currentTarget.style.borderColor = 'var(--border-2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-1)';
              e.currentTarget.style.backgroundColor = 'var(--surface-2)';
              e.currentTarget.style.borderColor = 'var(--border-1)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>
              {subject.emoji}
            </div>
            <div style={{ 
              fontSize: '18px', 
              fontWeight: '600',
              color: 'var(--text-1)'
            }}>
              {subject.name}
            </div>
          </div>
        ))}
      </div>
      
      {/* Medal Statistics */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        ...cardBase,
        width: '100%',
      }}>
        <h2 style={{
          margin: '0 0 20px 0',
          fontSize: '20px',
          color: 'var(--text-1)',
          textAlign: 'center',
        }}>
          🏆 Medals Earned
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '15px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#E5E4E2',
              marginBottom: '5px'
            }}>
              {medalCounts.platinum}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)' }}>
              Platinum
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#FFD700',
              marginBottom: '5px'
            }}>
              {medalCounts.gold}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)' }}>
              Gold
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#C0C0C0',
              marginBottom: '5px'
            }}>
              {medalCounts.silver}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)' }}>
              Silver
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#CD7F32',
              marginBottom: '5px'
            }}>
              {medalCounts.bronze}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)' }}>
              Bronze
            </div>
          </div>
        </div>
      </div>
      
      {/* Activity Table */}
      <div style={{
        marginTop: '40px',
        width: '100%',
      }}>
        <ActivityTable />
      </div>
      </div>
    </div>
  );
}

export default SubjectSelectionScreen;

