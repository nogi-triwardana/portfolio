import React, { useContext, useEffect } from 'react';
import nprogress from 'nprogress';
import { Atom } from 'react-loading-indicators';
import { LayoutContext } from 'src/static/context';

function ChildLoad() {
  const { isDarkMode } = useContext(LayoutContext);
  useEffect(() => {
    nprogress.configure({ showSpinner: false });
    nprogress.start();

    return () => {
      nprogress.done();
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${isDarkMode ? `bg-dark-900` : `bg-light-900`}`}
    >
      <Atom color="#4287f5" size="large" text="" textColor="" />
    </div>
  );
}

export default ChildLoad;
