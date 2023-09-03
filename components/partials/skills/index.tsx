import React, { useState, useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
import { AnimatePresence, motion } from 'framer-motion';

function Skills(props: any, ref: any) {
  const { skills } = useContext(LayoutContext);

  return (
    <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
      <div className={`h-14 text-paletteText-primary font-bold text-center text-3xl`}>
        <span className="relative">
          Skills
        </span>
      </div>
      <div className={`grid grid-cols-4 w-2/3 h-[400px] mx-auto justify-start text-paletteText-primary`}>
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
  );
}

export default forwardRef(Skills);