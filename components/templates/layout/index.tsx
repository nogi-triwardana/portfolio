import { LayoutContext, ObjIdentityType, UtilitiesType } from 'context';
import { db } from 'core/firebase';
import { onValue, ref } from 'firebase/database';
import React, { ReactNode, useEffect, useState } from 'react';

import { constants } from '../../../constants';

type PropsType = {
  children: ReactNode;
};

export default function Layout({ children }: PropsType) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [identity, setIdentity] = useState<ObjIdentityType>({
    name: '',
    role: '',
    desc: '',
    img: '',
  });
  const [headersTitle, setHeadersTitle] = useState([]);
  const [utilities, setUtilities] = useState<UtilitiesType>({
    button_download_file: {
      is_on: false,
      link: '',
      text_button: '',
    },
  });
  const [certificate, setCertificate] = useState([]);
  const [contacts, setContacts] = useState([]);

  /** Change theme mode based from user browser */
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`);

    const handleDarkModeMediaQuery = (e: any) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeMediaQuery);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeMediaQuery);
    };
  }, []);

  /** Retrieving data from realtime database firebase */
  useEffect(() => {
    const query = ref(db, '/introduction');

    const subscribe = onValue(
      query,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          if (data?.experiences) setExperiences(data?.experiences);
          if (data?.projects) setProjects(data?.projects.filter((el: any) => el !== null));
          if (data?.identity) setIdentity(data?.identity);
          if (data?.header_title) setHeadersTitle(data?.header_title);
          if (data?.utilities) setUtilities(data?.utilities);
          if (data?.certificate) setCertificate(data?.certificate);
          if (data?.contacts) setContacts(data?.contacts);
        }
      },
      (err) => console.log(err),
    );

    return () => {
      subscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  const contextValue = {
    isDarkMode,
    setIsDarkMode,
    headers_title: headersTitle,
    identity: identity,
    education: constants.education,
    experience: experiences,
    projects: projects,
    certificate,
    skills: constants.skills,
    contact: contacts,
    honors: constants.honors,
    utilities: utilities,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className="min-h-screen">{children}</div>
    </LayoutContext.Provider>
  );
}
