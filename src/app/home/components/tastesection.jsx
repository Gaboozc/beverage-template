'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const ingredients = [
  {
    name: 'Mezcal Joven',
    origin: 'Oaxaca, Mexico',
    note: 'Smoked agave harvested at 8 years. The base of our Ember Sour.',
  },
  {
    name: 'Rosemary Syrup',
    origin: 'Rooftop Garden, Floor 40',
    note: 'Cut fresh nightly. Torched tableside over the coupe.',
  },
  {
    name: 'Blood Orange Shrub',
    origin: 'Moro Groves, Sicily',
    note: 'Cold-pressed, vinegar-preserved. Bright acid against smoke.',
  },
];

const TasteSection = () => {
  return (
    <section id="taste" className="py-28 lg:py-40 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="sense-label">I — Taste</span>
          <div className="divider-sand flex-1 max-w-[80px]" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Large cocktail image — spans 7 cols */}
          <div className="lg:col-span-7 img-zoom rounded-lg overflow-hidden reveal reveal-left" style={{ minHeight: '480px' }}>
            <AppImage
              src="https://images.unsplash.com/photo-1659052867732-5bdfd3764e5d"
              alt="Close-up pour of smoky mezcal cocktail with rosemary sprig being torched over a coupe glass, amber liquid glowing"
              className="w-full h-full object-cover"
              style={{ minHeight: '480px' }}
            />
          </div>

          {/* Right column — 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Signature cocktail card */}
            <div
              className="rounded-lg p-8 reveal reveal-right delay-100 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(193,68,14,0.12) 0%, rgba(212,133,106,0.06) 100%)',
                border: '1px solid rgba(193,68,14,0.2)',
                minHeight: '220px',
              }}
            >
              <div>
                <p className="sense-label mb-3" style={{ color: 'var(--clay)' }}>
                  Seasonal Signature
                </p>
                <h3 className="font-display font-light text-sand mb-3" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em' }}>
                  The Ember Sour
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,220,207,0.55)' }}>
                  Mezcal joven · torched rosemary · blood orange shrub · egg white · mole bitters. Changes with the season. Currently: winter smoke.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-1 h-1 rounded-full bg-ember" />
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(193,68,14,0.7)', fontSize: '0.62rem' }}>
                  Available nightly · subject to harvest
                </span>
              </div>
            </div>

            {/* Second cocktail image */}
            <div className="img-zoom rounded-lg overflow-hidden reveal reveal-right delay-200 flex-1" style={{ minHeight: '200px' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_18cfc5190-1772053861318.png"
                alt="Two copper mule mugs with crushed ice and lime garnish on a dark stone bar top, condensation forming"
                className="w-full h-full object-cover"
                style={{ minHeight: '200px' }}
              />
            </div>
          </div>

          {/* Ingredient cards row — full width */}
          {ingredients.map((ing, i) => (
            <div key={ing.name} className={`lg:col-span-4 ingredient-card reveal delay-${(i + 2) * 100}`}>
              <div className="flex items-start justify-between mb-4">
                <span className="sense-label" style={{ color: 'var(--clay)', fontSize: '0.58rem' }}>
                  {ing.origin}
                </span>
                <span className="font-display text-xs italic" style={{ color: 'rgba(232,220,207,0.3)', fontSize: '0.65rem' }}>
                  0{i + 1}
                </span>
              </div>
              <h4 className="font-display text-sand font-light mb-2" style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}>
                {ing.name}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(232,220,207,0.45)' }}>
                {ing.note}
              </p>
            </div>
          ))}
        </div>

        {/* Private events CTA */}
        <div className="mt-20 reveal" id="events">
          <div className="hr-ember mb-10" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="sense-label mb-2">Private Events</p>
              <h3 className="font-display font-light text-sand" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}>
                The whole rooftop. Just yours.
              </h3>
            </div>
            <a href="mailto:events@skylinebar.com" className="btn-ghost shrink-0">
              Book a Private Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasteSection;
