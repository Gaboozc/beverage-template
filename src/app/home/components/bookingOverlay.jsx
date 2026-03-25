'use client';
import React, { useState } from 'react';

const PARTY_SIZES = ['2', '4', '6', '8+'];

const BookingOverlay = ({ isOpen, onClose }) => {
  const [partySize, setPartySize] = useState('2');
  const [specialOccasion, setSpecialOccasion] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className={`booking-overlay ${isOpen ? 'open' : ''}`}>
      <div className="booking-backdrop" onClick={onClose} />

      <div className="booking-panel" style={{ zIndex: 1 }}>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-sand-dim hover:text-sand transition-colors"
          aria-label="Close booking"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full border border-ember flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C1440E" strokeWidth="1.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-display text-xl text-sand mb-2">Evening reserved.</p>
            <p className="text-xs tracking-wide" style={{ color: 'rgba(232,220,207,0.5)' }}>
              Confirmation sent to your email. We look forward to the night.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="sense-label mb-6">Reserve Your Evening</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs mb-2 tracking-widest uppercase" style={{ color: 'rgba(232,220,207,0.45)', fontSize: '0.62rem' }}>
                  Date
                </label>
                <input type="date" required className="sky-input" style={{ colorScheme: 'dark' }} />
              </div>
              <div>
                <label className="block text-xs mb-2 tracking-widest uppercase" style={{ color: 'rgba(232,220,207,0.45)', fontSize: '0.62rem' }}>
                  Arrival
                </label>
                <select required className="sky-input" style={{ colorScheme: 'dark', background: 'rgba(232,220,207,0.06)' }}>
                  <option value="">Select time</option>
                  {['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs mb-3 tracking-widest uppercase" style={{ color: 'rgba(232,220,207,0.45)', fontSize: '0.62rem' }}>
                Party Size
              </label>
              <div className="flex gap-2">
                {PARTY_SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPartySize(size)}
                    className={`party-btn ${partySize === size ? 'active' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs mb-2 tracking-widest uppercase" style={{ color: 'rgba(232,220,207,0.45)', fontSize: '0.62rem' }}>
                  Name
                </label>
                <input type="text" required placeholder="Your name" className="sky-input" />
              </div>
              <div>
                <label className="block text-xs mb-2 tracking-widest uppercase" style={{ color: 'rgba(232,220,207,0.45)', fontSize: '0.62rem' }}>
                  Email
                </label>
                <input type="email" required placeholder="your@email.com" className="sky-input" />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`toggle-track ${specialOccasion ? 'on' : ''}`}
                  onClick={() => setSpecialOccasion(!specialOccasion)}
                  role="switch"
                  aria-checked={specialOccasion}
                >
                  <div className="toggle-thumb" />
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(232,220,207,0.55)', fontSize: '0.62rem' }}>
                  Special Occasion?
                </span>
              </div>
              {specialOccasion && (
                <textarea
                  placeholder="Tell us — anniversary, birthday, proposal... we'll make it count."
                  className="sky-input resize-none"
                  rows={2}
                  style={{ transition: 'all 0.3s ease' }}
                />
              )}
            </div>

            <button type="submit" className="btn-ember w-full text-center">
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingOverlay;
