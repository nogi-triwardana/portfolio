// eslint-disable @next/next/no-img-element

import { LayoutContext } from 'context';
import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import { map } from 'lodash';
import React, { forwardRef, useContext } from 'react';

import SkillItem from './components/SkillItem';

function Skills(_: unknown, ref: React.Ref<HTMLDivElement>) {
  const { skills } = useContext(LayoutContext);
  const { isDarkMode } = useTheme();

  return (
    <div className={cn(`relative`, isDarkMode ? `bg-dark-900` : `bg-light-900`)}>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <div
          className={cn(
            `h-14 font-bold text-center text-2xl sm:text-3xl`,
            isDarkMode ? `text-light-800` : `text-paletteText-primary`,
          )}
        >
          <span className="relative">Skills</span>
        </div>
        <div className={`flex flex-col space-y-16`}>
          {map(Object.entries(skills), (item, key) => (
            <SkillItem.Root key={'SKILLS-' + key} category={item[0]} item={item[1]}>
              <SkillItem.Category />
              <SkillItem.Item />
            </SkillItem.Root>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
