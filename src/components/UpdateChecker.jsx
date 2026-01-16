import React, { useState, useEffect } from 'react';

/**
 * Optional component to manually check for updates
 * This is not required - updates check automatically in the background
 * But you can add this to your UI if you want a "Check for Updates" button
 */
function UpdateChecker() {
  const [updateStatus, setUpdateStatus] = useState(null);
  const [appVersion, setAppVersion] = useState('');
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    // Get current app version
    if (window.electronAPI) {
      window.electronAPI.getAppVersion().then((result) => {
        if (result && result.version) {
          setAppVersion(result.version);
        }
      });
    }
  }, []);

  const checkForUpdates = async () => {
    if (!window.electronAPI) {
      setUpdateStatus('Update check only available in Electron app');
      return;
    }

    setChecking(true);
    setUpdateStatus(null);

    try {
      const result = await window.electronAPI.checkForUpdates();
      
      if (result.success) {
        if (result.updateInfo) {
          setUpdateStatus(`Update available: ${result.updateInfo.version}`);
        } else {
          setUpdateStatus('You are running the latest version');
        }
      } else {
        setUpdateStatus(`Error: ${result.error || 'Failed to check for updates'}`);
      }
    } catch (error) {
      setUpdateStatus(`Error: ${error.message}`);
    } finally {
      setChecking(false);
    }
  };

  // Listen for download progress (optional - for showing progress bar)
  useEffect(() => {
    if (window.electronAPI && window.electronAPI.onUpdateDownloadProgress) {
      window.electronAPI.onUpdateDownloadProgress((progress) => {
        console.log('Download progress:', progress);
        // You can update UI here to show progress bar
        // setDownloadProgress(progress.percent);
      });

      return () => {
        if (window.electronAPI.removeUpdateDownloadProgressListener) {
          window.electronAPI.removeUpdateDownloadProgressListener();
        }
      };
    }
  }, []);

  if (!window.electronAPI) {
    return null; // Don't show in web mode
  }

  return (
    <div style={{
      padding: '10px',
      fontSize: '12px',
      color: '#666',
      textAlign: 'center',
    }}>
      {appVersion && (
        <div style={{ marginBottom: '5px' }}>
          Version {appVersion}
        </div>
      )}
      <button
        onClick={checkForUpdates}
        disabled={checking}
        style={{
          padding: '5px 10px',
          fontSize: '12px',
          backgroundColor: checking ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: checking ? 'not-allowed' : 'pointer',
        }}
      >
        {checking ? 'Checking...' : 'Check for Updates'}
      </button>
      {updateStatus && (
        <div style={{ marginTop: '5px', fontSize: '11px' }}>
          {updateStatus}
        </div>
      )}
    </div>
  );
}

export default UpdateChecker;
