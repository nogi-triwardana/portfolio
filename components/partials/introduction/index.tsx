import React, { useContext, forwardRef } from 'react';
import Image from 'next/image';
import { LayoutContext } from 'src/static/context';
import PasPhoto from 'public/assets/img/pas_photo.jpg';

const Introduction = forwardRef(function Introduction(props: any, ref: React.Ref<HTMLDivElement>) {
  const { identity, setIsDarkMode, isDarkMode } = useContext(LayoutContext);

  return (
    <div className={`relative ${isDarkMode ? `bg-[#424543]` : `bg-[#f7f7f5]`}`}>
      <div className={`grid grid-rows-2 sm:grid-rows-none grid-cols-none sm:grid-cols-2 w-full p-8 relative`} ref={ref}>
        <div className={`flex justify-end w-full`}>
          <div className={`relative w-48 h-48 sm:w-64 sm:h-64 rounded-full mx-auto sm:mx-0`}>
            <Image 
              src={PasPhoto} 
              className={`object-cover rounded-full`} 
              alt={""}
              fill
            />
          </div>
        </div>
        <div className={`text-xl ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`} ml-0 sm:ml-8 space-y-2 font-semibold items-center sm:items-start flex flex-col justify-center text-center`}>
          <h1>{identity?.name}</h1>
          <h1>{identity?.role}</h1>
          <p className={`text-sm font-medium whitespace-normal sm:whitespace-pre-line text-center sm:text-left`}>{identity?.desc}</p>
        </div>
      </div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className=""
      >
        <path fill={`${isDarkMode ? `#818582` : `#d1d0cd`}`} fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,144C672,160,768,192,864,181.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
});

export default Introduction;