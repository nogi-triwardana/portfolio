import React, { useState, useEffect, useRef, useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
import FadeWhenVisible from 'components/wrapper/fader';
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

		if(firstRef.current) observer.observe(firstRef.current);

		return () => {
			if(firstRef.current) observer.unobserve(firstRef.current)
		}

	},[firstRef, option]);

	return (
			<div className={`flex flex-col justify-center w-full space-y-16 relative py-16`} ref={ref}>
				<div className={`h-14 text-paletteText-primary font-bold text-center text-3xl`} ref={firstRef}>
					<span className="relative">
						<span className={`${firstPort ? `animate-scanning` : `bg-paletteText-primary w-full h-full absolute rounded-full`}`} />
						Projects
					</span>
				</div>
				<div className={`flex flex-col w-1/2 h-[400px] mx-auto justify-start text-paletteText-primary`}>
					<div className={`flex flex-col space-y-4 justify-center`}>
						{
							_.map(
								projects,
								(item: any, key: any) => (
									<div className={`space-y-2`} key={"PROJECT-" + key}>
										<div className={`font-bold text-lg`}>
											<div className={`relative inline-block`}>
												<span className={`${firstPort ? `animate-scanning` : `bg-paletteText-primary absolute rounded-md inline w-full h-full`}`} />
												{key + 1}. {item?.title}
											</div>
										</div>
										<div className={`relative inline-block`}>
											<span className={`${firstPort ? `animate-scanning` : `bg-paletteText-primary absolute rounded-md inline w-full h-full`}`} />
											{item?.description}
										</div>
									</div>
								)
							)
						}
					</div>
				</div>
			</div>		
	);
}

export default forwardRef(Projects);