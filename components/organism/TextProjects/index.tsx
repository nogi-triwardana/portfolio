import React, { useContext, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { LayoutContext } from 'src/static/context';

const appearText = () => keyframes`
0%{
  color: #FFF;
}
100%{
  color: #dce3de;
}
`;

const revBlock = () => keyframes`
0%{
    left: 0;
    width: 0%
}
50%{
    left:0%;
    width:100%
}
100%{
    left:100%;
    width:0%
}
`;

let BlockTextReveal: any = styled.span`
`;

// const BlockTextRevealQuick: any = styled.span`
// display: ${(props: any) => (props.inline ? 'inline' : 'block')}
// color: #FFF;
// position: relative;
// animation-delay: 0.5s;
// animation: ${(props: any) => 
//   props.refresh && css`
//     ${revBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards
//   `}
// `;

const BlockTextRevealQuick: any = styled.span`
display: ${(props: any) => (props.inline ? 'inline' : 'block')},
color: #FFF;
animation: ${appearText} 1s linear forwards;
animation-delay: 0s;
position: relative;

&::after {
  content: '';
  top:0;
  left:0;
  position:absolute;
  width:0%;
  height:100%;
  background: #941818;
  animation: ${revBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards
  animation-delay:0s;
}
`;

const TextProjects = ({ slideNumber }: any) => {
  const { projects, isDarkMode }: any = useContext(LayoutContext);
  const [refreshToggle, setRefreshToggle] = useState(false);

  const refreshSlide = () => {
    console.log("HIT")
    BlockTextReveal = BlockTextRevealQuick;
    setTimeout(() => setRefreshToggle(false), 300);
    // setRefreshToggle(false)
  } 

  console.log("refreshToggle > ", refreshToggle);

  useEffect(() => {
    if(refreshToggle) {
      refreshSlide();
    }
  }, [refreshToggle]);

  useEffect(() => {
    setRefreshToggle(true);
  }, [slideNumber]);

  return (
    <div className={`flex flex-col px-4 py-16 w-1/2 h-screen mx-auto justify-between sticky top-0 left-0 ${isDarkMode ? `text-[#dce3de]` : `text-paletteText-primary`}`}>
      <div className={`flex justify-start text-3xl font-bold`}>
        <span className={`relative`}>
          <span className={`${!refreshToggle ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} w-full h-full absolute`}`} />
          {projects[slideNumber].number}
        </span>
      </div>
      <div className={`flex flex-col justify-start space-y-4 h-[50vh]`}>
        <div className={`relative inline-block font-bold text-3xl`}>
          <span className={`${!refreshToggle ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} w-full h-full absolute inline`}`} />
          {projects[slideNumber].title}
        </div>
        <div className={`text-xl relative inline-block`}>
          <span className={`${!refreshToggle ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} w-full h-full absolute inline`}`} />
          {projects[slideNumber].description}
        </div>
        {projects[slideNumber].responsibilities.length > 0 && (
          <>
            <div className={`relative inline-block text-base sm:text-lg`}>
            <span className={`${!refreshToggle ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
              Responsibilites:
            </div>
            <ul className={`text-lg`}>
              {projects[slideNumber].responsibilities.map((el: string) => (
                <li
                  className={`relative inline-block text-sm sm:text-base min-w-full sm:min-w-[500px]`}
                >
                  <div className={`${!refreshToggle ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
                  &bull; {el}
                </li>
              ))}
            </ul>
          </>
        )}
        {projects[slideNumber].technologies && (
          <div className={`text-lg`}>
            <div className={``}>
              <div className={`relative inline-block text-sm sm:text-base`}>
              <span className={`${!refreshToggle ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`} />
                Technologies: 
              </div>
            </div>
            <div>
              <span className={`relative inline-block text-sm sm:text-base`}>
                <span className={`${!refreshToggle ? `animate-scanning` : `${isDarkMode ? `bg-[#dce3de]` : `bg-paletteText-primary`} w-full h-full absolute`}`} />
                {projects[slideNumber].technologies}
              </span>
            </div>
          </div>
        )}
      </div>
      <div />
    </div>
  )
}

export default TextProjects;