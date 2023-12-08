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
      Frontend developer with three years of experience working with Javascript, 
      HTML, CSS and the others to serve customers. Adapt at contributing to 
      highly collaborative work environment, finding solutions, and accentuating 
      customer satisfaction.
		`
  },
  education: educationConstants,
  projects: projectsConstant,
  certificate: certificateConstant,
	experience: experienceConstants,
  skills: skillConstants,
  contact: contactConstant
};