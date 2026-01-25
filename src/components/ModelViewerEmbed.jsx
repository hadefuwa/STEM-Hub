import React from 'react';

function ModelViewerEmbed({
  src,
  alt = '3D model',
  poster,
  autoRotate = true,
  cameraControls = true,
  backgroundColor = '#0b1220',
  height = '360px',
}) {
  if (!src) return null;

  return (
    <div style={{
      width: '100%',
      height: height,
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: backgroundColor,
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
    }}>
      <model-viewer
        src={src}
        alt={alt}
        poster={poster}
        auto-rotate={autoRotate ? '' : undefined}
        camera-controls={cameraControls ? '' : undefined}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: backgroundColor,
        }}
        exposure="1"
        shadow-intensity="0.7"
        interaction-prompt="none"
      />
    </div>
  );
}

export default ModelViewerEmbed;
