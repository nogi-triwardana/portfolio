import React, { useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
import FadeWhenVisible from 'components/organism/fader';

function Experience( props: any, ref: React.Ref<HTMLDivElement>) {
  const { experience, isDarkMode } = useContext(LayoutContext);

  return (
		<div className={`relative ${isDarkMode ? `bg-dark-900` : `bg-light-900`} h-screen`}>
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 1440 320"
				className="absolute"
			>
				<path fill={`${isDarkMode ? `#1f0a4d` : `#d1d0cd`}`} fillOpacity="1" d="M0,288L48,256C96,224,192,160,288,117.3C384,75,480,53,576,74.7C672,96,768,160,864,181.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
			</svg>
			<FadeWhenVisible>
				<div className={`flex flex-col justify-center w-full space-y-8 sm:space-y-16 relative py-16`} ref={ref}>
					<div className={`${isDarkMode ? `text-light-800` : `text-paletteText-primary`} font-bold text-center text-2xl sm:text-3xl`}>Experiences</div>
					<div className={`flex flex-col w-auto p-4 sm:w-1/2 mx-auto justify-center ${isDarkMode ? `text-light-800` : `text-paletteText-primary`}`}>
						{
							_.map(
								_.orderBy(experience, ['key'], ['desc']),
								(item: any, key: any) => {
									return (
										<div className={`
											flex divide-x-4 ${key === experience.length - 1 ? 
												`divide-transparent` : `divide-dashed`}
										`} key={'EXPERIENCE-' + key}>
											<div className={``} />
											<div className={`relative pb-4 pl-3 sm:pl-6`}>
												<div className={`absolute -left-2.5 w-4 h-4 ${key === 0 ? `bg-[#0092ac] animate-ping` : `bg-gray-200`} rounded-full`}></div>
												<div className={`absolute -left-2.5 w-4 h-4 ${key === 0 ? `bg-[#0092ac]` : `bg-gray-200`} rounded-full`}></div>
												<div className="flex flex-col">
													<div className={`px-2 text-sm sm:text-base ${key === 0 ? `font-bold` : `font-semibold`}`}>{item?.office}</div>
													<div className="flex divide-x-4">
														<div className={`font-medium text-xs sm:text-sm px-2`}>{item?.role}</div>
														<div className={`font-medium text-xs sm:text-sm px-2`}>{item?.time}</div>
													</div>
												</div>
											</div>
										</div>        
									)
							})
						}
					</div>
				</div>
			</FadeWhenVisible>
		</div>
  )
}

export default forwardRef(Experience);