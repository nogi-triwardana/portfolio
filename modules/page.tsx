'use client';

import Layout from 'components/layout';
import Footer from 'components/ui/footers';
import Header from 'components/ui/headers';
import { InterfaceLayoutContext } from 'context';
import useRippleEffect from 'hooks/useRippleEffect';
import Certificate from 'modules/certificate';
import Contact from 'modules/contact';
import Experience from 'modules/experience';
import Honors from 'modules/honors';
import Introduction from 'modules/introduction';
import Projects from 'modules/projects';
import Skills from 'modules/skills';
import React, { useLayoutEffect, useRef, useState } from 'react';

function IndexPage({ extractedData }: { extractedData: InterfaceLayoutContext }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [slideActive, setSlideActive] = useState('Home');
  const introductionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const honorsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useRippleEffect({ trigger: slideActive });

  const onResizeWindow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        setToggleDropdown(true);
      } else setToggleDropdown(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', onResizeWindow);
    onResizeWindow();

    return () => window.removeEventListener('resize', onResizeWindow);
  }, []);

  const scrollSection = (section: string) => {
    setSlideActive(section);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (window.innerWidth < 640) setToggleDropdown(true);
    else setToggleDropdown(false);
  };

  return (
    <Layout extractedData={extractedData}>
      <Header
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
        scrollSection={(e: any) => scrollSection(e?.target?.innerText)}
      />
      {slideActive === 'Home' && <Introduction ref={introductionRef} />}
      {slideActive === 'Experiences' && <Experience ref={experienceRef} />}
      {slideActive === 'Projects' && <Projects ref={projectsRef} />}
      {slideActive === 'Certificates' && <Certificate ref={certificateRef} />}
      {slideActive === 'Honors' && <Honors ref={honorsRef} />}
      {slideActive === 'Skills' && <Skills ref={skillsRef} />}
      {(slideActive === 'Contacts' || slideActive === 'Download') && <Contact ref={contactRef} />}
      <Footer />
    </Layout>
  );
}

export default IndexPage;
