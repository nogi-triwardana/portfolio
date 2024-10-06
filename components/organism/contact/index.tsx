import React, { useContext, forwardRef, useEffect } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
import {
  Ripple,
  initTWE,
} from "tw-elements";

const Contact = forwardRef(function Contact(props: any, ref: React.Ref<HTMLDivElement>) {
  const { contact, isDarkMode, utilities } = useContext(LayoutContext);

  useEffect(() => {
    initTWE({ Ripple });
  }, []);

  const sendEventClickContactHandler = (param: any) => {
    if(typeof window !== "undefined") {
      window.gtag("event", "click_contact", {
        category_contact: param.name
      })
    }
  }

  const onClickRedirectFile = () => {
    window.open(utilities.button_download_file.link, '_blank');
  }

  return (
    <div className={`relative ${isDarkMode ? `bg-dark-900` : `bg-light-900`} h-screen`}>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <div className={`h-14 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`}>
          <span className={`relative`}>
            Contact
          </span>
        </div>
        <div className={`grid grid-cols-4 pb-16 w-2/3 h-fit mx-auto justify-center ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}>
          {_.map(contact, (item: any, key: any) => (
            <a 
              href={item?.link} 
              target="_blank" 
              className={`flex justify-center focus:outline-none h-fit`} 
              key={'CONTACT-' + key}
              onClick={() => sendEventClickContactHandler(item)}
            >
              <div className={`text-4xl sm:text-6xl`}> 
                {item?.icon}
              </div>
            </a>
          ))}
        </div>
        {utilities?.button_download_file?.is_on && (
          <div className="flex justify-center items-center pb-16">
            <button 
              type="button"
              data-twe-ripple-init
              onClick={onClickRedirectFile}
              className={`${isDarkMode ? 'bg-[#1f0a4d]' : 'bg-paletteText-primary'} text-light-800 font-semibold p-4 h-full rounded-lg text-lg shadow-lg`}
            >
              {utilities.button_download_file.text_button}
            </button>
          </div>
        )}
      </div>
    </div>
  );
})

export default Contact;