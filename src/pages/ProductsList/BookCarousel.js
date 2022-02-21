import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarRatings from 'react-star-ratings';
import { URL } from './config';

const BookCarousel = ({ className, backgroundColor, color, option }) => {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}/books/page?limit=11`)
      .then(res => res.json())
      .then(res => {
        setBookList(res.result);
      });
  }, []);
  const bookDetail = id => {
    navigate(`/productDetail/${id}`);
  };
  return option === 'starRating' ? (
    <CarouselContainer>
      <SliderBox>
        <RatingSlider {...settings}>
          {bookList.map((book, i) => {
            return (
              <div key={i}>
                <Imgs
                  onClick={() => {
                    bookDetail(book.id);
                  }}
                  src={book.cover_image}
                  alt={`ratingBook${i + 1}`}
                />
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
        </RatingSlider>
      </SliderBox>
    </CarouselContainer>
  ) : (
    <CarouselContainer backgroundColor={backgroundColor}>
      <SliderBox>
        <BasicSlider
          className={className}
          {...settings}
          backgroundColor={backgroundColor}
        >
          {bookList.map((book, i) => {
            return (
              <div key={i + 1}>
                <Imgs
                  onClick={() => {
                    bookDetail(book.id);
                  }}
                  src={book.cover_image}
                  alt={`basicBook${i + 1}`}
                />
                <BookInfo color={color}>{book.title}</BookInfo>
                <BookInfo>{book.author}</BookInfo>
              </div>
            );
          })}
        </BasicSlider>
      </SliderBox>
    </CarouselContainer>
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

const settings2 = {
  starRatedColor: '#fa722e',
  numberOfStars: 5,
  rating: 4.203, //유동적
  starDimension: '11px',
  starSpacing: '0',
};

const BasicSlider = styled(Slider)`
  .slick-slider {
    display: flex;
    align-items: center;
  }

  .slick-list {
    width: 1000px;
    height: 290px;
    top: 28px;
    margin-bottom: 20px;
    padding-left: 27px;
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
      color: black;
      font-size: 50px;
      line-height: 0.5;
    }
  }
`;

const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Imgs = styled.img`
  width: 100px;
  height: 200px;
  box-shadow: 5px 5px 5px gray;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-bottom: 40px;
  background-color: ${props => props.backgroundColor};

  .test {
    img {
      box-shadow: 5px 5px 5px #878787;
    }
    .slick-arrow {
      &::before {
        color: white;
      }
    }
  }
`;

const SliderBox = styled.div`
  position: relative;
`;

const BookInfo = styled.p`
  text-align: center;
  line-height: 20px;
  font-size: 14px;

  &:nth-child(2) {
    margin-top: 15px;
    color: ${props => props.color};
    font-weight: 600;
  }
  &:last-child {
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

const RatingSlider = styled(Slider)`
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

export default BookCarousel;
