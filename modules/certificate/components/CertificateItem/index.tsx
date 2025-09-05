import { cn } from 'lib/utils';
import { createContext, memo, useContext } from 'react';

const CertificateContext = createContext<CertificateItem>({
  index: 0,
  description: '',
  image: '',
  link: '',
  name: '',
  platform: '',
  years: '',
});

const UtilitiesContext = createContext<{
  firstPort: boolean;
  isDarkMode: boolean;
}>({
  firstPort: false,
  isDarkMode: false,
});

export const useCertificateContext = () => useContext(CertificateContext);

export const useUtilitiesContext = () => useContext(UtilitiesContext);

const Root = ({
  children,
  certificate,
  firstPort,
  isDarkMode,
}: {
  children: React.ReactNode | React.ReactNode[];
  certificate: CertificateItem;
  firstPort: boolean;
  isDarkMode: boolean;
}) => {
  return (
    <UtilitiesContext.Provider value={{ firstPort, isDarkMode }}>
      <CertificateContext.Provider value={certificate}>
        <div className="flex flex-col gap-y-4 md:flex-row space-x-0 md:space-x-4">{children}</div>
      </CertificateContext.Provider>
    </UtilitiesContext.Provider>
  );
};

const Image = () => {
  const { link, image, name } = useCertificateContext();
  const { firstPort, isDarkMode } = useUtilitiesContext();

  const sendEventImgCertificateHandler = (name: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click_image_certificate', {
        certificate_name: name,
      });
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center"
      onClick={() => sendEventImgCertificateHandler(name)}
      data-twe-ripple-init
    >
      <div className="relative inline-block">
        <div className="relative w-[270px] xs:w-[320px] sm:w-[480px] h-fit">
          <div className="pb-[70%]">
            <span
              className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-light-800` : `bg-paletteText-primary`} absolute z-10 rounded-md inline w-full h-full`}`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} className="w-full h-full object-cover absolute rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </a>
  );
};

const Description = () => {
  const { name, platform, years, description } = useCertificateContext();
  const { firstPort, isDarkMode } = useUtilitiesContext();

  return (
    <div className="pb-0 md:pb-8">
      <div
        className={cn(
          'text-center md:text-left font-bold text-base sm:text-lg',
          isDarkMode ? `text-light-800` : `text-paletteText-primary`,
        )}
      >
        {name}
      </div>
      <div
        className={cn(
          'text-center md:text-left font-medium text-sm sm:text-base',
          isDarkMode ? `text-light-800` : `text-paletteText-primary`,
        )}
      >
        {platform} | {years}
      </div>
      <div className={`relative inline-block text-center md:text-left text-sm sm:text-base`}>
        <span
          className={cn(
            'absolute rounded-md inline w-full h-full',
            firstPort
              ? `animate-scanning`
              : `${isDarkMode ? `bg-light-800` : `bg-paletteText-primary`}`,
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
