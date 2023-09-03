import React, { useState, ReactNode } from 'react';
import { LayoutContext } from 'src/static/context';
import { initialValue } from 'src/static/initial';

type PropsType = {
	children: ReactNode
}

export default function Layout({ children }: PropsType) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const changeThemeType = (value: boolean) => {
		setIsDarkMode(value);
	}

	const contextValue = {
		isDarkMode: isDarkMode,
		setIsDarkMode: changeThemeType,
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