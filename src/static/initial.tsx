import Boostrap from 'public/assets/icon/boostrap.svg';
import CSS3 from 'public/assets/icon/css3.svg';
import Html5 from 'public/assets/icon/html5.svg';
import NextJs from 'public/assets/icon/nextjs.svg';
import ReactJs from 'public/assets/icon/reactjs.svg';
import TailwindCss from 'public/assets/icon/tailwindcss.png';
import Typescript from 'public/assets/icon/typescript.svg';

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaWhatsappSquare } from 'react-icons/fa';

export const initialValue = {
  headers_title: [
    "Home",
    "Experience",
    "Projects",
    "Skills",
    "Contact"
  ],
  identity: {
    name: 'Nogi Ragil Triwardana',
    role: 'Frontend Developer',
		desc: `
			Fullstack developer with two years
			of experience working with
			Javascript, HTML/CSS, PHP and
			MySQL to serve customers. Adapt at
			contributing to highly collaborative
			work environment, finding
			solutions, and accentuating
			customer satisfaction.
		`
  },
  education: [
    {
      key: 0,
      school: 'TK Negeri Pembina',
      years: '2004 - 2005'
    },
    {
      key: 1,
      school: 'SD Negeri Percobaan',
      years: '2005 - 2011'
    },
    {
      key: 2,
      school: 'SMP Al - Amanah',
      years: '2011 - 2014'
    },
    {
      key: 3,
      school: 'SMA Negeri 1 Cileunyi',
      years: '2015 - 2017'
    },
    {
      key: 4,
      school: 'Universitas Islam Negeri Sunan Gunung Djati Bandung',
      years: '2017 - 2022'
    },
  ],
  projects: [
    {
      key: 0,
      title: 'Koperasi Kahuripan',
      description: 'Creating generator website for printing several type of letter'
    },
    {
      key: 1,
      title: 'Ol Shoes',
      description: 'I made online shop website for selling shoes product'
    },
    {
      key: 2,
      title: 'Recommendation of Product Catalog',
      description: 'Create landing page website with system of recommendation for user with using algorithm of collaborative filtering'
    },
    {
      key: 3,
      title: 'Invinitee',
      description: 'Build dynamic website for wedding invitation involve landing page and selling generator for creating and sharing invitation to guests'
    },
    {
      key: 4,
      title: 'Survey Form for Student of Informatics Engineering',
      description: 'Create web survey for student of informatics engineering departement of UIN Sunan Gunung Djati Bandung'
    },
    {
      key: 5,
      title: 'Pagii',
      description: 'Create application of attendance for office which are owned by PT.SMOOETS TEKNOLOGI OUTSOURCING'
    },
    {
      key: 6,
      title: 'PadiUMKM',
      description: 'Create E-Commerce platform which are provided by Telkom for buying and selling procurement within scope BUMN.'
    },
  ],
	experience: [
		{
			key: 0,
			office: 'Ibis Hotel Pasteur, Bandung City',
			role: 'IT Support Specialist and Fullstack Developer',
			time: 'November 2020 - Desember 2020',
			desc: ''
		},
		{
			key: 1,
			office: 'Freelance',
			role: 'Fullstack Developer',
			time: 'Maret 2021 - June 2022',
			desc: ''
		},
		{
			key: 2,
			office: 'PT. SMOOETS TEKNOLOGI OUTSOURCING',
			role: 'Frontend Developer',
			time: 'June 2022 - current',
			desc: ''
		}
	],
  skills: [
    {
      title: 'Boostrap',
      image: Boostrap
    },
    {
      title: 'CSS3',
      image: CSS3
    },
    {
      title: 'HTML5',
      image: Html5
    },
    {
      title: 'NextJS',
      image: NextJs
    },
    {
      title: 'ReactJS',
      image: ReactJs
    },
    {
      title: 'TailwindCSS',
      image: TailwindCss
    },
    {
      title: 'Typescript',
      image: Typescript
    },
  ],
  contact: [
    {
      link: 'https://www.instagram.com/nogitriwardana_/',
      icon: <AiFillInstagram />
    },
    {
      link: 'https://www.linkedin.com/in/nogi-ragil-triwardana-a3a66b198/',
      icon: <AiFillLinkedin />
    },
    {
      link: 'https://instagram.com',
      icon: <MdEmail />
    },
    {
      link: 'https://api.whatsapp.com/send/?phone=6285318909969&type=phone_number&app_absent=0',
      icon: <FaWhatsappSquare />
    }
  ]
};