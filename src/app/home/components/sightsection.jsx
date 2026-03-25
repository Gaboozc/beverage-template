'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const panoramas = [
  {
    direction: 'North',
    description: 'The financial district at 11 PM. Every lit window someone still working.',
    image: 'https://images.unsplash.com/photo-1717556743521-78e59a0f3496',
    alt: 'Panoramic night view of city skyline looking north with skyscrapers illuminated against deep blue sky',
  },
  {
    direction: 'East',
    description: 'Bridge cables catch the last orange light. Then just water and dark.',
    image: 'https://images.unsplash.com/photo-1636481281401-667d6dc564b3',
    alt: 'City bridge at dusk looking east with golden hour light reflecting on water below',
  },
  {
    direction: 'South',
    description: 'The harbour. Cargo ships that make Manhattan look like a toy.',
    image: 'https://images.unsplash.com/photo-1658471466826-bcc18bc736e6',
    alt: 'Aerial view looking south over harbour with city lights and water at night',
  },
  {
    direction: 'West',
    description: 'Sunset hits this side first. The table in the corner has a four-month waitlist.',
    image: 'https://images.unsplash.com/photo-1616244063185-251a345e2a40',
    alt: 'Rooftop bar terrace looking west at golden sunset over city buildings',
  },
];

const SightSection = () => {
  return (
    <section id="sight" className="py-28 lg:py-40 overflow-hidden" style={{ background: 'var(--volcanic-deep)' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="sense-label">IV — Sight</span>
          <div className="divider-sand flex-1 max-w-[80px]" />
        </div>

        {/* Headline */}
        <div className="mb-16 reveal delay-100">
          <h2
            className="font-display font-light text-sand"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.0', maxWidth: '700px' }}
          >
            The city from{' '}
            <em className="italic" style={{ color: 'var(--clay)' }}>
              every compass point.
            </em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed max-w-md" style={{ color: 'rgba(232,220,207,0.45)' }}>
            Four directions, four different cities. The same rooftop, depending on which way you face.
          </p>
        </div>

        {/* Panorama grid — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Large feature — North */}
          <div className="lg:col-span-8 panorama-card reveal reveal-left" style={{ height: '460px' }}>
            <AppImage src={panoramas[0].image} alt={panoramas[0].alt} className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 right-0 p-8" style={{ zIndex: 1 }}>
              <p className="sense-label mb-2">{panoramas[0].direction}</p>
              <p className="text-sm" style={{ color: 'rgba(232,220,207,0.65)' }}>
                {panoramas[0].description}
              </p>
            </div>
          </div>

          {/* East */}
          <div className="lg:col-span-4 panorama-card reveal reveal-right delay-100" style={{ height: '460px' }}>
            <AppImage src={panoramas[1].image} alt={panoramas[1].alt} className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ zIndex: 1 }}>
              <p className="sense-label mb-2">{panoramas[1].direction}</p>
              <p className="text-xs" style={{ color: 'rgba(232,220,207,0.6)' }}>
                {panoramas[1].description}
              </p>
            </div>
          </div>

          {/* South */}
          <div className="lg:col-span-4 panorama-card reveal reveal-left delay-200" style={{ height: '340px' }}>
            <AppImage src={panoramas[2].image} alt={panoramas[2].alt} className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ zIndex: 1 }}>
              <p className="sense-label mb-2">{panoramas[2].direction}</p>
              <p className="text-xs" style={{ color: 'rgba(232,220,207,0.6)' }}>
                {panoramas[2].description}
              </p>
            </div>
          </div>

          {/* West — large */}
          <div className="lg:col-span-8 panorama-card reveal reveal-right delay-300" style={{ height: '340px' }}>
            <AppImage src={panoramas[3].image} alt={panoramas[3].alt} className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 right-0 p-8" style={{ zIndex: 1 }}>
              <p className="sense-label mb-2">{panoramas[3].direction}</p>
              <p className="text-sm" style={{ color: 'rgba(232,220,207,0.65)' }}>
                {panoramas[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA block */}
        <div className="mt-24 text-center reveal delay-200">
          <div className="hr-ember mb-16" />
          <p
            className="font-display font-light text-sand mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: '1.05' }}
          >
            You've felt enough to know.
          </p>
          <p className="text-sm mb-10" style={{ color: 'rgba(232,220,207,0.45)', maxWidth: '380px', margin: '0 auto 2.5rem' }}>
            Reserve before the feeling passes. The rooftop is waiting.
          </p>
          {/* This CTA is handled by parent — scroll to pinned bar */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('.btn-ember.ember-pulse')?.click();
            }}
            className="btn-ember inline-block"
          >
            Reserve Your Evening
          </a>
        </div>
      </div>
    </section>
  );
};

export default SightSection;
