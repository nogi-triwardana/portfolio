import { createContext } from "react";
import { constants } from "../../constants";
import { StaticImageData } from "next/image";

type ItemSkillType = {
  title: string;
  image: StaticImageData;
}

interface objIdentity {
  name: string;
  role: string;
	desc: string;
}

interface skillsType {
  "Back-End Framework": ItemSkillType[];
  "Front-End Framework": ItemSkillType[];
  "Mobile Framework": ItemSkillType[];
  "CSS Framework": ItemSkillType[];
  "CI/CD": ItemSkillType[];
  "State Management": ItemSkillType[];
  "Data Fetching": ItemSkillType[];
  "Database": ItemSkillType[];
  "Repository Control": ItemSkillType[];
  "Container": ItemSkillType[];
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
  contact : Array<object>;
}

export const LayoutContext = createContext<InterfaceLayoutContext>(constants);