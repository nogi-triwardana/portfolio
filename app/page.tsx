'use client';

import 'styles/Home.module.css'
import 'styles/globals.css'
import "nprogress/nprogress.css"
import 'react-tooltip/dist/react-tooltip.css'

import LazyLoad from 'components/atomic/loader/ChildLoad';
import ParentLoad from 'components/atomic/loader/ParentLoad';
import dynamic from 'next/dynamic';
import React, { lazy,Suspense, useLayoutEffect, useRef, useState } from 'react'
const Header = lazy(() => import('components/organism/headers'));
const Footer = lazy(() => import('components/atomic/footers'));
const Introduction = lazy(() => import('components/organism/introduction'));
const Experience = lazy(() => import('components/organism/experience'));
const Projects = lazy(() => import('components/organism/projects'));
const Certificate = lazy(() => import('components/organism/certificate'));
const Honors = lazy(() => import('components/organism/honors'));
const Skills = lazy(() => import('components/organism/skills'));
const Contact = lazy(() => import('components/organism/contact'));
const Layout = lazy(() => import('components/templates/layout'));

function Home() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [slideActive, setSlideActive] = useState('Home');
  const introductionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const honorsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const onResizeWindow = () => {
    if(typeof window !== "undefined") {
      if(window.innerWidth < 640) {
        setToggleDropdown(true);
      } else setToggleDropdown(false);
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', onResizeWindow);
    onResizeWindow();

    return () => window.removeEventListener('resize', onResizeWindow);

  },[]);
  
  const scrollSection = (section: string) => {
    setSlideActive(section);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    if(window.innerWidth < 640) setToggleDropdown(true);
    else setToggleDropdown(false);
  };

  return (
    <Suspense fallback={<ParentLoad />}>
      <Layout>
        <Header 
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          scrollSection={(e: any) => scrollSection(e?.target?.innerText)}
        />
        <Suspense fallback={<LazyLoad />}>
          {slideActive === 'Home' && <Introduction ref={introductionRef} />}
          {slideActive === 'Experiences' && <Experience ref={experienceRef} />}
          {slideActive === 'Projects' && <Projects ref={projectsRef} />}
          {slideActive === 'Certificates' && <Certificate ref={certificateRef} />}
          {slideActive === 'Honors' && <Honors ref={honorsRef} />}
          {slideActive === 'Skills' && <Skills ref={skillsRef} />}
          {(slideActive === 'Contacts' || slideActive === 'Download') && (
            <Contact ref={contactRef} />
          )}
        </Suspense>
        <Footer />
      </Layout>
    </Suspense>
  )
}

const NoSSRGlobalComponent = dynamic(() => Promise.resolve(Home), {
  ssr: false
})


export default NoSSRGlobalComponent;