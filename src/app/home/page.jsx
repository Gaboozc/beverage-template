'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/herosection';
import TasteSection from './components/tastesection';
import SoundSection from './components/soundsection';
import TouchSection from './components/touchsection';
import SightSection from './components/sightsection';
import BookingOverlay from './components/bookingOverlay';
import PinnedCTA from './components/pinnedCTA';

const HomePage = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [pinnedVisible, setPinnedVisible] = useState(false);
  const heroRef = useRef(null);

  // Custom cursor
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      animFrame = requestAnimationFrame(animateRing);
    };

    const handleHoverIn = () => {
      dot.classList.add('hover');
      ring.classList.add('hover');
    };

    const handleHoverOut = () => {
      dot.classList.remove('hover');
      ring.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);
    animFrame = requestAnimationFrame(animateRing);

    document.querySelectorAll('a, button, [role="switch"]').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Scroll reveals
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Pinned CTA visibility — appears after hero exits viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setPinnedVisible(scrollY > heroHeight * 0.75);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when booking open
  useEffect(() => {
    document.body.style.overflow = bookingOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [bookingOpen]);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <div id="cursor-dot" className="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" className="cursor-ring" aria-hidden="true" />

      {/* Header */}
      <Header onReserveClick={openBooking} />

      {/* Hero */}
      <div ref={heroRef}>
        <HeroSection onReserveClick={openBooking} />
      </div>

      {/* Sensory sections */}
      <main>
        <TasteSection />
        <SoundSection />
        <TouchSection />
        <SightSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pinned CTA bar */}
      <PinnedCTA visible={pinnedVisible} onReserveClick={openBooking} />

      {/* Booking overlay */}
      <BookingOverlay isOpen={bookingOpen} onClose={closeBooking} />
    </>
  );
};

export default HomePage;
