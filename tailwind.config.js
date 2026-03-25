/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        volcanic: '#1A1110',
        'volcanic-deep': '#0F0B0A',
        ember: '#C1440E',
        'ember-dim': 'rgba(193,68,14,0.15)',
        clay: '#D4856A',
        sand: '#E8DCCF',
        'sand-dim': 'rgba(232,220,207,0.6)',
        'sand-faint': 'rgba(232,220,207,0.15)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.8rem, 3vw, 2.8rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float-gentle 6s ease-in-out infinite',
        'ember-pulse': 'ember-pulse 2.5s ease-in-out infinite',
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(135deg, #C1440E 0%, #D4856A 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #0F0B0A 0%, #1A1110 100%)',
      },
    },
  },
  plugins: [],
};
