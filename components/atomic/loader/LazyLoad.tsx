import React, { useEffect } from 'react';
import Loading from 'public/assets/icon/loading.svg';
import nprogress from 'nprogress';

function LazyLoad() {
  
  useEffect(() => {
    nprogress.configure({ showSpinner: false });
    nprogress.start();
    
    return () => {
      nprogress.done();
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={Loading.src} className="md:w-[200px] md:h-[200px] w-[120px] h-[120px]" />
    </div>
  );
}

export default LazyLoad;