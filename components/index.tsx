import React, { useEffect, useState, ReactNode } from 'react';
import { LayoutContext } from 'src/static/context';
import { constants } from '../constants';

type PropsType = {
	children: ReactNode
}

export default function Layout({ children }: PropsType) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	/** Change theme mode based from user browser */
	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`);

		const handleDarkModeMediaQuery = (e: any) => {
			setIsDarkMode(e.matches);
		}

		darkModeMediaQuery.addEventListener('change', handleDarkModeMediaQuery);
		setIsDarkMode(darkModeMediaQuery.matches)

		return () => {
			darkModeMediaQuery.removeEventListener('change', handleDarkModeMediaQuery);
		}

	},[]);

	const contextValue = {
		isDarkMode,
		setIsDarkMode,
		headers_title: constants.headers_title,
		identity: constants.identity,
		education: constants.education,
		experience: constants.experience,
		projects: constants.projects,
		certificate: constants.certificate,
		skills: constants.skills,
		contact: constants.contact,
	};

  return (
    <LayoutContext.Provider value={contextValue}>
      <div>
        {children}
      </div>
    </LayoutContext.Provider>
  );
}