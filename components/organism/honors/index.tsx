import React, { useState, useContext, forwardRef, useEffect, useRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
declare global {
  interface Window{
      gtag:any,
      fcWidget:any
  }
}

const Honors = forwardRef(function Honors(props: any, ref: React.Ref<HTMLDivElement>) {
  const [firstPort, setFirstPort] = useState(false);
  const { honors, isDarkMode } = useContext(LayoutContext);
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

  const sendEventImgHonorHandler = (param: any) => {
    if(typeof window !== "undefined") {
      window.gtag("event", "click_image_honor", {
        honor_name: param.name
      })
    }
  }

  const onPreventDownloadImage = (e: any) => {
    if(e.button === 2) {
      return false;
    }
  }

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import('tw-elements');
      initTWE({ Ripple });
    };

    init();
  }, []);

  return (
    <div className={`relative ${isDarkMode ? `bg-dark-900` : `bg-light-900`}`}>
      <svg 
        className="absolute -top-[1px]"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <path fill={`${isDarkMode ? `#1f0a4d` : `#d1d0cd`}`} fillOpacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,58.7C274.3,43,343,21,411,21.3C480,21,549,43,617,96C685.7,149,754,235,823,256C891.4,277,960,235,1029,218.7C1097.1,203,1166,213,1234,234.7C1302.9,256,1371,288,1406,304L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <div className={`h-14 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`} ref={firstRef}>
          <span className={`relative`}>
            <span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} w-full h-full absolute rounded-full`}`} />
            Honors
          </span>
        </div>
        <div className={`flex flex-col w-2/3 mx-auto space-y-16 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}>
          {_.map(honors, (item: any, key: any) => (
            <div 
              key={"HONOR-" + key}
              className="flex flex-col gap-y-4 md:flex-row space-x-0 md:space-x-4"
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex justify-center"
                data-twe-ripple-init
                onClick={() => sendEventImgHonorHandler(item)}
              >
                <div className="relative inline-block">
                    <div className="relative w-[270px] xs:w-[320px] sm:w-[480px] h-fit">
                      <div className="pb-[70%]">
                        <span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-light-800` : `bg-paletteText-primary`} absolute z-10 rounded-md inline w-full h-full`}`} />
                        <img 
                          src={item.image.src} 
                          className='w-full h-full object-cover absolute rounded-lg pointer-events-none' 
                          onMouseDown={onPreventDownloadImage}
                        />
                      </div>
                    </div>
                </div>
              </a>
              <div className="pb-0 md:pb-8">
                <div className={`${isDarkMode ? `text-light-800` : `text-paletteText-primary`} text-center md:text-left font-bold text-base sm:text-lg`}>{item.name}</div>
                <div className={`${isDarkMode ? `text-light-800` : `text-paletteText-primary`} text-center md:text-left font-medium text-sm sm:text-base`}>
                  {item.platform} | {item.years}
                </div>
                <div className={`relative inline-block text-center md:text-left text-sm sm:text-base`}>
                  <span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-light-800` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
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

export default Honors;