'use client';

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from 'components/headers'
import Introduction from 'components/partials/introduction'
import Experience from 'components/partials/experience'
import Projects from 'components/partials/projects'
import Skills from 'components/partials/skills'
import Contact from 'components/partials/contact'

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
    <motion.div
      transition={{ delay: 1 }}
    > 
      <Header 
        scrollSection={(e: any) => scrollSection(e?.target?.innerText)}
      />
      <div className={`relative bg-[#f7f7f5]`}>
        <Introduction ref={introductionRef} />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className=""
        >
          <path fill="#d1d0cd" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,144C672,160,768,192,864,181.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className={`relative bg-[#f7f7f5]`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className="absolute"
        >
          <path fill="#d1d0cd" fillOpacity="1" d="M0,288L48,256C96,224,192,160,288,117.3C384,75,480,53,576,74.7C672,96,768,160,864,181.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <Experience ref={experienceRef} />
      </div>
      <div className={`relative bg-[#f7f7f5]`}>
        <Projects ref={projectsRef} />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path fill="#d1d0cd" fillOpacity="1" d="M0,32L40,32C80,32,160,32,240,74.7C320,117,400,203,480,229.3C560,256,640,224,720,192C800,160,880,128,960,101.3C1040,75,1120,53,1200,69.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
          </path>
        </svg>
      </div>
      <div className={`relative bg-[#f7f7f5]`}>
        <svg 
          className="absolute -top-[1px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path fill="#d1d0cd" fillOpacity="1" d="M0,64L34.3,85.3C68.6,107,137,149,206,170.7C274.3,192,343,192,411,186.7C480,181,549,171,617,192C685.7,213,754,267,823,288C891.4,309,960,299,1029,288C1097.1,277,1166,267,1234,266.7C1302.9,267,1371,277,1406,282.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
        <Skills ref={skillsRef} />
      </div>
      <div className={`relative bg-[#f7f7f5]`}>
        <Contact ref={contactRef} />
      </div>
    </motion.div>
  )
}