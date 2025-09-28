import { StaticImageData } from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

import { constants } from '../constants';

type ItemSkillType = {
  title: string;
  image: StaticImageData;
};

export type ObjIdentityType = {
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

type SkillsType = {
  [K in Capitalize<KeyOfSkillType>]: ItemSkillType[];
};

export type UtilitiesType = {
  button_download_file: {
    is_on: boolean;
    link: string;
    text_button: string;
  };
};

export type InterfaceLayoutContext = {
  headers_title: Array<string>;
  identity: ObjIdentityType;
  education: Array<object>;
  experience: ExperienceData[];
  projects: ProjectData[];
  certificate: Array<object>;
  skills: SkillsType;
  contact: ContactType;
  honors: Array<object>;
  utilities: UtilitiesType;
};

export const ThemeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const LayoutContext = createContext<InterfaceLayoutContext>(constants);
