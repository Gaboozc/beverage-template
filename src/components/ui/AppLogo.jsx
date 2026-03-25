'use client';

import React from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

function AppLogo({
  src = '/assets/images/app_logo.png',
  text,
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  onClick,
}) {
  return (
    <div
      className={`flex items-center gap-2 ${onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
      onClick={onClick}
    >
      {/* Show image if src provided, otherwise show icon */}
      {src ? (
        <AppImage src={src} alt="Logo" width={size} height={size} className="flex-shrink-0" />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}

      {/* Show text if provided */}
      {text && <span className="text-xl font-bold">{text}</span>}
    </div>
  );
}

export default AppLogo;
