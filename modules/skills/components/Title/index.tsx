import { LayoutContext } from 'context';
import { cn } from 'lib/utils';
import { useContext } from 'react';

const Title = () => {
  const { isDarkMode } = useContext(LayoutContext);

  return (
    <div
      className={cn(
        `h-14 font-bold text-center text-2xl sm:text-3xl`,
        isDarkMode ? `text-light-800` : `text-paletteText-primary`,
      )}
    >
      <span className="relative">Skills</span>
    </div>
  );
};

export default Title;
