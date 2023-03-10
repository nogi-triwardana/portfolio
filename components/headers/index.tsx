import React, { useState, useRef, useContext } from 'react';
import _ from 'lodash';
import { LayoutContext } from 'src/static/context';

export default function Header() {
	const { headers_title } = useContext(LayoutContext);

	return (   
		<div className={`flex justify-center w-full bg-transparent p-12 h-16`}>
				<ul className={`flex space-x-4 text-xl font-semibold text-paletteText-primary`}>
						{_.map(headers_title, (item: any, key: any) => (
							<li 
								key={key}
								className="cursor-pointer"
							>
								{item}
							</li>													
						))}
				</ul>
		</div>
	);
}
