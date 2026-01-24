import React, { useEffect, useState } from 'react';
import { Subject } from '../models/Subject';
import { useNavigate } from 'react-router-dom';

function ActivityTable() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadActivities();
    
    // Refresh activities every 5 seconds
    const interval = setInterval(loadActivities, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const loadActivities = async () => {
    try {
      if (window.electronAPI) {
        const result = await window.electronAPI.readActivityLog(20); // Get last 20 entries
        if (result.success) {
          // Filter only lesson_access entries
          const lessonActivities = result.entries.filter(
            entry => entry.type === 'lesson_access'
          );
          setActivities(lessonActivities);
        } else {
          console.warn('Failed to read activity log:', result.error);
        }
      } else {
        // Electron API not available (web mode or not initialized)
        setActivities([]);
      }
    } catch (error) {
      console.error('Error loading activities:', error);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);

      if (diffMins < 1) {
        return 'Just now';
      } else if (diffMins < 60) {
        return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
      } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
      } else if (diffDays < 7) {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
      } else {
        return date.toLocaleDateString();
      }
    } catch (error) {
      return 'Unknown';
    }
  };

  const handleLessonClick = (lessonId) => {
    if (lessonId) {
      navigate(`/lesson/${lessonId}`);
    }
  };

  const getSubjectName = (subjectId) => {
    const subject = Subject.getById(subjectId);
    return subject ? subject.name : subjectId || 'Unknown';
  };

  const getSubjectEmoji = (subjectId) => {
    const subject = Subject.getById(subjectId);
    return subject ? subject.emoji : '📚';
  };

  if (loading && activities.length === 0) {
    return (
      <div style={{
        padding: '20px',
        backgroundColor: 'var(--surface-2)',
        border: '1px solid var(--border-1)',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-1)',
        width: '100%',
      }}>
        <h2 style={{
          margin: '0 0 20px 0',
          fontSize: '20px',
          color: 'var(--text-1)',
          textAlign: 'center',
        }}>
          📋 Recent Activity
        </h2>
        <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-2)' }}>
          Loading activity...
        </div>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div style={{
        padding: '20px',
        backgroundColor: 'var(--surface-2)',
        border: '1px solid var(--border-1)',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-1)',
        width: '100%',
      }}>
        <h2 style={{
          margin: '0 0 20px 0',
          fontSize: '20px',
          color: 'var(--text-1)',
          textAlign: 'center',
        }}>
          📋 Recent Activity
        </h2>
        <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-2)' }}>
          No activity yet. Start a lesson to see your activity here!
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'var(--surface-2)',
      border: '1px solid var(--border-1)',
      borderRadius: '12px',
      boxShadow: 'var(--shadow-1)',
      width: '100%',
    }}>
      <h2 style={{
        margin: '0 0 20px 0',
        fontSize: '20px',
        color: 'var(--text-1)',
        textAlign: 'center',
      }}>
        📋 Recent Activity
      </h2>
      <div style={{
        overflowX: 'auto',
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr style={{
              borderBottom: '1px solid var(--border-1)',
            }}>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-2)',
              }}>
                Time
              </th>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-2)',
              }}>
                Student
              </th>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-2)',
              }}>
                Subject
              </th>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-2)',
              }}>
                Lesson
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr
                key={index}
                onClick={() => handleLessonClick(activity.lessonId)}
                style={{
                  borderBottom: '1px solid rgba(120, 190, 255, 0.12)',
                  cursor: activity.lessonId ? 'pointer' : 'default',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (activity.lessonId) {
                    e.currentTarget.style.backgroundColor = 'rgba(72, 229, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <td style={{
                  padding: '12px',
                  fontSize: '14px',
                  color: 'var(--text-2)',
                }}>
                  {formatTimestamp(activity.timestamp)}
                </td>
                <td style={{
                  padding: '12px',
                  fontSize: '14px',
                  color: 'var(--text-1)',
                }}>
                  {activity.studentName || 'Student'}
                </td>
                <td style={{
                  padding: '12px',
                  fontSize: '14px',
                  color: 'var(--text-1)',
                }}>
                  <span style={{ marginRight: '8px' }}>
                    {getSubjectEmoji(activity.subjectId)}
                  </span>
                  {getSubjectName(activity.subjectId)}
                </td>
                <td style={{
                  padding: '12px',
                  fontSize: '14px',
                  color: 'var(--text-1)',
                  fontWeight: '500',
                }}>
                  {activity.lessonTitle || `Lesson ${activity.lessonNumber || ''}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;
