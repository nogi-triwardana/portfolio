import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import React from 'react';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        `text-xs sm:text-sm flex flex-col itens-center self-center justify-center absolute right-0 left-0 bottom-0 bg-transparent font-medium text-center py-4`,
        // isDarkMode ? `bg-[#383737]` : `bg-[#d1d0cd]`,
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
