import { LayoutContext } from 'context';
import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import _ from 'lodash';
import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';

import BackgroundVector from './components/BackgroundVector';
import CertificateItem from './components/CertificateItem';
import Title from './components/Title';

declare global {
  interface Window {
    gtag: any;
    fcWidget: any;
  }
}

const Certificate = forwardRef(function Certificate(props: any, ref: React.Ref<HTMLDivElement>) {
  const [firstPort, setFirstPort] = useState(false);
  const { certificate } = useContext(LayoutContext);
  const { isDarkMode } = useTheme();
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
    <div className={cn(`relative`, isDarkMode ? `bg-dark-gradient` : `bg-light-gradient`)}>
      <BackgroundVector />
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <Title ref={firstRef} firstPort={firstPort}>
          Certificates
        </Title>
        <div
          className={cn(
            `flex flex-col w-2/3 mx-auto space-y-16`,
            isDarkMode ? `text-light-800` : `text-paletteText-primary`,
          )}
        >
          {_.map(certificate, (item: CertificateItem, key: number) => (
            <CertificateItem.Root
              key={'CERTIFICATE-' + key}
              certificate={item}
              firstPort={firstPort}
              isDarkMode={isDarkMode}
            >
              <CertificateItem.Image />
              <CertificateItem.Description />
            </CertificateItem.Root>
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={`${isDarkMode ? `#383737` : `#d1d0cd`}`}
          fillOpacity="1"
          d="M0,96L34.3,90.7C68.6,85,137,75,206,58.7C274.3,43,343,21,411,21.3C480,21,549,43,617,96C685.7,149,754,235,823,256C891.4,277,960,235,1029,218.7C1097.1,203,1166,213,1234,234.7C1302.9,256,1371,288,1406,304L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
});

export default Certificate;
