import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { URL } from './config';
import StarRatings from 'react-star-ratings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RatingBookCarousel = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(`${URL}/books/page?limit=11`)
      .then(res => res.json())
      .then(res => {
        setBookList(res.result);
        // console.log(res.result);
      });
  }, []);

  // useEffect(() => {
  //   fetch('/data/mainInfo.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       setBookList(res.result);
  //     });
  // }, []);

  return (
    <CarouselContainer>
      <div style={{ position: 'relative' }}>
        <StyledSlider {...settings}>
          {bookList.map((book, i) => {
            return (
              <div key={i}>
                <Imgs src={book.cover_image} />
                <BookInfo>{book.title}</BookInfo>
                <BookInfo>{book.author}</BookInfo>
                <ReviewNum>리뷰 {book.reviews}건</ReviewNum>
                <RatingBox>
                  <StarRatings {...settings2} />
                  <RatingNum>{book.everage_rate}</RatingNum>
                </RatingBox>
              </div>
            );
          })}
        </StyledSlider>
      </div>
    </CarouselContainer>
  );
};
const settings2 = {
  starRatedColor: '#fa722e',
  numberOfStars: 5,
  rating: 4.203, //유동적
  starDimension: '11px',
  starSpacing: '0',
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
  .slick-slider {
    display: flex;
    align-items: center;
  }

  .slick-list {
    width: 1000px;
    height: 330px;
    padding-left: 27px;
    top: 28px;
  }

  .slick-slide {
    display: flex;
    align-items: center;
  }

  img {
    width: 150px;
    height: 200px;
  }

  .slick-arrow.slick-prev {
    left: -60px;
    z-index: 1000;

    &::before {
      color: black;
      font-size: 50px;
      line-height: 0.5;
    }
  }

  .slick-arrow.slick-next {
    right: -30px;

    &::before {
      font-size: 50px;
      line-height: 0.5;
      color: black;
    }
  }
`;

const Imgs = styled.img`
  width: 100px;
  height: 200px;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookInfo = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 20px;

  &:nth-child(2) {
    margin-top: 10px;
    font-weight: 600;
  }

  &:nth-child(3) {
    color: #6e777d;
  }
`;

const RatingNum = styled.span`
  margin-left: 5px;
  color: #999999;
  font-size: 11px;
`;
const ReviewNum = styled.p`
  padding: 3px 0;
  text-align: center;
  color: #999999;
  font-size: 11px;
`;

const Address = styled(Link)`
  text-decoration: none;
`;

export default RatingBookCarousel;
