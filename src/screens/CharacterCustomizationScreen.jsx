import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { createAvatar } from '@dicebear/core';
import { adventurer, adventurerNeutral, micah, notionists, thumbs, pixelArt, avataaars } from '@dicebear/collection';
import { CHARACTER_LEVELS } from '../data/characters';
import { getUnlockedAccessories, getAccessoriesByCategory, getAccessoryRequirements, getAllAccessories, buildAvatarOptions } from '../data/accessories';

function CharacterCustomizationScreen() {
  const navigate = useNavigate();
  const setStudentAvatar = useDataStore(state => state.setStudentAvatar);
  const setStudentAccessories = useDataStore(state => state.setStudentAccessories);
  const userId = useDataStore(state => state.getUserId());
  const student = useDataStore(state => state.getStudentById(userId));
  const getAllLessonsForSubject = useDataStore(state => state.getAllLessonsForSubject);
  const hasCompletedLesson = useDataStore(state => state.hasCompletedLesson);

  // Calculate overall progress
  const allSubjects = ['english', 'maths', 'science', 'history', 'geography', 'art', 'music', 'technology'];
  let totalLessons = 0;
  let totalCompleted = 0;
  allSubjects.forEach(subjectId => {
    const subjectLessons = getAllLessonsForSubject(subjectId);
    totalLessons += subjectLessons.length;
    subjectLessons.forEach(l => {
      if (hasCompletedLesson(userId, l.yearId, l.subjectId, l.lessonNumber)) {
        totalCompleted++;
      }
    });
  });
  const overallProgress = totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;
  const levelIndex = (() => {
    const foundIndex = CHARACTER_LEVELS.findIndex(level => overallProgress <= level.max);
    return foundIndex === -1 ? CHARACTER_LEVELS.length - 1 : foundIndex;
  })();
  const currentLevel = CHARACTER_LEVELS[levelIndex];

  const selectedAccessories = student?.selectedAccessories || [];
  const unlockedAccessories = getUnlockedAccessories(levelIndex);
  const accessoriesByCategory = getAccessoriesByCategory(levelIndex);
  const allAccessories = getAllAccessories();

  const storedAvatarConfig = student?.avatarConfig || {
    style: 'adventurer',
    seed: student?.name || 'Student',
    backgroundColor: 'b6e3f4',
  };
  const [avatarDraft, setAvatarDraft] = useState(storedAvatarConfig);

  // Log feature info for developers
  useEffect(() => {
    console.log('%c🎮 CHARACTER CUSTOMIZATION 2.0', 'color: #9c27b0; font-size: 20px; font-weight: bold;');
    console.log('%c✨ NEW FEATURES:', 'color: #2196f3; font-size: 14px; font-weight: bold;');
    console.log('  🎲 Randomize Avatar (Press R)');
    console.log('  💾 Download & Share (Ctrl+D, Ctrl+S)');
    console.log('  🎭 6 Avatar Styles');
    console.log('  ✨ 6 Quick Presets');
    console.log('  🌈 3 Exotic Skin Tones');
    console.log('  📊 Character Stats Dashboard');
    console.log('%c🚀 Keep learning to unlock everything!', 'color: #4caf50; font-style: italic;');
  }, []);

  useEffect(() => {
    setAvatarDraft(storedAvatarConfig);
  }, [student?.avatarConfig, student?.name]);

  // Clean up any duplicate selections from the same category
  useEffect(() => {
    if (selectedAccessories.length > 0) {
      const categoryMap = {};
      const cleanedSelection = [];
      
      selectedAccessories.forEach(accId => {
        const acc = allAccessories.find(a => a.id === accId);
        if (acc) {
          // Only keep the first item from each category
          if (!categoryMap[acc.category]) {
            categoryMap[acc.category] = true;
            cleanedSelection.push(accId);
          }
        }
      });
      
      // Update if we removed duplicates
      if (cleanedSelection.length !== selectedAccessories.length) {
        setStudentAccessories(userId, cleanedSelection);
      }
    }
  }, []); // Only run once on mount
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only trigger if not typing in an input field
      if (e.target.tagName === 'INPUT') return;
      
      if (e.key === 'r' && !e.ctrlKey && !e.metaKey) {
        randomizeAvatar();
      } else if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setStudentAvatar(userId, avatarDraft);
      } else if (e.key === 'd' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        downloadAvatar();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [avatarDraft, userId, levelIndex]);
  
  const AVATAR_STYLES = [
    { id: 'adventurer', name: 'Adventurer', collection: adventurer, level: 0 },
    { id: 'avataaars', name: 'Avataaars', collection: avataaars, level: 1 },
    { id: 'micah', name: 'Micah', collection: micah, level: 2 },
    { id: 'notionists', name: 'Notionists', collection: notionists, level: 3 },
    { id: 'pixelArt', name: 'Pixel Art', collection: pixelArt, level: 4 },
    { id: 'thumbs', name: 'Thumbs', collection: thumbs, level: 4 },
  ];
  
  const AVATAR_PRESETS = [
    { name: 'Classic', accessories: ['skin-light', 'hair-auburn', 'eyes-open', 'bg-blue'], level: 0 },
    { name: 'Cool Kid', accessories: ['skin-medium', 'hair-blue', 'eyes-variant06', 'glasses-round', 'bg-purple'], level: 2 },
    { name: 'Scholar', accessories: ['skin-dark', 'hair-brown', 'eyes-variant01', 'glasses-square', 'mouth-smile', 'bg-green'], level: 3 },
    { name: 'Golden Hero', accessories: ['skin-yellow', 'hair-blonde', 'eyes-variant13', 'glasses-round', 'mouth-smile', 'bg-gold'], level: 3 },
    { name: 'Emerald Master', accessories: ['skin-green', 'hair-black', 'eyes-variant26', 'glasses-square', 'mouth-smirk', 'bg-emerald'], level: 4 },
    { name: 'Purple Legend', accessories: ['skin-purple', 'hair-blue', 'eyes-variant26', 'glasses-round', 'mouth-laughing', 'bg-royal'], level: 5 },
  ];
  
  const randomizeAvatar = () => {
    const unlockedAccessories = getUnlockedAccessories(levelIndex);
    const categoryGroups = {};
    
    // Group accessories by category
    unlockedAccessories.forEach(acc => {
      if (!categoryGroups[acc.category]) {
        categoryGroups[acc.category] = [];
      }
      categoryGroups[acc.category].push(acc);
    });
    
    // Pick one random item from each category
    const randomSelection = [];
    Object.values(categoryGroups).forEach(group => {
      const randomItem = group[Math.floor(Math.random() * group.length)];
      randomSelection.push(randomItem.id);
    });
    
    // Random background color from unlocked ones
    const bgColors = [
      { color: 'b6e3f4', name: 'Sky Blue', level: 0 },
      { color: 'c0aede', name: 'Lavender', level: 0 },
      { color: 'd1d4f9', name: 'Periwinkle', level: 1 },
      { color: 'ffd5dc', name: 'Pink', level: 1 },
      { color: 'ffd5b8', name: 'Peach', level: 2 },
      { color: 'd0f4de', name: 'Mint', level: 2 },
      { color: 'fef9c3', name: 'Cream', level: 3 },
      { color: 'e0e0e0', name: 'Silver', level: 3 },
      { color: 'ffb3ba', name: 'Rose', level: 4 },
      { color: 'bae1ff', name: 'Azure', level: 4 },
    ].filter(bg => levelIndex >= bg.level);
    const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];
    
    // Random seed for variety
    const randomSeed = Math.random().toString(36).substring(7);
    
    setStudentAccessories(userId, randomSelection);
    setAvatarDraft({ ...avatarDraft, seed: randomSeed, backgroundColor: randomBg.color });
  };
  
  const resetAvatar = () => {
    setStudentAccessories(userId, []);
    setAvatarDraft({ style: 'adventurer', seed: 'default', backgroundColor: 'b6e3f4' });
  };
  
  const applyPreset = (preset) => {
    if (levelIndex >= preset.level) {
      const validAccessories = preset.accessories.filter(accId => 
        allAccessories.some(a => a.id === accId)
      );
      setStudentAccessories(userId, validAccessories);
    }
  };
  
  const downloadAvatar = () => {
    const currentStyle = AVATAR_STYLES.find(s => s.id === avatarDraft.style) || AVATAR_STYLES[0];
    const options = buildAvatarOptions(selectedAccessories, avatarDraft.backgroundColor);
    const avatar = createAvatar(currentStyle.collection, {
      seed: avatarDraft.seed,
      ...options,
    });
    
    const svg = avatar.toString();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${student?.name || 'student'}-avatar.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };
  
  const copyAvatarCode = () => {
    const code = JSON.stringify({
      style: avatarDraft.style,
      seed: avatarDraft.seed,
      backgroundColor: avatarDraft.backgroundColor,
      accessories: selectedAccessories,
    }, null, 2);
    navigator.clipboard.writeText(code).then(() => {
      alert('Avatar code copied to clipboard! Share it with friends!');
    });
  };
  
  const importAvatarCode = () => {
    const code = prompt('Paste avatar code here:');
    if (code) {
      try {
        const parsed = JSON.parse(code);
        if (parsed.style && parsed.seed && parsed.backgroundColor && Array.isArray(parsed.accessories)) {
          // Verify all accessories are unlocked
          const allUnlocked = parsed.accessories.every(accId => 
            unlockedAccessories.some(acc => acc.id === accId)
          );
          
          if (!allUnlocked) {
            alert('Some accessories in this code are not yet unlocked! Keep leveling up!');
            return;
          }
          
          // Verify style is unlocked
          const styleObj = AVATAR_STYLES.find(s => s.id === parsed.style);
          if (styleObj && levelIndex < styleObj.level) {
            alert(`This avatar style requires Level ${styleObj.level + 1}! Keep learning!`);
            return;
          }
          
          // Apply the code
          setAvatarDraft({
            style: parsed.style,
            seed: parsed.seed,
            backgroundColor: parsed.backgroundColor,
          });
          setStudentAccessories(userId, parsed.accessories);
          alert('Avatar code imported successfully!');
        } else {
          alert('Invalid avatar code format!');
        }
      } catch (e) {
        alert('Invalid avatar code! Please check and try again.');
      }
    }
  };

  const avatarStyles = [
    { id: 'adventurer', label: 'Adventurer', collection: adventurer },
    { id: 'adventurerNeutral', label: 'Adventurer Neutral', collection: adventurerNeutral },
    { id: 'notionists', label: 'Notionists', collection: notionists },
    { id: 'micah', label: 'Micah', collection: micah },
    { id: 'thumbs', label: 'Thumbs', collection: thumbs },
    { id: 'pixelArt', label: 'Pixel Art', collection: pixelArt },
    { id: 'avataaars', label: 'Avataaars', collection: avataaars },
  ];

  const avatarStyle = avatarStyles.find(style => style.id === avatarDraft.style) || avatarStyles[0];
  const avatarSvg = useMemo(() => {
    const options = buildAvatarOptions(selectedAccessories, avatarDraft.backgroundColor);
    return createAvatar(avatarStyle.collection, {
      seed: avatarDraft.seed || 'Student',
      ...options,
    }).toString();
  }, [avatarDraft.backgroundColor, avatarDraft.seed, avatarStyle.collection, selectedAccessories]);

  const levelBadges = ['🌱', '🧭', '⚔️', '🌟', '👑'];
  const levelColors = ['#66bb6a', '#42a5f5', '#ffa726', '#ab47bc', '#fbc02d'];
  const levelBadge = levelBadges[levelIndex] || '⭐';
  const levelColor = levelColors[levelIndex] || '#42a5f5';
  const avatarScale = 1.0 + (levelIndex * 0.075);

  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f5f7fa',
    }}>
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            ← Back
          </button>
          <h1 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            🎨 Character Customization
          </h1>
        </div>

        {/* Current Avatar Preview */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '24px', color: '#333', textAlign: 'center' }}>
            ✨ Your Current Avatar
          </h2>
          <style>{`
            @keyframes epicPulse {
              0%, 100% { 
                box-shadow: 0 0 30px ${levelColor}88, 0 0 60px ${levelColor}44, 0 0 90px ${levelColor}22;
                transform: scale(1);
              }
              50% { 
                box-shadow: 0 0 50px ${levelColor}ff, 0 0 100px ${levelColor}88, 0 0 150px ${levelColor}44;
                transform: scale(1.05);
              }
            }
            @keyframes auraRotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes sparkleFloat {
              0%, 100% { transform: translateY(0px) scale(1); opacity: 0.8; }
              50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
            }
            @keyframes energyPulse {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.2); }
            }
          `}</style>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
            background: levelIndex >= 4 
              ? `radial-gradient(circle, ${levelColor}22 0%, transparent 70%)`
              : `linear-gradient(135deg, ${levelColor}33, #ffffff, ${levelColor}11)`,
            borderRadius: '20px',
            border: levelIndex >= 3 ? `3px solid ${levelColor}` : `2px solid ${levelColor}88`,
            position: 'relative',
            overflow: 'visible',
            animation: levelIndex >= 4 ? 'epicPulse 2s ease-in-out infinite' : 'none',
          }}>
            {/* Level 5 Master Aura Ring */}
            {levelIndex >= 4 && (
              <>
                <div style={{
                  position: 'absolute',
                  width: '200%',
                  height: '200%',
                  border: `4px solid ${levelColor}`,
                  borderRadius: '50%',
                  animation: 'auraRotate 4s linear infinite',
                  opacity: 0.3,
                }} />
                <div style={{
                  position: 'absolute',
                  width: '150%',
                  height: '150%',
                  border: `3px solid ${levelColor}`,
                  borderRadius: '50%',
                  animation: 'auraRotate 3s linear infinite reverse',
                  opacity: 0.4,
                }} />
              </>
            )}
            
            {/* Level 4+ Floating Particles */}
            {levelIndex >= 3 && Array.from({ length: levelIndex >= 4 ? 8 : 4 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  backgroundColor: levelColor,
                  borderRadius: '50%',
                  top: `${20 + i * 15}%`,
                  left: `${10 + (i % 2) * 80}%`,
                  animation: `sparkleFloat ${2 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: `0 0 10px ${levelColor}`,
                }}
              />
            ))}
            
            {/* Level 3+ Energy Waves */}
            {levelIndex >= 2 && (
              <>
                <div style={{
                  position: 'absolute',
                  width: '120%',
                  height: '120%',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, transparent 60%, ${levelColor}44 70%, transparent 80%)`,
                  animation: 'energyPulse 3s ease-in-out infinite',
                }} />
                {levelIndex >= 3 && (
                  <div style={{
                    position: 'absolute',
                    width: '140%',
                    height: '140%',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, transparent 60%, ${levelColor}33 75%, transparent 85%)`,
                    animation: 'energyPulse 3s ease-in-out infinite',
                    animationDelay: '1.5s',
                  }} />
                )}
              </>
            )}
            
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '40px',
              filter: levelIndex >= 4 ? `drop-shadow(0 0 10px ${levelColor})` : 'none',
            }}>
              {levelBadge}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                transform: `scale(${avatarScale * 1.2})`,
                filter: levelIndex >= 4 
                  ? `drop-shadow(0 0 20px ${levelColor}) drop-shadow(0 5px 15px rgba(0,0,0,0.2))`
                  : levelIndex >= 2
                  ? `drop-shadow(0 0 10px ${levelColor}88) drop-shadow(0 5px 15px rgba(0,0,0,0.2))`
                  : 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))',
                position: 'relative',
                zIndex: 10,
              }}
              dangerouslySetInnerHTML={{ __html: avatarSvg }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#333' }}>
                {student?.name || 'Student'}
              </div>
              <div style={{ 
                fontSize: '16px', 
                color: '#666', 
                marginTop: '4px',
                padding: '6px 16px',
                backgroundColor: `${levelColor}22`,
                borderRadius: '20px',
                display: 'inline-block',
                fontWeight: 600,
              }}>
                Level {levelIndex + 1} · {currentLevel.name}
              </div>
              <div style={{ fontSize: '14px', color: '#888', marginTop: '8px' }}>
                {Math.round(overallProgress)}% Overall Progress
              </div>
            </div>
          </div>
        </div>

        {/* Character Stats */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '24px', color: '#333', textAlign: 'center' }}>
            📊 Character Stats
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}>
            <div style={{
              backgroundColor: `${levelColor}22`,
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              border: `2px solid ${levelColor}`,
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: levelColor }}>
                {levelIndex + 1}
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                Current Level
              </div>
              <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                {currentLevel.name}
              </div>
            </div>
            
            <div style={{
              backgroundColor: '#e3f2fd',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              border: '2px solid #2196f3',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2196f3' }}>
                {Math.round(overallProgress)}%
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                Overall Progress
              </div>
              <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                {totalCompleted} / {totalLessons} lessons
              </div>
            </div>
            
            <div style={{
              backgroundColor: '#f3e5f5',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              border: '2px solid #9c27b0',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#9c27b0' }}>
                {unlockedAccessories.length}
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                Unlocked Items
              </div>
              <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                {allAccessories.length - unlockedAccessories.length} still locked
              </div>
            </div>
            
            <div style={{
              backgroundColor: '#fff3e0',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              border: '2px solid #ff9800',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff9800' }}>
                {AVATAR_STYLES.filter(s => levelIndex >= s.level).length}
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                Avatar Styles
              </div>
              <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                {AVATAR_STYLES.length - AVATAR_STYLES.filter(s => levelIndex >= s.level).length} still locked
              </div>
            </div>
          </div>
        </div>

        {/* Level Progression Showcase */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#333', textAlign: 'center' }}>
            🚀 Level Progression
          </h2>
          <p style={{ margin: '0 0 30px 0', color: '#666', fontSize: '15px', textAlign: 'center' }}>
            Your avatar grows stronger as you complete more lessons!
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
          }}>
            {CHARACTER_LEVELS.map((level, idx) => {
              const isCurrentLevel = idx === levelIndex;
              const isPastLevel = idx < levelIndex;
              const isFutureLevel = idx > levelIndex;
              // More dramatic scaling: 0.7x to 1.3x
              const levelAvatarScale = 0.7 + (idx * 0.15);
              const levelAvatarSvg = createAvatar(avatarStyle.collection, {
                seed: avatarDraft.seed || 'Student',
                backgroundColor: avatarDraft.backgroundColor ? [avatarDraft.backgroundColor] : undefined,
              }).toString();
              
              return (
                <div
                  key={idx}
                  style={{
                    background: isCurrentLevel 
                      ? `linear-gradient(135deg, ${levelColors[idx]}33, #ffffff)`
                      : isFutureLevel
                      ? 'linear-gradient(135deg, #f0f0f0, #ffffff)'
                      : `linear-gradient(135deg, ${levelColors[idx]}11, #ffffff)`,
                    borderRadius: '16px',
                    padding: '20px',
                    textAlign: 'center',
                    border: isCurrentLevel 
                      ? `3px solid ${levelColors[idx]}` 
                      : isFutureLevel
                      ? '2px dashed #d0d0d0'
                      : `2px solid ${levelColors[idx]}44`,
                    position: 'relative',
                    opacity: isFutureLevel ? 0.6 : 1,
                    transition: 'all 0.3s ease',
                    boxShadow: isCurrentLevel 
                      ? `0 8px 20px ${levelColors[idx]}44`
                      : '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '24px',
                  }}>
                    {isFutureLevel ? '🔒' : levelBadges[idx]}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      transform: `scale(${levelAvatarScale})`,
                      filter: isFutureLevel ? 'grayscale(0.8) brightness(1.1)' : 'none',
                      opacity: isFutureLevel ? 0.5 : 1,
                    }}
                    dangerouslySetInnerHTML={{ __html: levelAvatarSvg }}
                  />
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: 700, 
                    color: isCurrentLevel ? levelColors[idx] : '#333',
                    marginBottom: '4px',
                  }}>
                    Level {idx + 1}
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: '#666',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}>
                    {level.name}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#999',
                    padding: '4px 8px',
                    backgroundColor: isCurrentLevel ? `${levelColors[idx]}22` : '#f8f9fa',
                    borderRadius: '12px',
                    display: 'inline-block',
                  }}>
                    {level.min}% - {level.max}%
                  </div>
                  {isCurrentLevel && (
                    <div style={{
                      marginTop: '8px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: levelColors[idx],
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      ⭐ Current
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Avatar Customization */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#333' }}>🎨 Avatar Customization</h2>
          <p style={{ margin: '0 0 30px 0', color: '#666', fontSize: '15px' }}>
            Unlock more customization options as you level up!
          </p>
          
          {/* Character Name/Seed */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#333' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '16px' }}>Character Name</span>
                <span style={{ 
                  fontSize: '11px', 
                  padding: '3px 8px', 
                  backgroundColor: '#28a745',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: 600,
                }}>
                  UNLOCKED
                </span>
              </div>
              <input
                value={avatarDraft.seed}
                onChange={(e) => setAvatarDraft(prev => ({ ...prev, seed: e.target.value }))}
                placeholder="Enter a name or word..."
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '2px solid #d0d0d0',
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              />
            </label>
          </div>

          {/* Randomize Button - Level 2+ */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontWeight: 600, fontSize: '16px', color: '#333' }}>Quick Randomize</span>
              {levelIndex >= 1 ? (
                <span style={{ 
                  fontSize: '11px', 
                  padding: '3px 8px', 
                  backgroundColor: '#28a745',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: 600,
                }}>
                  UNLOCKED AT LEVEL 2
                </span>
              ) : (
                <span style={{ 
                  fontSize: '11px', 
                  padding: '3px 8px', 
                  backgroundColor: '#999',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: 600,
                }}>
                  🔒 UNLOCKS AT LEVEL 2
                </span>
              )}
            </div>
            <button
              onClick={() => levelIndex >= 1 && setAvatarDraft(prev => ({ ...prev, seed: Math.random().toString(36).slice(2, 10) }))}
              disabled={levelIndex < 1}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: levelIndex >= 1 ? '#42a5f5' : '#e0e0e0',
                color: levelIndex >= 1 ? 'white' : '#999',
                cursor: levelIndex >= 1 ? 'pointer' : 'not-allowed',
                fontWeight: 700,
                fontSize: '15px',
                opacity: levelIndex >= 1 ? 1 : 0.6,
              }}
            >
              🎲 Randomize Character
            </button>
          </div>
          
          {/* Background Colors - Progressive Unlock */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ marginBottom: '16px', color: '#333', fontWeight: 600, fontSize: '16px' }}>
              Background Colors
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '16px' }}>
              {[
                { color: 'b6e3f4', name: 'Sky Blue', level: 0 },
                { color: 'c0aede', name: 'Lavender', level: 0 },
                { color: 'd1d4f9', name: 'Periwinkle', level: 1 },
                { color: 'ffd5dc', name: 'Pink', level: 1 },
                { color: 'ffd5b8', name: 'Peach', level: 2 },
                { color: 'd0f4de', name: 'Mint', level: 2 },
                { color: 'fef9c3', name: 'Cream', level: 3 },
                { color: 'e0e0e0', name: 'Silver', level: 3 },
                { color: 'ffb3ba', name: 'Rose', level: 4 },
                { color: 'bae1ff', name: 'Azure', level: 4 },
              ].map(({ color, name, level }) => {
                const isUnlocked = levelIndex >= level;
                const isSelected = avatarDraft.backgroundColor === color;
                return (
                  <button
                    key={color}
                    onClick={() => isUnlocked && setAvatarDraft(prev => ({ ...prev, backgroundColor: color }))}
                    disabled={!isUnlocked}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: isSelected ? '3px solid #333' : '2px solid #e0e0e0',
                      backgroundColor: isUnlocked ? `#${color}` : '#f5f5f5',
                      cursor: isUnlocked ? 'pointer' : 'not-allowed',
                      position: 'relative',
                      transition: 'all 0.2s',
                      opacity: isUnlocked ? 1 : 0.4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    {!isUnlocked && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '24px',
                      }}>
                        🔒
                      </div>
                    )}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: `#${color}`,
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }} />
                    <div style={{ 
                      fontSize: '11px', 
                      fontWeight: 600, 
                      color: '#333',
                      textAlign: 'center',
                    }}>
                      {name}
                    </div>
                    <div style={{ 
                      fontSize: '9px', 
                      color: isUnlocked ? '#28a745' : '#999',
                      fontWeight: 700,
                    }}>
                      {isUnlocked ? '✓' : `Lv.${level + 1}`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Save Button */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', paddingTop: '20px', borderTop: '2px solid #f0f0f0' }}>
            <button
              onClick={() => setStudentAvatar(userId, avatarDraft)}
              style={{
                padding: '14px 32px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: levelColor,
                color: 'white',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '16px',
                boxShadow: `0 4px 12px ${levelColor}44`,
              }}
            >
              💾 Save Changes
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#333', textAlign: 'center' }}>
            ⚡ Quick Actions
          </h2>
          <p style={{ 
            margin: '0 0 20px 0', 
            fontSize: '13px', 
            color: '#666', 
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            padding: '8px 16px',
            borderRadius: '8px',
            display: 'inline-block',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            ⌨️ <strong>Keyboard Shortcuts:</strong> Press <kbd style={{ padding: '2px 6px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}>R</kbd> to randomize, <kbd style={{ padding: '2px 6px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}>Ctrl+S</kbd> to save, <kbd style={{ padding: '2px 6px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}>Ctrl+D</kbd> to download
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={randomizeAvatar}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#9c27b0',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(156, 39, 176, 0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 12px rgba(156, 39, 176, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(156, 39, 176, 0.3)';
              }}
            >
              🎲 Surprise Me!
            </button>
            
            <button
              onClick={resetAvatar}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#ff5722',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(255, 87, 34, 0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 12px rgba(255, 87, 34, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(255, 87, 34, 0.3)';
              }}
            >
              🔄 Reset
            </button>
            
            <button
              onClick={downloadAvatar}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#00bcd4',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 188, 212, 0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 12px rgba(0, 188, 212, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 188, 212, 0.3)';
              }}
            >
              💾 Download
            </button>
            
            <button
              onClick={copyAvatarCode}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#ff9800',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(255, 152, 0, 0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 12px rgba(255, 152, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(255, 152, 0, 0.3)';
              }}
            >
              📋 Share Code
            </button>
            
            <button
              onClick={importAvatarCode}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#8bc34a',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(139, 195, 74, 0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 12px rgba(139, 195, 74, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(139, 195, 74, 0.3)';
              }}
            >
              📥 Import Code
            </button>
          </div>
        </div>

        {/* Avatar Presets */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#333', textAlign: 'center' }}>
            ✨ Quick Presets
          </h2>
          <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '15px', textAlign: 'center' }}>
            Apply pre-made combinations instantly!
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {AVATAR_PRESETS.map(preset => {
              const isLocked = levelIndex < preset.level;
              return (
                <button
                  key={preset.name}
                  onClick={() => !isLocked && applyPreset(preset)}
                  disabled={isLocked}
                  style={{
                    padding: '16px 24px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    backgroundColor: isLocked ? '#ccc' : '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    boxShadow: isLocked ? 'none' : '0 4px 6px rgba(76, 175, 80, 0.3)',
                    opacity: isLocked ? 0.5 : 1,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isLocked) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 6px 12px rgba(76, 175, 80, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLocked) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 4px 6px rgba(76, 175, 80, 0.3)';
                    }
                  }}
                >
                  {preset.name}
                  {isLocked && ` 🔒 (Level ${preset.level + 1})`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Avatar Style Selection */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#333', textAlign: 'center' }}>
            🎭 Choose Avatar Style
          </h2>
          <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '15px', textAlign: 'center' }}>
            Unlock different avatar styles as you level up!
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {AVATAR_STYLES.map(styleObj => {
              const isLocked = levelIndex < styleObj.level;
              const style = styleObj.id;
              const options = buildAvatarOptions(selectedAccessories, avatarDraft.backgroundColor);
              const preview = createAvatar(styleObj.collection, {
                seed: avatarDraft.seed,
                ...options,
              }).toString();
              
              return (
                <div
                  key={style}
                  onClick={() => !isLocked && setAvatarDraft({ ...avatarDraft, style })}
                  style={{
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    padding: '15px',
                    borderRadius: '12px',
                    border: avatarDraft.style === style ? '3px solid #2196f3' : '2px solid #ddd',
                    backgroundColor: isLocked ? '#f5f5f5' : (avatarDraft.style === style ? '#e3f2fd' : 'white'),
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    boxShadow: avatarDraft.style === style ? '0 4px 12px rgba(33, 150, 243, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
                    opacity: isLocked ? 0.5 : 1,
                    position: 'relative',
                  }}
                >
                  <div style={{ width: '100px', height: '100px' }} dangerouslySetInnerHTML={{ __html: preview }} />
                  <div style={{ marginTop: '8px', fontWeight: avatarDraft.style === style ? 'bold' : 'normal', fontSize: '14px', color: '#333' }}>
                    {styleObj.name}
                  </div>
                  {isLocked && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      fontSize: '20px',
                    }}>
                      🔒
                    </div>
                  )}
                  {isLocked && (
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                      Level {styleObj.level + 1}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Unlockable Accessories */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#333', textAlign: 'center' }}>
            ✨ Accessories Collection
          </h2>
          <p style={{ margin: '0 0 30px 0', color: '#666', fontSize: '15px', textAlign: 'center' }}>
            Level up to unlock amazing accessories! Currently showing {unlockedAccessories.length} / {allAccessories.length} items
          </p>
          
          {/* Unlocked Accessories by Category */}
          {Object.entries(accessoriesByCategory).map(([category, items]) => (
            <div key={category} style={{ marginBottom: '40px' }}>
              <h3 style={{ 
                margin: '0 0 16px 0', 
                fontSize: '18px', 
                color: '#28a745',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span>{getCategoryIcon(category)}</span>
                <span>{category}</span>
                <span style={{ 
                  fontSize: '12px', 
                  padding: '3px 10px', 
                  backgroundColor: '#d4edda',
                  borderRadius: '12px',
                  fontWeight: 600,
                }}>
                  {items.length} unlocked
                </span>
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '14px',
              }}>
                {items.map(custom => {
                  const isSelected = selectedAccessories.includes(custom.id);
                  // Generate preview SVG with this customization applied to current character
                  const currentOptions = buildAvatarOptions(selectedAccessories, avatarDraft.backgroundColor);
                  const previewOptions = buildAvatarOptions([custom.id], avatarDraft.backgroundColor);
                  const previewSvg = createAvatar(avatarStyle.collection, {
                    seed: avatarDraft.seed || 'preview',
                    ...currentOptions,
                    ...previewOptions, // Override with this specific customization
                  }).toString();
                  
                  return (
                    <button
                      key={custom.id}
                      onClick={() => {
                        // For most categories, only allow one selection at a time
                        // Remove any other items from the same category before adding this one
                        const otherItemsInCategory = allAccessories
                          .filter(a => a.category === custom.category && a.id !== custom.id)
                          .map(a => a.id);
                        
                        const newSelection = isSelected
                          ? selectedAccessories.filter(id => id !== custom.id)
                          : [...selectedAccessories.filter(id => !otherItemsInCategory.includes(id)), custom.id];
                        
                        setStudentAccessories(userId, newSelection);
                      }}
                      style={{
                        padding: '14px',
                        borderRadius: '12px',
                        border: isSelected ? `3px solid ${levelColor}` : '2px solid #e0e0e0',
                        backgroundColor: isSelected ? `${levelColor}22` : '#fff',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                        boxShadow: isSelected ? `0 4px 12px ${levelColor}44` : '0 2px 6px rgba(0,0,0,0.05)',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
                        }
                      }}
                    >
                      <div 
                        style={{ 
                          width: '80px', 
                          height: '80px', 
                          margin: '0 auto 8px',
                        }}
                        dangerouslySetInnerHTML={{ __html: previewSvg }}
                      />
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#333', lineHeight: '1.2' }}>
                        {custom.name}
                      </div>
                      {isSelected && (
                        <div style={{ 
                          fontSize: '10px', 
                          color: levelColor, 
                          marginTop: '4px',
                          fontWeight: 700,
                        }}>
                          ✓ EQUIPPED
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* Locked Accessories */}
          <div style={{ 
            marginTop: '50px', 
            paddingTop: '30px', 
            borderTop: '2px solid #f0f0f0',
          }}>
            <h3 style={{ 
              margin: '0 0 20px 0', 
              fontSize: '18px', 
              color: '#999',
              textAlign: 'center',
            }}>
              🔒 Locked Items - Keep Learning to Unlock!
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '14px',
            }}>
              {allAccessories.filter(custom => 
                !unlockedAccessories.find(u => u.id === custom.id)
              ).map(custom => {
                // Generate preview SVG for locked item showing what it looks like
                const previewOptions = buildAvatarOptions([custom.id], avatarDraft.backgroundColor);
                const previewSvg = createAvatar(avatarStyle.collection, {
                  seed: avatarDraft.seed || 'preview',
                  ...previewOptions,
                }).toString();
                
                return (
                  <div
                    key={custom.id}
                    style={{
                      padding: '14px',
                      borderRadius: '12px',
                      border: '2px solid #e0e0e0',
                      backgroundColor: '#f8f9fa',
                      textAlign: 'center',
                      opacity: 0.7,
                      position: 'relative',
                    }}
                    title={getAccessoryRequirements(custom.id)}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      fontSize: '14px',
                    }}>
                      🔒
                    </div>
                    <div 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        margin: '0 auto 8px',
                      }}
                      dangerouslySetInnerHTML={{ __html: previewSvg }}
                    />
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#666', lineHeight: '1.2' }}>
                      {custom.name}
                    </div>
                    <div style={{ 
                      fontSize: '9px', 
                      color: '#999', 
                      marginTop: '4px',
                      fontWeight: 600,
                    }}>
                      Level {custom.level || '?'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for category icons
function getCategoryIcon(category) {
  const icons = {
    glasses: '👓',
    hats: '🎩',
    badges: '🏆',
    clothing: '👔',
    accessories: '🎧',
    equipment: '🎒',
    weapons: '⚔️',
    armor: '🛡️',
    special: '✨',
    treasures: '💎',
    vehicles: '🚗',
  };
  return icons[category] || '📦';
}

export default CharacterCustomizationScreen;
