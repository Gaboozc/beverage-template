'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Header = ({ onReserveClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-400 transition-all duration-700 ${
          scrolled ? 'bg-volcanic/90 backdrop-blur-md border-b border-sand-faint' : 'bg-transparent'
        }`}
        style={{ zIndex: 400 }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <AppLogo
            text="SKYLINE"
            size={32}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {['Taste', 'Sound', 'Touch', 'Sight'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="nav-link-sky">
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={onReserveClick} className="hidden md:inline-flex btn-ember text-xs">
              Reserve
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-sand-dim hover:text-sand transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-350 bg-volcanic/98 backdrop-blur-lg flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 350 }}
      >
        {['Taste', 'Sound', 'Touch', 'Sight'].map((item, i) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="font-display text-3xl text-sand hover:text-clay transition-colors duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => {
            setMenuOpen(false);
            onReserveClick();
          }}
          className="btn-ember mt-4"
        >
          Reserve Your Evening
        </button>
      </div>
    </>
  );
};

export default Header;
