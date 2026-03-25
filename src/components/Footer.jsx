import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Footer = () => {
  return (
    <footer className="border-t border-sand-faint py-16 px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Logo + tagline */}
          <div className="space-y-2">
            <AppLogo text="SKYLINE" size={28} />
            <p className="text-xs text-sand-dim tracking-wide" style={{ color: 'rgba(232,220,207,0.4)' }}>
              Forty stories of considered atmosphere.
            </p>
          </div>

          {/* Right: Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Reservations', href: '#' },
              { label: 'Private Events', href: '#events' },
              { label: 'Menus', href: '#taste' },
              { label: 'Careers', href: '#' },
            ].map((link) => (
              <a key={link.label} href={link.href} className="nav-link-sky text-sm">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-sand-faint flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(232,220,207,0.3)', fontSize: '0.65rem' }}>
            © 2026 Skyline. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs uppercase tracking-widest transition-colors hover:text-sand"
                style={{ color: 'rgba(232,220,207,0.3)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
