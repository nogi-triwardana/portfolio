import React, { useContext, forwardRef } from 'react';
import { LayoutContext } from 'src/static/context';
import _ from 'lodash';
import FadeWhenVisible from 'components/wrapper/fader';

function Experience( props: any, ref: React.Ref<HTMLDivElement>) {
  const { experience, isDarkMode } = useContext(LayoutContext);

  return (
		<FadeWhenVisible>
			<div className={`flex flex-col justify-center w-full space-y-16 relative py-16`} ref={ref}>
				<div className={`text-paletteText-primary font-bold text-center text-3xl`}>Experience</div>
				<div className={`flex flex-col w-1/2 mx-auto justify-center text-paletteText-primary`}>
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
										<div className={`relative pb-4 pl-6`}>
											<div className={`absolute -left-2.5 w-4 h-4 ${key === 0 ? `bg-[#0092ac] animate-ping` : `bg-gray-200`} rounded-full`}></div>
											<div className={`absolute -left-2.5 w-4 h-4 ${key === 0 ? `bg-[#0092ac]` : `bg-gray-200`} rounded-full`}></div>
											<div className="flex flex-col">
												<div className={`px-2 ${key === 0 ? `font-bold` : `font-semibold`}`}>{item?.office}</div>
												<div className="flex divide-x-4">
													<div className={`font-medium text-sm px-2`}>{item?.role}</div>
													<div className={`font-medium text-sm px-2`}>{item?.time}</div>
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
  )
}

export default forwardRef(Experience);