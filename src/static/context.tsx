import { createContext } from "react";
import { constants } from "../../constants";

interface objIdentity {
  name: string;
  role: string;
	desc: string;
}

interface skillsType {
  frontend_framework: Array<object>;
  backend_framework: Array<object>;
  mobile_framework: Array<object>;
  css_framework: Array<object>;
  state_management: Array<object>;
  data_fetching: Array<object>;
  database: Array<object>;
  repository_control: Array<object>;
  container: Array<object>;
}

interface InterfaceLayoutContext {
	isDarkMode?: any;
	setIsDarkMode?: any;
  headers_title: Array<string>;
  identity: objIdentity;
  education: Array<object>;
	experience: Array<object>;
  projects: Array<object>;
  skills: skillsType;
  contact : Array<object>;
}

export const LayoutContext = createContext<InterfaceLayoutContext>(constants);