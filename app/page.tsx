'use client';

import { motion } from 'framer-motion'
import Header from 'components/headers'
import Introduction from 'components/partials/introduction'
import Experience from 'components/partials/experience'
import Projects from 'components/partials/projects'

export default function Home({ data }: any) {

  return (
    <motion.div
      transition={{ delay: 1 }}
    >
      <div className={`relative bg-[#f7f7f5]`}>
        <Header />
        <Introduction />
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
        <Projects />
      </div>
      <Experience />
      <Experience />
      <Experience />
    </motion.div>
  )
}