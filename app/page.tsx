'use client';

import React, { useRef, useState, useLayoutEffect, Suspense, lazy } from 'react'
import dynamic from 'next/dynamic';
import 'styles/Home.module.css'
import 'styles/globals.css'
import "nprogress/nprogress.css"

import LazyLoad from 'components/loader/LazyLoad';
const Header = lazy(() => import('components/headers'));
const Introduction = lazy(() => import('components/partials/introduction'));
const Experience = lazy(() => import('components/partials/experience'));
const Projects = lazy(() => import('components/partials/projects'));
const Skills = lazy(() => import('components/partials/skills'));
const Contact = lazy(() => import('components/partials/contact'));
const Layout = lazy(() => import('components'));

function Home(): JSX.Element {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const introductionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
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

  const handleScroll = (ref: any) => {
    if(ref?.current) ref?.current?.scrollIntoView({ behavior: "smooth" });
    setToggleDropdown(false);
  }
  
  const scrollSection = (section: string) => {
    switch(section) {
      case 'Home':
        return (
          handleScroll(introductionRef)
        );
      case 'Experience':
        return (
          handleScroll(experienceRef)
        );
      case 'Projects':
        return (
          handleScroll(projectsRef)
        );
      case 'Skills':
        return (
          handleScroll(skillsRef)
        );
      case 'Contact':
        return (
          handleScroll(contactRef)
        );
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<LazyLoad />}>
      <Layout>
        <Header 
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          scrollSection={(e: any) => scrollSection(e?.target?.innerText)}
        />
        <Introduction ref={introductionRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </Layout>
    </Suspense>
  )
}

const NoSSRGlobalComponent = dynamic(() => Promise.resolve(Home), {
  ssr: false
})


export default NoSSRGlobalComponent;