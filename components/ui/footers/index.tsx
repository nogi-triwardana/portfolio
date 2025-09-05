import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import React from 'react';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        `text-xs sm:text-sm flex flex-col itens-center self-center justify-center text-center py-4`,
        isDarkMode ? `bg-dark-900` : `bg-light-900`,
      )}
    >
      <div className={cn(isDarkMode ? `text-light-800` : `text-paletteText-primary`)}>
        &copy; Copyright 2025.
      </div>
      <div className={cn(isDarkMode ? `text-light-800` : `text-paletteText-primary`)}>
        All rights reserved. Made with {`</>`} by Nogi
      </div>
    </div>
  );
}
