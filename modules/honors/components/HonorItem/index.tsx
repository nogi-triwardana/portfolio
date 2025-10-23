import { cn } from 'lib/utils';
import { createContext, memo, useContext } from 'react';

const HonorContext = createContext<HonorItem>({
  index: 0,
  name: '',
  link: '',
  platform: '',
  years: '',
  description: '',
  image: {
    src: '',
  },
});

const UtilitiesContext = createContext<{
  firstPort: boolean;
  isDarkMode: boolean;
}>({
  firstPort: false,
  isDarkMode: false,
});

export const useHonorContext = () => useContext(HonorContext);

export const useUtilitiesContext = () => useContext(UtilitiesContext);

const Root = ({
  children,
  honor,
  firstPort,
  isDarkMode,
}: {
  children: React.ReactNode | React.ReactNode[];
  honor: HonorItem;
  firstPort: boolean;
  isDarkMode: boolean;
}) => {
  return (
    <UtilitiesContext.Provider value={{ firstPort, isDarkMode }}>
      <HonorContext.Provider value={honor}>
        <div className="flex flex-col gap-y-4 md:flex-row space-x-0 md:space-x-4">{children}</div>
      </HonorContext.Provider>
    </UtilitiesContext.Provider>
  );
};

const Image = () => {
  const { link, image, name } = useHonorContext();
  const { firstPort, isDarkMode } = useUtilitiesContext();

  const sendEventImgHonorHandler = (name: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click_image_honor', {
        honor_name: name,
      });
    }
  };

  const onPreventDownloadImage = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (e.button === 2) {
      return false;
    }
  };

  return (
    <div className="flex justify-center" onClick={() => sendEventImgHonorHandler(name)}>
      <div className="relative inline-block">
        <div className="relative w-[270px] xs:w-[320px] sm:w-[480px] h-fit">
          <div className="pb-[70%]">
            <span
              className={cn(
                `absolute z-10 rounded-md inline w-full h-full`,
                firstPort
                  ? `animate-scanning`
                  : isDarkMode
                    ? `bg-light-800`
                    : `bg-paletteText-primary`,
              )}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              className="w-full h-full object-cover absolute rounded-lg pointer-events-none"
              onMouseDown={onPreventDownloadImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  const { name, platform, years, description } = useHonorContext();
  const { isDarkMode, firstPort } = useUtilitiesContext();

  return (
    <div className="pb-0 md:pb-8">
      <div
        className={cn(
          `text-center md:text-left font-bold text-base sm:text-lg`,
          isDarkMode ? `text-light-800` : `text-paletteText-primary`,
        )}
      >
        {name}
      </div>
      <div
        className={cn(
          `text-center md:text-left font-medium text-sm sm:text-base`,
          isDarkMode ? `text-light-800` : `text-paletteText-primary`,
        )}
      >
        {platform} | {years}
      </div>
      <div className={`relative inline-block text-center md:text-left text-sm sm:text-base`}>
        <span
          className={cn(
            `absolute rounded-md inline w-full h-full`,
            firstPort ? `animate-scanning` : isDarkMode ? `bg-light-800` : `bg-paletteText-primary`,
          )}
        />
        {description}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Root: memo(Root),
  Image: memo(Image),
  Description: memo(Description),
};
