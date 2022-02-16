import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mainbanner = ({ marginBottom }) => {
  const [datas, setDatas] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [countryBook, setCountryBook] = useState([]);

  useEffect(() => {
    fetch('/data/mainInfo.json')
      .then(res => res.json())
      .then(res => {
        setDatas(res);
      });
  }, []);

  return (
    <Align marginBottom={marginBottom}>
      <div style={{ position: 'relative' }}>
        <SetImg src="/images/Main/map4.png" />
        {datas.map(data => {
          return (
            <PointCountry
              key={data.id}
              src="/images/Main/point.png"
              top={data.top}
              left={data.left}
              onClick={() => {
                setCountryName(data.country);
                setCountryBook(data.img);
              }}
            />
          );
        })}

        {/* <Europe src="/images/Main/point.png" />
        <Russia src="/images/Main/point.png" />
        <America src="/images/Main/point.png" />
        <Korea src="/images/Main/point.png" /> */}
        <Title>{countryName}</Title>
        <StyledSlider {...settings}>
          {countryBook.map((book, i) => {
            return <Imgs key={i} src={book} />;
          })}
        </StyledSlider>
      </div>
    </Align>
  );
};

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 7,
  centerMode: true,
};

const StyledSlider = styled(Slider)`
  position: absolute;
  bottom: -20px;

  .slick-list {
    width: 100vw;
    height: 390px;
  }

  .slick-track {
    top: 100px;
  }

  .slick-slide {
    display: flex;
    align-items: center;
  }

  img {
    width: 150px;
    height: 200px;
    /* z-index: 999; */
  }

  .slick-arrow.slick-prev {
    left: 17%;
    z-index: 1000;
    &::before {
      font-size: 50px;
      line-height: 0.5;
    }
  }

  .slick-arrow.slick-next {
    right: 26%;
    &::before {
      font-size: 50px;
      line-height: 0.5;
    }
  }
`;

const Imgs = styled.img`
  width: 100px;
  height: 200px;
`;

const Align = styled.div`
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
  margin-bottom: ${props => props.marginBottom};
`;

const SetImg = styled.img`
  width: 100vw;
  height: auto;
`;

const Title = styled.span`
  display: inline;
  font-size: 60px;
  font-weight: 700;
  position: absolute;
  top: 8.5%;
  left: 45%;
  z-index: 1000;
  font-family: 'Song Myung', serif;
`;

const PointCountry = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: ${props => props.top};

  /* ${props =>
    props.top === 'Korean'
      ? '39.5%'
      : props.top === 'Europe'
      ? '33%'
      : props.top === 'Russia'
      ? '11%'
      : props.top === 'America'
      ? '32%'
      : 0}; */
  left: ${props => props.left};
  /*   
  ${props =>
    props.left === 'Korean'
      ? '87.5%'
      : props.left === 'Europe'
      ? '50%'
      : props.left === 'Russia'
      ? '73%'
      : props.left === 'America'
      ? '12.5%'
      : 0}; */
`;

/* const Korea = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 39.5%;
  left: 87.5%;
`;

const Europe = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 33%;
  left: 50%;
`;

const Russia = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 11%;
  left: 73%;
`;

const America = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 32%;
  left: 12.5%;
`; */

// const Button = styled.button`
//   font-size: 40px;
//   font-size: 40px;
//   font-size: 40px;
//   font-size: 40px;
// `;

// const RedBtn = styled(Button)`
//   color: red;
// `;

// const BlueBtn = styled(Button)`
//   color: blue;
// `;

export default Mainbanner;
