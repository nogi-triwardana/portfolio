import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaWhatsappSquare } from 'react-icons/fa';

export const contactConstant = [
  {
    link: 'https://www.instagram.com/nogitriwardana_/',
    name: 'instagram',
    icon: <AiFillInstagram />
  },
  {
    link: 'https://www.linkedin.com/in/nogi-ragil-triwardana-a3a66b198/',
    name: 'linkedin',
    icon: <AiFillLinkedin />
  },
  {
    link: 'mailto:nogitriwardana@gmail.com',
    name: 'email',
    icon: <MdEmail />
  },
  {
    link: 'https://api.whatsapp.com/send/?phone=6285318909969&type=phone_number&app_absent=0',
    name: 'whatsapp',
    icon: <FaWhatsappSquare />
  }
]