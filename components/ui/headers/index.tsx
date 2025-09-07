import { LayoutContext } from 'context';
import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import _ from 'lodash';
import type { Dispatch, SetStateAction } from 'react';
import React, { useContext, useEffect, useState } from 'react';
import { PiListBold } from 'react-icons/pi';

import ThemeToggle from '../theme-toggle';

type TypeProps = {
  scrollSection: React.MouseEventHandler;
  toggleDropdown: boolean;
  setToggleDropdown: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ scrollSection, toggleDropdown, setToggleDropdown }: TypeProps) {
  const [sectionActive, setSectionActive] = useState('');
  const { headers_title } = useContext(LayoutContext);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import('tw-elements');
      initTWE({ Ripple });
    };

    init();
  }, []);

  const handleChangeSection = (e: any) => {
    setSectionActive(e?.target?.innerText);
    scrollSection(e);
    setToggleDropdown(true);
  };

  return (
    <div
      className={cn(
        `flex relative justify-between w-full z-9999 sticky top-0 py-4 px-4 lg:px-8 h-20 shadow-lg`,
        isDarkMode ? `bg-dark-900` : `bg-light-900`,
      )}
    >
      <div className="flex items-center justify-center">
        <div
          onClick={() => setToggleDropdown(!toggleDropdown)}
          className={cn(
            `flex items-center justify-center self-center text-xl lg:hidden`,
            isDarkMode ? `text-light-800` : `text-paletteText-primary`,
          )}
        >
          <PiListBold className={`self-center`} />
        </div>
      </div>
      <ul
        className={cn(
          `lg:flex absolute lg:static top-full inset-x-0 w-full lg:w-auto text-center lg:text-left shadow-lg lg:shadow-none divide-y lg:divide-y-0 space-x-0 lg:space-x-4 text-lg font-semibold`,
          toggleDropdown
            ? `transition duration-300 ease-out -translate-x-full`
            : `transition duration-300 ease-out translate-x-0`,
          isDarkMode
            ? `text-[#dce3de] divide-[#dce3de]`
            : `divide-paletteText-primary text-paletteText-primary`,
        )}
      >
        {_.map(headers_title, (item: any, key: number) => (
          <li
            key={'header-' + key}
            data-twe-ripple-init
            className={cn(
              `ripple items-center w-full`,
              isDarkMode ? `bg-dark-900` : `bg-light-900`,
            )}
          >
            <button
              className={cn(
                `cursor-pointer p-4 lg:p-2 rounded-xl w-full`,
                sectionActive === item ? `bg-black/20` : ``,
              )}
              onClick={handleChangeSection}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
}
