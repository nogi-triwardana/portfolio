import React, { useState, useRef, useContext } from 'react';
import _ from 'lodash';
import { LayoutContext } from 'src/static/context';

type TypeProps = {
	scrollSection?: React.MouseEventHandler
};

export default function Header({ scrollSection }: TypeProps): JSX.Element {
	const { headers_title } = useContext(LayoutContext);

	return (   
		<div className={`flex justify-center w-full bg-[#f7f7f5] z-[9999] sticky top-0 p-12 h-16`}>
				<ul className={`flex space-x-4 text-xl font-semibold text-paletteText-primary`}>
						{_.map(headers_title, (item: any, key: any) => (
							<li 
								key={key}
								className="cursor-pointer"
								onClick={scrollSection}
							>
								{item}
							</li>													
						))}
				</ul>
		</div>
	);
}
