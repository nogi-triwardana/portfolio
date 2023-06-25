import React, { useState, useEffect, useRef } from 'react';
import FadeWhenVisible from 'components/wrapper/fader';
import { FaBeer } from 'react-icons/fa';
import { BsFillAirplaneFill } from 'react-icons/bs';

export default function Projects() {

	const [firstPort, setFirstPort] = useState(false);
	const firstRef = useRef(null);
	const option = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	};

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
			<div className={`flex flex-col justify-center w-full space-y-16 relative py-16`}>
				<div className={`h-14 text-paletteText-primary font-bold text-center text-3xl`} ref={firstRef}>
					<span className="relative">
						<span className={`${firstPort ? `animate-scanning` : `bg-paletteText-primary w-full h-full absolute`}`} />
						Projects
					</span>
				</div>
				<div className={`flex flex-col w-full h-[400px] mx-auto justify-center text-paletteText-primary`}>
					<div className={`flex flex-row h-full justify-center`}>
						<span className={`w-1/2 relative`}>
							<span className={`bg-paletteText-primary absolute inline w-full h-full`} />
							Create landing divage website with system of recommendation for user with using algorithm of collaborative filtering
						</span>
					</div>
				</div>
			</div>		
	);
}