import React, { Fragment } from 'react';
import styled from 'styled-components';

import ImgOlShoes1 from '../../../../public/assets/img/projects/ol-shoes/ol-shoes-1.png';
import ImgOlShoes2 from '../../../../public/assets/img/projects/ol-shoes/ol-shoes-2.png';
import ImgOlShoes3 from '../../../../public/assets/img/projects/ol-shoes/ol-shoes-3.png';
import ImgOlShoes4 from '../../../../public/assets/img/projects/ol-shoes/ol-shoes-4.png';
import ImgOlShoes5 from '../../../../public/assets/img/projects/ol-shoes/ol-shoes-5.png';

const ImageOlShoes1 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 30}%)`
  }
}))`
  position: absolute;
  top: 225vh;
  height: 40vh;
  left: 0px;
`;

const ImageOlShoes2 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 30}%)`
  }
}))`
  position: absolute;
  top: 390vh;
  height: 80vh;
  left: 8vw;
`;

const ImageOlShoes3 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 30}%)`
  }
}))`
  position: absolute;
  top: 550vh;
  height: 100vh;
  left: 0px;
`;

const ImageOlShoes4 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 30}%)`
  }
}))`
  position: absolute;
  top: 580vh;
  height: 80vh;
  left: 8vw;
`;

const ImageOlShoes5 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 30}%)`
  }
}))`
  position: absolute;
  top: 770vh;
  height: 100vh;
  left: 0px;
`;

const OlShoesImages = ({ scrollPercent, index, boxHeight, screenHeight, scrollHeight }: any) => {
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  scrollPercent -= scrollOffsetInPercent;
  // console.log("screenHeight >", screenHeight);

  return (
    <div className="relative h-screen">
      <ImageOlShoes1
        src={ImgOlShoes1.src}
        scroll={scrollPercent}
      />
      <ImageOlShoes2
        src={ImgOlShoes2.src}
        scroll={scrollPercent}
      />
      <ImageOlShoes3
        src={ImgOlShoes3.src}
        scroll={scrollPercent}
      />
      <ImageOlShoes4
        src={ImgOlShoes4.src}
        scroll={scrollPercent}
      />
      <ImageOlShoes5
        src={ImgOlShoes5.src}
        scroll={scrollPercent}
      />
    </div>
  );
}

export default OlShoesImages;