'use client';
import React from 'react';

const PinnedCTA = ({ visible, onReserveClick }) => {
  return (
    <div className={`pinned-cta ${visible ? 'visible' : ''}`}>
      <div
        className="flex items-center justify-between px-6 lg:px-12 py-4"
        style={{
          background: 'linear-gradient(to right, rgba(15,11,10,0.97), rgba(26,17,16,0.97))',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(193,68,14,0.2)',
        }}
      >
        <p
          className="hidden sm:block text-xs tracking-widest uppercase"
          style={{ color: 'rgba(232,220,207,0.4)', fontSize: '0.62rem', letterSpacing: '0.2em' }}
        >
          Skyline Rooftop · Open Nightly from 6 PM
        </p>
        <div className="flex items-center gap-3 ml-auto">
          {/* Waveform decoration */}
          <div className="hidden sm:flex items-end gap-[3px] h-5 mr-2">
            {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.3].map((h, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{
                  height: `${h * 100}%`,
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>
          <button onClick={onReserveClick} className="btn-ember ember-pulse">
            Reserve Your Evening
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinnedCTA;
