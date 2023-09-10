import React, { useState, useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
import { AnimatePresence, motion } from 'framer-motion';

function Skills(props: any, ref: any) {
  const { skills, isDarkMode } = useContext(LayoutContext);

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
        <div className={`h-14 ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`} font-bold text-center text-3xl`}>
          <span className="relative">
            Skills
          </span>
        </div>
        <div className={`grid grid-cols-4 w-2/3 h-[400px] mx-auto justify-start ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}>
          {_.map(skills, (item: any, key: any) => (
            <div 
              key={'SKILL-'+key} 
              className="flex items-center flex-col justify-center space-y-2 text-center"
            >
              <img src={item?.image?.src} className="w-16 h-16 mx-auto" />
              <div className="text-sm font-semibold">{item?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);