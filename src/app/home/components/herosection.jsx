'use client';
import React, { useEffect, useState } from 'react';

const HeroSection = ({ onReserveClick }) => {
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);

  useEffect(() => {
    // Delay headline: 4 seconds as per brief
    const t1 = setTimeout(() => setHeadlineVisible(true), 4000);
    const t2 = setTimeout(() => setSubVisible(true), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-end">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=85&w=1920"
          aria-label="Aerial drone footage descending onto Skyline rooftop bar at golden hour"
        >
          {/* Fallback to atmospheric rooftop image if video unavailable */}
        </video>
        {/* Fallback image always present behind video */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=85&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 pb-24 lg:pb-32">
        <div className="max-w-screen-xl mx-auto">
          {/* Headline */}
          <div
            className="overflow-hidden mb-6"
            style={{
              opacity: headlineVisible ? 1 : 0,
              transform: headlineVisible ? 'translateY(0)' : 'translateY(20px)',
              transition:
                'opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <h1
              className="font-display font-light text-sand leading-none"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 7rem)', letterSpacing: '-0.03em', lineHeight: '0.92' }}
            >
              Forty Stories
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--clay)' }}>Closer to the Sun.</em>
            </h1>
          </div>

          {/* Sub + CTA */}
          <div
            className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12"
            style={{
              opacity: subVisible ? 1 : 0,
              transform: subVisible ? 'translateY(0)' : 'translateY(16px)',
              transition:
                'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(232,220,207,0.6)', letterSpacing: '0.02em' }}>
              A rooftop bar where the city sprawls below like a lit circuit board. Cocktails that arrive smoking. Bass you feel through the floor.
            </p>
            <button onClick={onReserveClick} className="btn-ember shrink-0">
              Reserve Your Evening
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: subVisible ? 0.5 : 0,
          transition: 'opacity 1s ease 0.5s',
        }}
      >
        <span className="sense-label" style={{ fontSize: '0.58rem' }}>
          Scroll
        </span>
        <div
          className="w-px h-12 origin-top"
          style={{
            background: 'linear-gradient(to bottom, var(--ember), transparent)',
            animation: 'float-gentle 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
