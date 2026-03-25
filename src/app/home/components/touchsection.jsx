'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const materials = [
  {
    name: 'Raw Basalt',
    description: 'Bar tops quarried from volcanic stone. Cold to the touch until the night warms them.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1982634c7-1772053861323.png',
    alt: 'Close-up texture of dark volcanic basalt stone bar top with natural veining and rough surface',
    span: 'lg:col-span-5',
  },
  {
    name: 'Belgian Linen',
    description: 'Napkins that hold their fold. The kind of fabric that makes a table feel like a decision.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13d8a0794-1772053861861.png',
    alt: 'Neatly folded cream linen napkin on a dark table with soft ambient candlelight',
    span: 'lg:col-span-4',
  },
  {
    name: 'Hammered Copper',
    description: 'The cold weight of a Moscow mule mug. A physical reminder that you made the right choice.',
    image: 'https://images.unsplash.com/photo-1503726800290-d5f1a00e05b0',
    alt: 'Hammered copper cocktail mug with condensation beading on the surface, held against dark background',
    span: 'lg:col-span-3',
  },
];

const TouchSection = () => {
  return (
    <section id="touch" className="py-28 lg:py-40 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="sense-label">III — Touch</span>
          <div className="divider-sand flex-1 max-w-[80px]" />
        </div>

        {/* Section headline */}
        <div className="mb-14 reveal delay-100">
          <h2
            className="font-display font-light text-sand"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: '1.05', maxWidth: '600px' }}
          >
            Every surface chosen for the way it{' '}
            <em className="italic" style={{ color: 'var(--clay)' }}>
              feels in the dark.
            </em>
          </h2>
        </div>

        {/* Materials asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {materials.map((mat, i) => (
            <div key={mat.name} className={`${mat.span} material-card reveal reveal-scale delay-${(i + 1) * 100}`}>
              <div className="img-zoom" style={{ height: '300px' }}>
                <AppImage src={mat.image} alt={mat.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="sense-label mb-2" style={{ color: 'var(--clay)', fontSize: '0.6rem' }}>
                  {mat.name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,220,207,0.5)' }}>
                  {mat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ambient detail strip */}
        <div className="mt-16 reveal delay-400">
          <div className="hr-ember mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: '40', label: 'Floors above street level', sub: 'Open-air, wind-buffered' },
              { stat: '18°', label: 'Avg rooftop temperature', sub: 'Even in February' },
              { stat: '6 PM', label: 'Doors open nightly', sub: 'Last seating at 11 PM' },
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
                <p
                  className="font-display font-light text-sand mb-1"
                  style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', letterSpacing: '-0.03em', color: 'var(--clay)' }}
                >
                  {item.stat}
                </p>
                <p className="text-sm font-medium text-sand mb-1">{item.label}</p>
                <p className="text-xs" style={{ color: 'rgba(232,220,207,0.4)' }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouchSection;
