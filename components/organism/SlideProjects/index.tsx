import React from 'react';
import styled from 'styled-components';

import ImgOlShoes1 from '../../../public/assets/img/projects/ol-shoes/ol-shoes-1.png';
import ImgOlShoes2 from '../../../public/assets/img/projects/ol-shoes/ol-shoes-2.png';
import ImgOlShoes3 from '../../../public/assets/img/projects/ol-shoes/ol-shoes-3.png';
import ImgOlShoes4 from '../../../public/assets/img/projects/ol-shoes/ol-shoes-4.png';
import ImgOlShoes5 from '../../../public/assets/img/projects/ol-shoes/ol-shoes-5.png';

import ImgEBasa1 from '../../../public/assets/img/projects/ebasa/ebasa-1.png';
import ImgEBasa2 from '../../../public/assets/imgimg/projects/ebasa/ebasa-2.png';
import ImgEBasa3 from '../../../public/assets/img/primgojects/ebasa/ebasa-3.png';
import ImgEBasa4 from '../../../public/assets/img/projeimgcts/ebasa/ebasa-4.png';
import ImgEBasa5 from '../../../public/assets/img/projectsimg/ebasa/ebasa-5.png';

import ImgPadi1 from '../../../public/assets/img/projects/padi/padi_1.png';
import ImgPadi2 from '../../../public/assets/img/projects/padi/padi_2.png';
import ImgPadi3 from '../../../public/assets/img/projects/padi/padi_3.png';
import ImgPadi4 from '../../../public/assets/img/projects/padi/padi_4.png';
import ImgPadi5 from '../../../public/assets/img/projects/padi/padi_5.png';
import KahuripanImages from 'components/molecules/ImageProjects/KahuripanImages';
import OlShoesImages from 'components/molecules/ImageProjects/OlshoesImages';

const ImageKahuripan1 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 30}%)`
  }
}))`
  position: absolute;
  top: 125vh;
  height: 40vh;
  left: 0px;
`;

const ImageKahuripan2 = styled.img.attrs<{ scroll: number }>(({ scroll }) => ({
  style: {
    transform: `translate(0px, -${scroll * 20}%)`
  }
}))`
  position: absolute;
  top: 145vh;
  height: 40vh;
  left: 8vw;
`;

const SlideProjects = ({ scrollPercent, pageSplitTimes, screenHeight, scrollHeight }: any) => {
  const boxHeight = pageSplitTimes * 100;

  return (
    <div className={`h-[900vh] w-1/2 flex flex-col`}>
        <KahuripanImages
          scrollPercent={scrollPercent}
          index={1}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
          boxHeight={boxHeight}
        />
        <OlShoesImages
          scrollPercent={scrollPercent}
          index={2}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
          boxHeight={boxHeight}
        />
    </div>
  )
}

export default SlideProjects;