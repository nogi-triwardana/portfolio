import { createContext } from "react";
import { initialValue } from "./initial";

interface objIdentity {
  name: string;
  role: string;
	desc: string;
}

interface InterfaceLayoutContext {
	isDarkMode?: any;
	setIsDarkMode?: any;
  headers_title: Array<string>;
  identity: objIdentity;
  education: Array<object>;
	experience: Array<object>;
  projects: Array<object>;
  skills: Array<object>;
  contact : Array<object>;
}

export const LayoutContext = createContext<InterfaceLayoutContext>(initialValue);