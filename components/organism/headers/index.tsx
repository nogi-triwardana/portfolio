import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import { LayoutContext } from 'src/static/context';
import Switch from 'react-switch';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { PiListBold } from 'react-icons/pi';

type TypeProps = {
  scrollSection: React.MouseEventHandler;
  toggleDropdown?: any;
  setToggleDropdown?: any;
};

export default function Header({
  scrollSection,
  toggleDropdown,
  setToggleDropdown
}: TypeProps) {
  const [sectionActive, setSectionActive] = useState('');
  const { headers_title, isDarkMode, setIsDarkMode } =
    useContext(LayoutContext);

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
  };

  return (
    <div
      className={`flex relative justify-between w-full ${isDarkMode ? `bg-dark-900` : `bg-light-900`} z-[9999] sticky top-0 p-4 h-16 shadow-lg`}
    >
      <div>
        <div
          onClick={() => setToggleDropdown(!toggleDropdown)}
          className={`${isDarkMode ? `text-light-800` : `text-paletteText-primary`} flex items-center justify-center self-center text-xl sm:hidden`}
        >
          <PiListBold className={`self-center`} />
        </div>
      </div>
      <ul
        className={`${toggleDropdown ? `transition duration-300 ease-out -translate-x-full` : `transition duration-300 ease-out translate-x-0`} sm:flex absolute sm:static top-full inset-x-0 w-full sm:w-auto text-center sm:text-left shadow-lg sm:shadow-none divide-y sm:divide-y-0 ${isDarkMode ? `divide-[#dce3de]` : `divide-paletteText-primary`} space-x-0 sm:space-x-4 text-lg font-semibold ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}
      >
        {_.map(headers_title, (item: any, key: number) => (
          <li
            key={'header-' + key}
            data-twe-ripple-init
            className={`cursor-pointer ripple items-center w-full ${isDarkMode ? `bg-dark-900` : `bg-light-900`}`}
          >
            <button
              className={`${sectionActive === item ? `bg-black/20` : ``} p-4 sm:p-2 rounded-xl w-full`}
              onClick={handleChangeSection}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Switch
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center justify-center border border-[#f7f7f5]"
          checkedIcon={
            <div className="flex items-center justify-center h-full">
              <BsMoonStars className="flex items-center justify-center self-center text-lg text-center text-white" />
            </div>
          }
          uncheckedIcon={
            <div className="flex items-center justify-center h-full">
              <BsSun className="flex items-center justify-center self-center text-lg text-center text-[#a9bf17]" />
            </div>
          }
          onColor="#4287f5"
          offColor="#fff"
          offHandleColor="#d3d4cd"
          boxShadow="shadow-lg"
        />
      </div>
    </div>
  );
}
