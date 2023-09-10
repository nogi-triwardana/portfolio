import React, { useEffect, useState, ReactNode } from 'react';
import { LayoutContext } from 'src/static/context';
import { initialValue } from 'src/static/initial';

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
		headers_title: initialValue.headers_title,
		identity: initialValue.identity,
		education: initialValue.education,
		experience: initialValue.experience,
		projects: initialValue.projects,
		skills: initialValue.skills,
		contact: initialValue.contact,
	};

  return (
    <LayoutContext.Provider value={contextValue}>
      <div>
        {children}
      </div>
    </LayoutContext.Provider>
  );
}