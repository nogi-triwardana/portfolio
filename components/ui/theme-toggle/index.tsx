import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import { createPortal } from 'react-dom';
import { Tooltip } from 'react-tooltip';

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="flex items-center">
      <div
        className={cn(
          `w-24 xl:w-36 h-8 xl:h-12 bg-white rounded-full p-1 shadow-lg cursor-pointer transition-all duration-300 ease-in-out`,
          isDarkMode ? 'shadow-white/50' : 'shadow-black/20',
        )}
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          backgroundImage: isDarkMode
            ? `url('/assets/img/night-view.jpg')`
            : `url('/assets/img/daylight-view.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className={cn(
            'flex items-center justify-center size-6 xl:size-10 rounded-full hover:shadow-xl transition-all transform duration-500',
            isDarkMode ? 'translate-x-[64px] xl:translate-x-[96px]' : 'translate-x-[0px]',
            isDarkMode
              ? 'bg-radial-[at_25%_25%] from-white to-zinc-900 to-80%'
              : 'bg-radial-[at_25%_25%] from-yellow-500 to-white to-95%',
            isDarkMode ? 'hover:shadow-white/30' : 'hover:shadow-black/50',
          )}
          data-tooltip-id={'tooltip-theme-portfolio'}
          data-tooltip-content={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          data-tooltip-place={'bottom'}
          data-tooltip-is-show={'true'}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
      {createPortal(
        <Tooltip
          id={'tooltip-theme-portfolio'}
          render={({ content }) => (
            <span className="max-w-[50px] self-center flex justify-center items-center text-sm rounded-full whitespace-nowrap text-center !p-0">
              {content}
            </span>
          )}
        />,
        document.body,
        'tooltip-theme',
      )}
      {/**
       * <Switch
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
       */}
    </div>
  );
};

export default ThemeToggle;
