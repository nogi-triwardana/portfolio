import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import nprogress from 'nprogress';
import React, { useEffect } from 'react';
import { Mosaic } from 'react-loading-indicators';

function ParentLoad() {
  const { isDarkMode } = useTheme();
  useEffect(() => {
    nprogress.configure({ showSpinner: false });
    nprogress.start();

    return () => {
      nprogress.done();
    };
  }, []);

  return (
    <div
      className={cn(
        `flex justify-center items-center min-h-screen`,
        isDarkMode ? `bg-dark-900` : `bg-light-900`,
      )}
    >
      <Mosaic color="#4287f5" size="large" text="" textColor="" />
    </div>
  );
}

export default ParentLoad;
