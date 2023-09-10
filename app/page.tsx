'use client';

import React, { useRef, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import Header from 'components/headers'
import Introduction from 'components/partials/introduction'
import Experience from 'components/partials/experience'
import Projects from 'components/partials/projects'
import Skills from 'components/partials/skills'
import Contact from 'components/partials/contact'
import Layout from 'components'
import { LayoutContext } from 'src/static/context'

export default function Home(): JSX.Element {
  const introductionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: any) => {
    if(ref?.current) ref?.current?.scrollIntoView({ behavior: "smooth" });
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
    <Layout>
      <motion.div
        transition={{ delay: 1 }}
      > 
        <Header 
          scrollSection={(e: any) => scrollSection(e?.target?.innerText)}
        />
        <Introduction ref={introductionRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </motion.div>
    </Layout>
  )
}