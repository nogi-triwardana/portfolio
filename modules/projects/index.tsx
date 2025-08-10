import 'react-tooltip/dist/react-tooltip.css';
import 'react-tooltip/dist/react-tooltip.css';

import { LayoutContext } from 'context';
import { cn } from 'lib/utils';
import { map } from 'lodash';
import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';

import BackgroundVector from './components/BackgroundVector';
import ProjectItem from './components/ProjectItem';
import Title from './components/Title';

function Projects(_: any, ref: React.Ref<HTMLDivElement>) {
  const [firstPort, setFirstPort] = useState(false);
  const firstRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const { projects, isDarkMode } = useContext(LayoutContext);

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

  console.log({ projects });

  return (
    <div className={cn(`relative`, isDarkMode ? `bg-dark-900` : `bg-light-900`)}>
      <div
        className={`flex flex-col justify-center w-full space-y-8 sm:space-y-16 relative py-16`}
        ref={ref}
      >
        <Title ref={firstRef} isDarkMode={isDarkMode} firstPort={firstPort}>
          Projects
        </Title>
        <div
          className={`flex flex-col p-4 w-auto sm:w-2/3 mx-auto justify-start ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}
        >
          <div className={`flex flex-col space-y-4 justify-center`}>
            {map(projects, (item: ProjectData, index: number) => (
              <ProjectItem.Root
                key={'PROJECT-' + index}
                project={{ ...item, index }}
                firstPort={firstPort}
                isDarkMode={isDarkMode}
              >
                <ProjectItem.Title />
                <ProjectItem.Identity />
                <ProjectItem.Description />
                <ProjectItem.Responsibilites />
                <ProjectItem.Technologies />
                <ProjectItem.TooltipPortal />
              </ProjectItem.Root>
            ))}
          </div>
        </div>
      </div>
      <BackgroundVector />
    </div>
  );
}

export default forwardRef(Projects);
