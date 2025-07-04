import 'react-tooltip/dist/react-tooltip.css';
import 'react-tooltip/dist/react-tooltip.css';

import { LayoutContext } from 'context';
import _ from 'lodash';
import React, { forwardRef, Fragment, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Tooltip } from 'react-tooltip';

function Projects(props: any, ref: any) {
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

  const redirectUrlProject = (project: any) => {
    window.open(project.url, '_blank');
  };

  return (
    <div className={`relative ${isDarkMode ? `bg-dark-900` : `bg-light-900`}`}>
      <div
        className={`flex flex-col justify-center w-full space-y-8 sm:space-y-16 relative py-16`}
        ref={ref}
      >
        <div
          className={`h-14 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`}
          ref={firstRef}
        >
          <span className="relative">
            <span
              className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} w-full h-full absolute rounded-full`}`}
            />
            Projects
          </span>
        </div>
        <div
          className={`flex flex-col p-4 w-auto sm:w-2/3 mx-auto justify-start ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}
        >
          <div className={`flex flex-col space-y-4 justify-center`}>
            {_.map(projects, (item: any) => (
              <Fragment key={'PROJECT-' + item?.key}>
                <div className={`space-y-2`}>
                  <div
                    onClick={() => redirectUrlProject(item)}
                    className={`font-bold text-base sm:text-lg`}
                  >
                    <div
                      data-tooltip-id={'tooltip-title-project-detail'}
                      data-tooltip-content={
                        'Unknown URL, because it was just requested to create code and give it to the client. But I can pass the source code URL at github if you want to see it.'
                      }
                      data-tooltip-place={'right'}
                      data-tooltip-is-show={String(item?.is_true_real_url)}
                      className={`relative inline-block group hover:cursor-pointer hover:underline hover:text-blue-400`}
                    >
                      <span
                        className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
                      />
                      {item?.key + 1}. {item?.title}
                    </div>
                  </div>
                  <div className={`relative inline-block text-sm italic`}>
                    <span
                      className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
                    />
                    {item?.identity}
                  </div>
                  <div className={`relative block text-sm sm:text-base`}>
                    <span
                      className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
                    />
                    {item?.description}.
                  </div>
                  {!_.isEmpty(item?.responsibilities) && (
                    <div className={``}>
                      <div className={`relative inline-block text-sm sm:text-base`}>
                        <span
                          className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
                        />
                        Responsibilites:
                      </div>
                      <ul>
                        {_.map(item?.responsibilities, (val: any, key: any) => (
                          <li
                            key={'responsibilities-' + key}
                            className={`relative block text-sm sm:text-base min-w-full sm:min-w-[500px]`}
                          >
                            <div
                              className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
                            />
                            &bull; {val}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {!_.isEmpty(item?.technologies) && (
                    <div className={``}>
                      <div className={`relative inline-block text-sm sm:text-base`}>
                        <span
                          className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
                        />
                        Technologies:
                      </div>
                      <div>
                        <div className={`relative inline-block text-sm sm:text-base`}>
                          <span
                            className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
                          />
                          {item?.technologies}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {createPortal(
                  <Tooltip
                    id={'tooltip-title-project-detail'}
                    render={({ content, activeAnchor }) =>
                      activeAnchor?.getAttribute('data-tooltip-is-show') === 'false' ? (
                        <div className="max-w-[400px]">{content}</div>
                      ) : null
                    }
                  />,
                  document.body,
                  'tooltip-title-project',
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={`${isDarkMode ? `#1f0a4d` : `#d1d0cd`}`}
          fillOpacity="1"
          d="M0,32L40,32C80,32,160,32,240,74.7C320,117,400,203,480,229.3C560,256,640,224,720,192C800,160,880,128,960,101.3C1040,75,1120,53,1200,69.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default forwardRef(Projects);
