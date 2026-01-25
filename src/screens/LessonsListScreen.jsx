import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Subject } from '../models/Subject';
import { Year } from '../models/Year';

function LessonsListScreen() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const subjectId = searchParams.get('subjectId');
  
  const nextLesson = useDataStore(state => 
    subjectId ? state.getNextLessonForSubject(subjectId) : null
  );
  
  const allLessons = useDataStore(state => 
    subjectId ? state.getAllLessonsForSubject(subjectId) : []
  );
  
  // Subscribe to progress data to ensure re-renders when progress changes
  const progress = useDataStore(state => state.data?.progress || []);
  
  const subjectProgress = useDataStore(state => 
    subjectId ? state.getSubjectProgress(subjectId) : null
  );
  
  const hasCompletedLesson = useDataStore(state => state.hasCompletedLesson);
  const getMedalForLesson = useDataStore(state => state.getMedalForLesson);
  const getUserId = useDataStore(state => state.getUserId);
  const userId = getUserId();

  // Study Mode
  const studyMode = useDataStore(state => state.studyMode);
  const enableStudyMode = useDataStore(state => state.enableStudyMode);
  const disableStudyMode = useDataStore(state => state.disableStudyMode);
  const getStudyModePlaylist = useDataStore(state => state.getStudyModePlaylist);

  const subject = subjectId ? Subject.getById(subjectId) : null;
  const cardBase = {
    backgroundColor: 'var(--surface-2)',
    border: '1px solid var(--border-1)',
    borderRadius: '8px',
    boxShadow: 'var(--shadow-1)',
  };
  const cardRaised = {
    backgroundColor: 'var(--surface-2)',
    border: '1px solid var(--border-1)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-1)',
  };

  const handleStartStudyMode = () => {
    if (subjectId) {
      const playlist = getStudyModePlaylist(subjectId);
      if (playlist.length > 0) {
        enableStudyMode(subjectId);
        navigate(`/lesson/${playlist[0].id}`);
      }
    }
  };

  const handleExitStudyMode = () => {
    disableStudyMode();
  };
  
  // Removed auto-navigation - let users see the lessons list

  if (!subjectId || !subject) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Subject Not Found</h1>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
      }}>
      <div style={{
        marginBottom: '30px',
      }}>
        <h1 style={{ margin: 0 }}>
          {subject.name} Lessons
        </h1>
      </div>

      {/* Study Mode Banner */}
      {studyMode.enabled && studyMode.subjectId === subjectId && (
        <div style={{
          marginBottom: '20px',
          padding: '15px 20px',
          background: 'linear-gradient(135deg, rgba(72, 229, 255, 0.25), rgba(12, 24, 48, 0.95))',
          color: 'var(--text-1)',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid var(--border-1)',
          boxShadow: 'var(--shadow-1)',
        }}>
          <div>
            <strong style={{ fontSize: '16px' }}>📚 Study Mode Active</strong>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
              Playing only uncompleted lessons
            </p>
          </div>
          <button
            onClick={handleExitStudyMode}
            style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(8, 14, 28, 0.9)',
              color: 'var(--text-1)',
              border: '1px solid var(--border-1)',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Exit Study Mode
          </button>
        </div>
      )}

      {/* Progress Info */}
      {subjectProgress && (
        <div style={{
          marginBottom: '30px',
          padding: '20px',
          ...cardBase,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>Your Progress</h2>
            <span style={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'var(--accent-1)',
            }}>
              {Math.round(subjectProgress.progressPercentage)}% Complete
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(120, 190, 255, 0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${subjectProgress.progressPercentage}%`,
              height: '100%',
              backgroundColor: 'var(--accent-1)',
              transition: 'width 0.3s',
            }} />
          </div>
          <p style={{
            margin: '10px 0 0 0',
            fontSize: '14px',
            color: 'var(--text-2)',
          }}>
            {subjectProgress.completedCount} of {subjectProgress.totalLessons} lessons completed
          </p>

          {/* Study Mode Button */}
          {!studyMode.enabled && subjectProgress.completedCount < subjectProgress.totalLessons && (
            <button
              onClick={handleStartStudyMode}
              style={{
                marginTop: '15px',
                padding: '12px 24px',
                backgroundColor: 'var(--accent-2)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(124, 247, 180, 0.85)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-2)';
              }}
            >
              <span>📚</span>
              <span>Start Study Mode</span>
            </button>
          )}
        </div>
      )}

      {/* All Lessons */}
      {allLessons.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          ...cardBase,
        }}>
          <h2 style={{ marginBottom: '10px' }}>No Lessons Available</h2>
          <p>There are no lessons available for {subject.name} yet.</p>
        </div>
      ) : (
        <div>
          {/* Next Lesson Section */}
          {nextLesson && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                marginBottom: '20px',
                fontSize: '20px',
                color: 'var(--text-1)',
              }}>
                Continue Learning
              </h2>
              <div
                onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                style={{
                  padding: '32px',
                  background: 'linear-gradient(145deg, rgba(72, 229, 255, 0.15), rgba(20, 34, 64, 0.95))',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-2), 0 0 40px rgba(72, 229, 255, 0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid rgba(72, 229, 255, 0.6)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-2), 0 0 60px rgba(72, 229, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-2), 0 0 40px rgba(72, 229, 255, 0.15)';
                }}
              >
                <div style={{
                  fontSize: '72px',
                  marginBottom: '20px',
                  textAlign: 'center',
                  filter: 'drop-shadow(0 4px 12px rgba(72, 229, 255, 0.4))',
                }}>
                  {nextLesson.emoji || '📚'}
                </div>
                <h3 style={{
                  margin: '0 0 12px 0',
                  fontSize: '26px',
                  fontWeight: '700',
                  color: 'var(--text-1)',
                  textAlign: 'center',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                }}>
                  {nextLesson.title}
                </h3>
                <p style={{
                  margin: '0 0 15px 0',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'var(--accent-1)',
                  textAlign: 'center',
                }}>
                  {Year.getById(nextLesson.yearId)?.name || nextLesson.yearId}
                </p>
                <div style={{
                  textAlign: 'center',
                }}>
                  <button style={{
                    padding: '14px 32px',
                    background: 'linear-gradient(145deg, var(--accent-1), var(--accent-2))',
                    color: '#0a1224',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '17px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(72, 229, 255, 0.4)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(72, 229, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(72, 229, 255, 0.4)';
                  }}
                  >
                    Start Lesson →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* All Lessons List */}
          <div>
            <h2 style={{
              marginBottom: '24px',
              fontSize: '22px',
              fontWeight: '600',
              color: 'var(--text-1)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}>
              All Lessons ({allLessons.length})
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}>
              {allLessons.map((lesson, index) => {
                const isCompleted = hasCompletedLesson(
                  userId,
                  lesson.yearId,
                  lesson.subjectId,
                  lesson.lessonNumber
                );
                const isNextLesson = nextLesson && nextLesson.id === lesson.id;
                
                // Create a unique key using lesson properties and index to handle duplicates
                const uniqueKey = `${lesson.yearId}-${lesson.subjectId}-${lesson.lessonNumber}-${lesson.categoryId || 'none'}-${lesson.id}-${index}`;
                
                return (
                  <div
                    key={uniqueKey}
                    onClick={() => navigate(`/lesson/${lesson.id}`)}
                    style={{
                      padding: '24px',
                      background: isNextLesson 
                        ? 'linear-gradient(145deg, rgba(72, 229, 255, 0.12), rgba(20, 34, 64, 0.95))' 
                        : 'linear-gradient(145deg, rgba(20, 34, 64, 0.95), rgba(10, 18, 36, 0.9))',
                      border: isNextLesson ? '2px solid rgba(72, 229, 255, 0.6)' : '1px solid var(--border-1)',
                      borderRadius: '12px',
                      boxShadow: 'var(--shadow-1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-2), 0 0 30px rgba(72, 229, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'var(--border-2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-1)';
                      e.currentTarget.style.borderColor = isNextLesson ? 'rgba(72, 229, 255, 0.6)' : 'var(--border-1)';
                    }}
                  >
                    {isCompleted && (() => {
                      const medal = getMedalForLesson(lesson.id);
                      const medalConfig = {
                        'Platinum': { emoji: '🏆', color: '#E5E4E2', label: 'Platinum' },
                        'Gold': { emoji: '🥇', color: '#FFD700', label: 'Gold' },
                        'Silver': { emoji: '🥈', color: '#C0C0C0', label: 'Silver' },
                        'Bronze': { emoji: '🥉', color: '#CD7F32', label: 'Bronze' }
                      };
                      const config = medalConfig[medal] || medalConfig['Bronze'];

                      return (
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                          animation: 'pulse 2s ease-in-out infinite',
                        }}>
                          <span title={`${config.label} Medal`}>{config.emoji}</span>
                        </div>
                      );
                    })()}
                    {isNextLesson && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        fontSize: '12px',
                        fontWeight: '700',
                        backgroundColor: 'rgba(72, 229, 255, 0.95)',
                        color: '#0a1224',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        boxShadow: '0 2px 8px rgba(72, 229, 255, 0.4)',
                      }}>
                        Continue
                      </div>
                    )}
                    <div style={{
                      fontSize: '64px',
                      marginBottom: '16px',
                      textAlign: 'center',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                    >
                      {lesson.emoji || '📚'}
                    </div>
                    <h3 style={{
                      margin: '0 0 10px 0',
                      fontSize: '19px',
                      fontWeight: '600',
                      color: 'var(--text-1)',
                      textAlign: 'center',
                      lineHeight: '1.4',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                    }}>
                      {lesson.title}
                    </h3>
                    <p style={{
                      margin: '0',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--text-2)',
                      textAlign: 'center',
                      opacity: 0.9,
                    }}>
                      {Year.getById(lesson.yearId)?.name || lesson.yearId}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default LessonsListScreen;

