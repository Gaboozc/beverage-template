'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const SoundSection = () => {
  return (
    <section id="sound" className="py-28 lg:py-40 overflow-hidden" style={{ background: 'var(--volcanic-deep)' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="sense-label">II — Sound</span>
          <div className="divider-sand flex-1 max-w-[80px]" />
        </div>

        {/* Asymmetric split — image 60 / text 40 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 reveal reveal-left">
            <div className="relative img-zoom rounded-lg overflow-hidden" style={{ height: '520px' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_176edd823-1772053863760.png"
                alt="DJ at turntables bathed in amber and ember-toned light, city skyline visible through floor-to-ceiling glass behind them"
                className="w-full h-full object-cover"
              />

              {/* Overlay with waveform */}
              <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: 'linear-gradient(to top, rgba(15,11,10,0.88) 0%, transparent 100%)' }}>
                <div className="flex items-end gap-[4px] mb-3 h-8">
                  {[0.3, 0.6, 1, 0.4, 0.8, 0.5, 0.9, 0.35, 0.7, 1, 0.45, 0.65, 0.9, 0.3, 0.55].map((h, i) => (
                    <div
                      key={i}
                      className="wave-bar"
                      style={{
                        height: `${h * 100}%`,
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  ))}
                </div>
                <p className="font-display text-sand font-light text-lg italic">Now playing on the rooftop</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10 reveal reveal-right delay-200">
            <div>
              <h2
                className="font-display font-light text-sand mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1.05' }}
              >
                The music
                <br />
                <em className="italic" style={{ color: 'var(--clay)' }}>
                  is the menu.
                </em>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,220,207,0.5)' }}>
                No television audio. No background playlists chosen by algorithm. Every Friday and Saturday, a resident DJ sets the temperature of the night — deep house when the sun dips, slow techno when the city goes quiet.
              </p>
            </div>

            {/* DJ card */}
            <div
              className="rounded-lg p-6 reveal delay-300"
              style={{
                background: 'rgba(232,220,207,0.04)',
                border: '1px solid rgba(232,220,207,0.08)',
              }}
            >
              <p className="sense-label mb-4" style={{ color: 'var(--clay)' }}>
                Resident DJ
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0" style={{ border: '1px solid rgba(193,68,14,0.3)' }}>
                  <AppImage
                    src="https://images.unsplash.com/photo-1624633078306-014a4c938ef7"
                    alt="Portrait of DJ Marcus Vane, resident DJ at Skyline rooftop bar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sand font-light" style={{ fontSize: '1.1rem' }}>
                    Marcus Vane
                  </p>
                  <p className="text-xs tracking-wide" style={{ color: 'rgba(232,220,207,0.4)', fontSize: '0.7rem' }}>
                    Fri & Sat · 9 PM – 2 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Sound promise */}
            <div className="space-y-4">
              {['No televisions. Ever.', 'Bass calibrated to the concrete below you.', 'Volume that lets you finish a thought.'].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-ember mt-2 shrink-0" />
                  <p className="text-sm" style={{ color: 'rgba(232,220,207,0.55)' }}>
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundSection;
