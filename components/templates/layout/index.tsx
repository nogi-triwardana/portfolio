import React, { useEffect, useState, ReactNode } from 'react';
import { LayoutContext, objIdentity } from 'src/static/context';
import { constants } from '../../../constants';
import { db } from 'core/firebase';
import { onValue, ref } from "firebase/database";

type PropsType = {
	children: ReactNode
}

export default function Layout({ children }: PropsType) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [projects, setProjects] = useState([]);
	const [identity, setIdentity] = useState<objIdentity>({name: '', role: '', desc: ''});

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

	/** Retrieving data from realtime database firebase */
	useEffect(() => {
		const query = ref(db, "/introduction");
		
		const subscribe = onValue(query, (snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();

				if(data?.projects) {
					setProjects(data?.projects);
				}
				
				if(data?.identity) {
					setIdentity(data?.identity);
				}
			}
		}, (err) => console.log(err));
		
		// subscribe();
				
		return () => {
			subscribe();
		} 
	}, [db]);

	const contextValue = {
		isDarkMode,
		setIsDarkMode,
		headers_title: constants.headers_title,
		identity: identity,
		education: constants.education,
		experience: constants.experience,
		projects: projects,
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