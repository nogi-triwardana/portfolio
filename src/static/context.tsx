import { StaticImageData } from 'next/image';
import { createContext } from 'react';

import { constants } from '../../constants';

type ItemSkillType = {
  title: string;
  image: StaticImageData;
};

export interface objIdentity {
  name: string;
  role: string;
  desc: string;
  img: StaticImageData | string | any;
}

interface skillsType {
  'Back End Framework': ItemSkillType[];
  'Front End Framework': ItemSkillType[];
  'Mobile Framework': ItemSkillType[];
  'CSS Framework': ItemSkillType[];
  'CI/CD': ItemSkillType[];
  'State Management': ItemSkillType[];
  'Data Fetching': ItemSkillType[];
  Database: ItemSkillType[];
  'Repository Control': ItemSkillType[];
  Container: ItemSkillType[];
}

export interface utilitiesType {
  button_download_file: {
    is_on: boolean;
    link: string;
    text_button: string;
  };
}

interface InterfaceLayoutContext {
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
}

export const LayoutContext = createContext<InterfaceLayoutContext>(constants);
