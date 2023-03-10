import React, { useState } from 'react';
import { LayoutContext } from 'src/static/context';
import { initialValue } from 'src/static/initial';

export default function Layout({ children }: any) {
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
		experience: initialValue.experience
	};

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className="">
        {children}
      </div>
    </LayoutContext.Provider>
  );
}