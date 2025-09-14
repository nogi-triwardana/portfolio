import { LayoutContext } from 'context';
import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import Link from 'next/link';
import { useContext } from 'react';

const ButtonDownload = () => {
  const { utilities } = useContext(LayoutContext);
  const { isDarkMode } = useTheme();

  return (
    <div className="flex justify-center items-center pb-16">
      <Link
        href={utilities.button_download_file.link}
        target="_blank"
        data-twe-ripple-init
        className={cn(
          isDarkMode
            ? 'bg-dark-gradient text-light-800'
            : 'bg-light-gradient text-paletteText-primary',
          `font-semibold p-4 h-full rounded-lg text-lg shadow-lg`,
        )}
      >
        {utilities.button_download_file.text_button}
      </Link>
    </div>
  );
};

export default ButtonDownload;
