import { cn } from 'lib/utils';
import React from 'react';

const Title = ({ isDarkMode, children }: { isDarkMode: boolean; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        `font-bold text-center text-2xl sm:text-3xl`,
        isDarkMode ? `text-light-800` : `text-paletteText-primary`,
      )}
    >
      {children}
    </div>
  );
};

export default Title;
