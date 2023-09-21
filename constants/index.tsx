import { educationConstants } from './education-constants';
import { projectsConstant } from './projects-constants';
import { skillConstants } from './skills-constants';
import { experienceConstants } from './experience-constants';
import { contactConstant } from './contact-constants';

export const constants = {
  isDarkMode: false,
  setIsDarkMode: (darkMode: any) => {},
  headers_title: [
    "Home",
    "Experience",
    "Projects",
    "Skills",
    "Contact"
  ],
  identity: {
    name: 'Nogi Ragil Triwardana',
    role: 'Frontend Developer',
		desc: `
			Fullstack developer with two years
			of experience working with
			Javascript, HTML/CSS, PHP and
			MySQL to serve customers. Adapt at
			contributing to highly collaborative
			work environment, finding
			solutions, and accentuating
			customer satisfaction.
		`
  },
  education: educationConstants,
  projects: projectsConstant,
	experience: experienceConstants,
  skills: skillConstants,
  contact: contactConstant
};