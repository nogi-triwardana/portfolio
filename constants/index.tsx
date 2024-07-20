import { educationConstants } from './education-constants';
import { projectsConstant } from './projects-constants';
import { skillConstants } from './skills-constants';
import { experienceConstants } from './experience-constants';
import { contactConstant } from './contact-constants';
import { certificateConstant } from './certificate-constanst';

export const constants = {
  isDarkMode: false,
  setIsDarkMode: (darkMode: any) => {},
  headers_title: [
    "Home",
    "Experience",
    "Projects",
    "Certificate",
    "Skills",
    "Contact"
  ],
  identity: {
    name: 'Nogi Ragil Triwardana',
    role: 'Frontend Developer',
		desc: `
      I’m a Frontend Developer with almost five years of experience working with
      Javascript, Typescript and the others. I can adapt at
      contributing to highly collaborative work environment, enjoy finding
      solution to various problems, enthusiastic to learning new things
      and prioritizing stakeholders satisfaction.
		`
  },
  education: educationConstants,
  projects: projectsConstant,
  certificate: certificateConstant,
	experience: experienceConstants,
  skills: skillConstants,
  contact: contactConstant
};