import { LayoutContext } from 'context';
import { cn } from 'lib/utils';
import _ from 'lodash';
import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';

import BackgroundVector from './components/BackgroundVector';
import HonorItem from './components/HonorItem';
import Title from './components/Title';

declare global {
  interface Window {
    gtag: any;
    fcWidget: any;
  }
}

const Honors = forwardRef(function Honors(props: any, ref: React.Ref<HTMLDivElement>) {
  const [firstPort, setFirstPort] = useState(false);
  const { honors, isDarkMode } = useContext(LayoutContext);
  const firstRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) setFirstPort(true);
    }, option);

    if (firstRef?.current) observer.observe(firstRef?.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (firstRef?.current) observer.unobserve(firstRef?.current);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstRef?.current, option]);

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import('tw-elements');
      initTWE({ Ripple });
    };

    init();
  }, []);

  return (
    <div
      className={cn(
        `relative flex flex-col justify-between h-screen`,
        isDarkMode ? `bg-dark-900` : `bg-light-900`,
      )}
    >
      <BackgroundVector />
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <Title ref={firstRef} firstPort={firstPort}>
          Honors
        </Title>
        <div
          className={`flex flex-col w-2/3 mx-auto space-y-16 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}
        >
          {_.map(honors, (item: HonorItem, key: number) => (
            <HonorItem.Root
              key={'HONOR-' + key}
              honor={item}
              firstPort={firstPort}
              isDarkMode={isDarkMode}
            >
              <HonorItem.Image />
              <HonorItem.Description />
            </HonorItem.Root>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Honors;
