import { LayoutContext } from 'context';
import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import _ from 'lodash';
import React, { forwardRef, useContext, useEffect } from 'react';

import ButtonDownload from './components/ButtonDownload';
import ContactItem from './components/ContactItem';
import Title from './components/Title';

const Contact = forwardRef(function Contact(props: any, ref: React.Ref<HTMLDivElement>) {
  const { contact, utilities } = useContext(LayoutContext);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import('tw-elements');
      initTWE({ Ripple });
    };

    init();
  }, []);

  return (
    <div className={cn(`relative h-screen`, isDarkMode ? `bg-dark-gradient` : `bg-light-gradient`)}>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <Title />
        <div
          className={cn(
            `grid grid-cols-4 pb-16 w-fit h-fit mx-auto justify-center`,
            isDarkMode ? `text-light-800` : `text-paletteText-primary`,
          )}
        >
          {_.map(contact, (item, key) => (
            <ContactItem key={'CONTACT-' + key} item={item} />
          ))}
        </div>
        {utilities?.button_download_file?.is_on && <ButtonDownload />}
      </div>
    </div>
  );
});

export default Contact;
