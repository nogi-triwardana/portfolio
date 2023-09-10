import React, { useState, useRef, useContext } from 'react';
import _ from 'lodash';
import { LayoutContext } from 'src/static/context';
import Switch from "react-switch";
import { BsSun, BsMoonStars } from "react-icons/bs";

type TypeProps = {
	scrollSection?: React.MouseEventHandler
};

export default function Header({ scrollSection }: TypeProps): JSX.Element {
	const { headers_title, isDarkMode, setIsDarkMode } = useContext(LayoutContext);
	const [switchDarkMode, setSwitchDarkMode] = useState(false);	

	return (   
		<div className={`flex justify-between w-full ${isDarkMode ? `bg-[#424543]` : `bg-[#f7f7f5]`} z-[9999] sticky top-0 p-4 h-16 shadow-lg`}>
				<div className=""></div>
				<ul className={`flex space-x-4 text-lg font-semibold ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}>
					{_.map(headers_title, (item: any, key: any) => (
						<li 
							key={key}
							className={`cursor-pointer`}
							onClick={scrollSection}
						>
							{item}
						</li>													
					))}
				</ul>
				<div className="">
					<Switch 
						checked={isDarkMode} 
						onChange={() => setIsDarkMode(!isDarkMode)} 
						className='flex items-center justify-center border border-[#f7f7f5]'
						checkedIcon={
							<div className="flex items-center justify-center h-full">
								<BsMoonStars className='flex items-center justify-center self-center text-lg text-center text-white' />
							</div>
						}
						uncheckedIcon={
							<div className="flex items-center justify-center h-full">
								<BsSun className='flex items-center justify-center self-center text-lg text-center text-[#a9bf17]' />
							</div>
						}
						onColor='#4287f5'
						offColor='#fff'
						offHandleColor='#d3d4cd'
						boxShadow='shadow-lg'
					/>
				</div>
		</div>
	);
}
