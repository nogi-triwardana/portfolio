import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import { forwardRef } from 'react';

const Title = forwardRef(function Title(
  {
    children,
    firstPort,
  }: {
    children: React.ReactNode;
    firstPort: boolean;
  },
  ref: React.Ref<HTMLDivElement>,
) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        `h-14 font-bold text-center text-2xl sm:text-3xl`,
        isDarkMode ? `text-light-800` : `text-paletteText-primary`,
      )}
      ref={ref}
    >
      <span className={`relative`}>
        <span
          className={cn(
            `w-full h-full absolute rounded-full`,
            firstPort
              ? `animate-scanning`
              : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`}`,
          )}
        />
        {children}
      </span>
    </div>
  );
});

export default Title;
