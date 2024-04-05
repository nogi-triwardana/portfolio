import React, { Fragment } from 'react';
import styled from 'styled-components';

import ImgKahuripan1 from '../../../../public/assets/img/projects/kahuripan/kahuripan_1.png';
import ImgKahuripan2 from '../../../../public/assets/img/projects/kahuripan/kahuripan_2.png';
import ImgKahuripan3 from '../../../../public/assets/img/projects/kahuripan/kahuripan_3.png';

const ImageKahuripan1 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 30}%)`
  }
}))`
  position: absolute;
  top: 225vh;
  height: 40vh;
  left: 0px;
`;

const ImageKahuripan2 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 20}%)`
  }
}))`
  position: absolute;
  top: 230vh;
  height: 40vh;
  left: 8vw;
`;

const ImageKahuripan3 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 10}%)`
  }
}))`
  position: absolute;
  top: 235vh;
  height: 40vh;
  left: 0vw;
`;

const KahuripanImages = ({ scrollPercent, index, boxHeight, screenHeight, scrollHeight }: any) => {
  // const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  // const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  // const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  // scrollPercent -= scrollOffsetInPercent;

  return (
    <div className="relative h-screen">
      <ImageKahuripan1
        src={ImgKahuripan1.src}
        scroll={scrollPercent}
      />
      <ImageKahuripan2
        src={ImgKahuripan2.src}
        scroll={scrollPercent}
      />
      <ImageKahuripan3
        src={ImgKahuripan3.src}
        scroll={scrollPercent}
      />
    </div>
  )
};

export default KahuripanImages;