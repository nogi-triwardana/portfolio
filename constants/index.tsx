import PasPhoto from 'public/assets/img/pas_photo_2.jpg';

import { certificateConstant } from './certificate-constanst';
import { contactConstant } from './contact-constants';
import { educationConstants } from './education-constants';
import { honorsConstant } from './honors-constant';
import { skillConstants } from './skills-constants';

export const constants = {
  isDarkMode: false,
  setIsDarkMode: () => {},
  headers_title: [
    'Home',
    'Experiences',
    'Projects',
    'Certificates',
    'Honors',
    'Skills',
    'Contacts',
  ],
  identity: {
    name: 'Nogi Ragil Triwardana',
    role: 'Front End Developer',
    desc: `
      I’m a Front End Developer with almost five years of experience working with
      Javascript, Typescript and the others. I can adapt at
      contributing to highly collaborative work environment, enjoy finding
      solution to various problems, enthusiastic to learning new things
      and prioritizing stakeholders satisfaction.
		`,
    img: PasPhoto,
  },
  education: educationConstants,
  projects: [],
  certificate: certificateConstant,
  experience: [],
  skills: skillConstants,
  contact: contactConstant,
  honors: honorsConstant,
  utilities: {
    button_download_file: {
      is_on: true,
      link: 'https://drive.google.com/drive/folders/1a-Htq-rqbUAjatAKCBNhmymmt4cOyawv?usp=drive_link',
      text_button: 'Download Resume',
    },
  },
};
