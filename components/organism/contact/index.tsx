import { LayoutContext } from 'context';
import _ from 'lodash';
import Link from 'next/link';
import React, { forwardRef, useContext, useEffect } from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ExtractObjectFromArray } from 'types';

const contactIcons = (type: string) => {
  switch (type) {
    case 'instagram':
      return <AiFillInstagram />;
    case 'linkedin':
      return <AiFillLinkedin />;
    case 'email':
      return <MdEmail />;
    case 'whatsapp':
      return <FaWhatsappSquare />;
    default:
      return <></>;
  }
};

const Contact = forwardRef(function Contact(props: any, ref: React.Ref<HTMLDivElement>) {
  const { contact, isDarkMode, utilities } = useContext(LayoutContext);

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import('tw-elements');
      initTWE({ Ripple });
    };

    init();
  }, []);

  const sendEventClickContactHandler = (param: ExtractObjectFromArray<ContactType>) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click_contact', {
        category_contact: param.name,
      });
    }
  };

  return (
    <div className={`relative ${isDarkMode ? `bg-dark-900` : `bg-light-900`} h-screen`}>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <div
          className={`h-14 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`}
        >
          <span className={`relative`}>Contact</span>
        </div>
        <div
          className={`grid grid-cols-4 pb-16 w-fit h-fit mx-auto justify-center ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}
        >
          {_.map(contact, (item, key) => (
            <a
              href={item.link}
              target="_blank"
              className={`flex justify-center focus:outline-none h-fit mx-16`}
              key={'CONTACT-' + key}
              onClick={() => sendEventClickContactHandler(item)}
            >
              <div className={`text-4xl sm:text-6xl`}>{contactIcons(item.name)}</div>
            </a>
          ))}
        </div>
        {utilities?.button_download_file?.is_on && (
          <div className="flex justify-center items-center pb-16">
            <Link
              href={utilities.button_download_file.link}
              target="_blank"
              data-twe-ripple-init
              className={`${isDarkMode ? 'bg-[#1f0a4d]' : 'bg-paletteText-primary'} text-light-800 font-semibold p-4 h-full rounded-lg text-lg shadow-lg`}
            >
              {utilities.button_download_file.text_button}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});

export default Contact;
