import { LayoutContext } from 'context';
import React, { useContext } from 'react';

export default function Footer() {
  const { isDarkMode } = useContext(LayoutContext);

  return (
    <div
      className={`${isDarkMode ? `bg-dark-900` : `bg-light-900`} text-xs sm:text-sm flex flex-col itens-center self-center justify-center text-center py-4`}
    >
      <div className={`${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}>
        &copy; Copyright 2025.
      </div>
      <div className={`${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}>
        All rights reserved. Made with {`</>`} by Nogi
      </div>
    </div>
  );
}
