import { StaticImageData } from 'next/image';
import { createContext } from 'react';

import { constants } from '../constants';

type ItemSkillType = {
  title: string;
  image: StaticImageData;
};

export type objIdentity = {
  name: string;
  role: string;
  desc: string;
  img: StaticImageData | string | any;
};

type KeyOfSkillType =
  | 'Back End Framework'
  | 'Front End Framework'
  | 'Mobile Framework'
  | 'CSS Framework'
  | 'CI/CD'
  | 'State Management'
  | 'Data Fetching'
  | 'Database'
  | 'Repository Control'
  | 'Container';

type skillsType = {
  [K in KeyOfSkillType]: ItemSkillType[];
};

export type utilitiesType = {
  button_download_file: {
    is_on: boolean;
    link: string;
    text_button: string;
  };
};

type InterfaceLayoutContext = {
  isDarkMode?: any;
  setIsDarkMode?: any;
  headers_title: Array<string>;
  identity: objIdentity;
  education: Array<object>;
  experience: Array<object>;
  projects: Array<object>;
  certificate: Array<object>;
  skills: skillsType;
  contact: Array<object>;
  honors: Array<object>;
  utilities: utilitiesType;
};

export const LayoutContext = createContext<InterfaceLayoutContext>(constants);
