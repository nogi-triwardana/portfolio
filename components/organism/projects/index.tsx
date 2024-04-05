import React, { useState, useEffect, useRef, useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
import FadeWhenVisible from 'components/organism/fader';
import { FaBeer } from 'react-icons/fa';
import { BsFillAirplaneFill } from 'react-icons/bs';

function Projects(props: any, ref: any) {

	const [firstPort, setFirstPort] = useState(false);
	const firstRef = useRef(null);
	const option = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	};
	const { projects, isDarkMode } = useContext(LayoutContext);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const [ entry ] = entries;
			if(entry.isIntersecting) setFirstPort(true);

		}, option);

		if(firstRef?.current) observer.observe(firstRef?.current);

		return () => {
			if(firstRef?.current) observer.unobserve(firstRef?.current)
		}

	},[firstRef, option]);

	return (
		<div className={`relative ${isDarkMode ? `bg-dark-900` : `bg-light-900`}`}>
    	<div className={`flex flex-col justify-center w-full space-y-8 sm:space-y-16 relative py-16`} ref={ref}>
				<div className={`h-14 ${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`} ref={firstRef}>
					<span className="relative">
						<span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} w-full h-full absolute rounded-full`}`} />
						Projects
					</span>
				</div>
				<div className={`flex flex-col p-4 w-auto sm:w-2/3 mx-auto justify-start ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}>
					<div className={`flex flex-col space-y-4 justify-center`}>
						{
							_.map(
								projects,
								(item: any, key: any) => (
									<div className={`space-y-2`} key={"PROJECT-" + key}>
										<div className={`font-bold text-base sm:text-lg`}>
											<div className={`relative inline-block`}>
												<span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
												{key + 1}. {item?.title}
											</div>
										</div>
										<div className={`relative inline-block text-sm sm:text-base`}>
											<span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
											{item?.description}.
										</div>
										{!_.isEmpty(item?.responsibilities) && (
											<div className={``}>
												<div className={`relative inline-block text-sm sm:text-base`}>
													<span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
													Responsibilites:
												</div>
												<ul>
													{_.map(
														item?.responsibilities,
														(val: any, key: any) => (
															<li 
																key={'responsibilities-'+key}
																className={`relative inline-block text-sm sm:text-base min-w-full sm:min-w-[500px]`}
															>
																<div className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
																&bull; {val}
															</li>
														)
													)}
												</ul>
											</div>
										)}
										{!_.isEmpty(item?.technologies) && (
											<div className={``}>
												<div className={`relative inline-block text-sm sm:text-base`}>
													<span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
													Technologies:
												</div>
												<div>
													<div 
														className={`relative inline-block text-sm sm:text-base`}
													>
														<span className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
														{item?.technologies}
													</div>
												</div>
											</div>
										)}
									</div>
								)
							)
						}
					</div>
				</div>
			</div>
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 1440 320"
			>
				<path fill={`${isDarkMode ? `#1f0a4d` : `#d1d0cd`}`} fillOpacity="1" d="M0,32L40,32C80,32,160,32,240,74.7C320,117,400,203,480,229.3C560,256,640,224,720,192C800,160,880,128,960,101.3C1040,75,1120,53,1200,69.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
				</path>
			</svg>
		</div>
	);
}

export default forwardRef(Projects);