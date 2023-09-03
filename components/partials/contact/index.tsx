import React, { useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';

const Contact = forwardRef(function Contact(props: any, ref: React.Ref<HTMLDivElement>) {
  const { contact } = useContext(LayoutContext);

  return (
    <div className={`flex flex-col justify-center w-full space-y-8 relative py-16`} ref={ref}>
      <div className={`h-14 text-paletteText-primary font-bold text-center text-3xl`}>
        <span className={`relative`}>
          Contact
        </span>
      </div>
      <div className={`grid grid-cols-${contact.length} w-2/3 h-[400px] mx-auto justify-center text-paletteText-primary`}>
        {_.map(contact, (item: any, key: any) => (
          <a href={item?.link} target="_blank" className={`flex justify-center`} key={'CONTACT-' + key}>
            <div className={`text-6xl`}> 
              {item?.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
})

export default Contact;