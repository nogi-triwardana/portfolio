import React, { useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';

const Contact = forwardRef(function Contact(props: any, ref: React.Ref<HTMLDivElement>) {
  const { contact, isDarkMode } = useContext(LayoutContext);

  const sendEventClickContactHandler = (param: any) => {
    if(typeof window !== "undefined") {
      window.gtag("event", "click_contact", {
        category_contact: param.name
      })
    }
  }

  return (
    <div className={`relative ${isDarkMode ? `bg-[#424543]` : `bg-[#f7f7f5]`}`}>
      <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
        <div className={`h-14 ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`}>
          <span className={`relative`}>
            Contact
          </span>
        </div>
        <div className={`grid grid-cols-4 pb-16 w-2/3 h-fit mx-auto justify-center ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}>
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
      </div>
    </div>
  );
})

export default Contact;