// eslint-disable @next/next/no-img-element

import { LayoutContext } from 'context';
import _ from 'lodash';
import React, { forwardRef, Fragment, useContext } from 'react';

function Skills(props: any, ref: any) {
  const { skills, isDarkMode } = useContext(LayoutContext);

  return (
    <div className={`relative ${isDarkMode ? `bg-dark-900` : `bg-light-900`}`}>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <div
          className={`h-14 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`}
        >
          <span className="relative">Skills</span>
        </div>
        <div className={`flex flex-col space-y-16`}>
          {_.map(Object.entries(skills), (item, key) => (
            <Fragment key={'SKILLS-' + key}>
              <div
                className={`${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl`}
              >
                {item[0]}
              </div>
              <div
                className={`flex flex-wrap gap-12 w-full px-8 sm:w-2/3 mx-auto justify-center ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}
              >
                {_.map(item[1], (item: any, key: any) => (
                  <div
                    key={'SKILL-' + key}
                    className="flex items-center flex-col justify-center space-y-2 text-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item?.image?.src}
                      className="w-12 h-12 sm:h-16 mx-auto object-contain"
                      alt=""
                    />
                    <div className="font-semibold">{item?.title}</div>
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
