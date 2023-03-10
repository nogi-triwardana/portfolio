import React, { useContext } from 'react';
import { LayoutContext } from 'src/static/context';
import PasPhoto from 'public/assets/img/pas_photo.jpg';

export default function Introduction() {
  const { identity, setIsDarkMode, isDarkMode } = useContext(LayoutContext);

  return (
    <div className={`grid grid-cols-2 w-full p-8 relative`}>
      <div className={`flex justify-end w-full`}>
        <img src={PasPhoto.blurDataURL} className={`w-64 h-64 rounded-full`} />
      </div>
      <div className={`text-xl text-paletteText-primary ml-8 space-y-2 font-semibold items-start flex flex-col justify-center`}>
        <h1>{identity?.name}</h1>
        <h1>{identity?.role}</h1>
				<p className={`text-sm font-medium whitespace-pre-line`}>{identity?.desc}</p>
      </div>
    </div>
  );
}