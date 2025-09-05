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

const ContactItem = ({ item }: { item: ExtractObjectFromArray<ContactType> }) => {
  const sendEventClickContactHandler = (param: ExtractObjectFromArray<ContactType>) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click_contact', {
        category_contact: param.name,
      });
    }
  };

  return (
    <a
      href={item.link}
      target="_blank"
      className={`flex justify-center focus:outline-none h-fit mx-16`}
      onClick={() => sendEventClickContactHandler(item)}
    >
      <div className={`text-4xl sm:text-6xl`}>{contactIcons(item.name)}</div>
    </a>
  );
};

export default ContactItem;
