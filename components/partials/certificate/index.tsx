import React, { useState, useContext, forwardRef, useEffect, useRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';

const Certificate = forwardRef(function Certificate(props: any, ref: React.Ref<HTMLDivElement>) {
  const [firstPort, setFirstPort] = useState(false);
  const { certificate, isDarkMode } = useContext(LayoutContext);
  const firstRef = useRef(null);
  const option = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	};

  useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const [ entry ] = entries;
			if(entry.isIntersecting) setFirstPort(true);

		}, option);

		if(firstRef?.current) observer.observe(firstRef?.current);

		return () => {
			if(firstRef?.current) observer.unobserve(firstRef?.current)
		}

	},[firstRef, option]);

  return (
    <div className={`relative ${isDarkMode ? `bg-[#424543]` : `bg-[#f7f7f5]`}`}>
      <svg 
        className="absolute -top-[1px]" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <path fill={`${isDarkMode ? `#818582` : `#d1d0cd`}`} fillOpacity="1" d="M0,64L34.3,85.3C68.6,107,137,149,206,170.7C274.3,192,343,192,411,186.7C480,181,549,171,617,192C685.7,213,754,267,823,288C891.4,309,960,299,1029,288C1097.1,277,1166,267,1234,266.7C1302.9,267,1371,277,1406,282.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <div className={`h-14 ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`} ref={firstRef}>
          <span className={`relative`}>
            <span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} w-full h-full absolute rounded-full`}`} />
            Certificate
          </span>
        </div>
        <div className={`flex flex-col w-2/3 mx-auto space-y-16 ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}>
          {_.map(certificate, (item: any, key: any) => (
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <div className="relative inline-block">
                  <span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
                  <div className="relative !w-[270px] xs:w-[320px] sm:w-[360px] h-fit">
                    <div className="pb-[70%]">
                      <img src={item.image.src} className='w-full h-full object-cover absolute rounded-lg' />
                    </div>
                  </div>
                </div>
              </a>
              <div className="pb-0 md:pb-8">
                <div className={`${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`} text-center md:text-left font-bold text-base sm:text-lg`}>{item.name}</div>
                <div className={`relative inline-block text-center md:text-left text-sm sm:text-base`}>
                  <span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
})

export default Certificate;