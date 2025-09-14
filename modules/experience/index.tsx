import FadeWhenVisible from 'components/ui/fader';
import { LayoutContext } from 'context';
import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import { map, orderBy } from 'lodash';
import React, { forwardRef, useContext } from 'react';

import BackgroundVector from './components/BackgroundVector';
import ExperienceItem from './components/ExperienceItem';
import Title from './components/Title';

function Experience(_: any, ref: React.Ref<HTMLDivElement>) {
  const { experience } = useContext(LayoutContext);
  const { isDarkMode } = useTheme();

  return (
    <div className={cn(`relative h-screen`, isDarkMode ? `bg-dark-gradient` : `bg-light-gradient`)}>
      <BackgroundVector isDarkMode={isDarkMode} />
      <FadeWhenVisible>
        <div
          className={`flex flex-col justify-center w-full space-y-8 sm:space-y-16 relative py-16`}
          ref={ref}
        >
          <Title isDarkMode={isDarkMode}>Experiences</Title>
          <div
            className={cn(
              `flex flex-col w-auto p-4 sm:w-1/2 mx-auto justify-center`,
              isDarkMode ? `text-light-800` : `text-paletteText-primary`,
            )}
          >
            {map(orderBy(experience, ['key'], ['desc']), (item: ExperienceData, index: number) => {
              return (
                <ExperienceItem.Root
                  key={'EXPERIENCE-' + index}
                  experience={{ ...item, index }}
                  totalItem={experience.length}
                >
                  <ExperienceItem.Office />
                  <div
                    className={cn(
                      `px-2 text-sm sm:text-base`,
                      index === 0 ? `font-bold` : `font-semibold`,
                    )}
                  >
                    <ExperienceItem.Role />
                    <ExperienceItem.Time />
                  </div>
                </ExperienceItem.Root>
              );
            })}
          </div>
        </div>
      </FadeWhenVisible>
    </div>
  );
}

export default forwardRef(Experience);
