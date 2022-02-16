import React from 'react';
import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BookCarousel = ({ backgroundColor, color }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <Align backgroundColor={backgroundColor}>
      <div style={{ position: 'relative' }}>
        <StyledSlider {...settings} backgroundColor={backgroundColor}>
          {arr.map((index, i) => {
            return (
              <>
                <Imgs
                  key={i}
                  src="https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
                <BookInfo color={color}>해리포터 개정 번역판</BookInfo>
                <BookInfo>조앤 K 롤링</BookInfo>
              </>
            );
          })}
        </StyledSlider>
      </div>
    </Align>
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const StyledSlider = styled(Slider)`
  background-color: ${props => props.backgroundColor};
  .slick-slider {
    display: flex;
    align-items: center;
  }
  /* position: absolute;
  bottom: -40px; */
  /* background-color: red; */
  .slick-list {
    /* justify-content: center; */
    top: 28px;
    width: 1000px;
    height: 290px;
    padding-left: 27px;
    margin-bottom: 20px;
  }
  .slick-track {
    /* top: 100px; */
  }

  .slick-slide {
    display: flex;
    align-items: center;

    /* div {
      width: 150px;
      height: 200px;
    } */
  }

  img {
    /* width: 100%;
    height: 100%; */
    width: 150px;
    height: 200px;
  }

  .slick-arrow.slick-prev {
    left: -60px;
    z-index: 1000;
    &::before {
      font-size: 50px;
      line-height: 0.5;
      color: ${props => props.color};
    }
  }

  .slick-arrow.slick-next {
    right: -30px;
    &::before {
      font-size: 50px;
      line-height: 0.5;
      color: ${props => props.color};
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
  width: 100vw;
  margin-bottom: 40px;
  background-color: ${props => props.backgroundColor};
`;

// const SetImg = styled.img`
//   width: 1280px;
//   height: auto;
// `;

const BookInfo = styled.p`
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  &:nth-child(2) {
    font-weight: 600;
    margin-top: 10px;
    color: ${props => props.color};
  }
  &:last-child {
    color: #6e777d;
  }
`;

// const BookInfo = styled.p
//   font-size: 14px;
//   &:nth-child(1) {
//     font-weight: 600;
//   }
//   &:nth-child(2) {
//     color: #6e777d;
//   }
// `;

// const ThemeTitle = styled(Link)`
//   font-size: 20px;
//   margin-left: 221px;
//   text-decoration: none;
//   color: black;
//   /* padding: 20px; */
// `;
export default BookCarousel;
