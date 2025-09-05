import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';

const Title = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        `h-14 font-bold text-center text-2xl sm:text-3xl`,
        isDarkMode ? `text-light-800` : `text-paletteText-primary`,
      )}
    >
      <span className={`relative`}>Contact</span>
    </div>
  );
};

export default Title;
