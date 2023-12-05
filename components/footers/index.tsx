import React, { useContext} from 'react';
import { LayoutContext } from 'src/static/context';

export default function Footer() {
	const { contact, isDarkMode } = useContext(LayoutContext);

	return (
		<div className={`${isDarkMode ? `bg-[#424543]` : `bg-[#f7f7f5]`} text-sm flex flex-col itens-center self-center justify-center text-center py-4`}>
			<div className={`${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}>
				&copy; Copyright 2023.
			</div>
			<div className={`${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}>
				All rights reserverd. Made with {`</>`} by Nogi
			</div>
		</div>
	)
};