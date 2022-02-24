import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const Book = ({
  cover_image,
  id,
  title,
  author,
  everage_rate,
  reviews,
  option,
}) => {
  const settings = {
    starRatedColor: '#fa722e',
    numberOfStars: 5,
    rating: Number(everage_rate),
    starDimension: '11px',
    starSpacing: '0',
  };

  const navigate = useNavigate();

  const bookDetail = id => {
    navigate(`/productDetail/${id}`);
  };

  return option === 'starRating' ? (
    <BookContainer
      onClick={() => {
        bookDetail(id);
      }}
    >
      <RatingBookImg src={cover_image} alt={`ratingBook${id}`} />
      <BookContainer>
        <Rank>{id}</Rank>
        <RatingBookInfoBox>
          <RatingBookInfo>{title}</RatingBookInfo>
          <RatingBookInfo>{author}</RatingBookInfo>
          <ReviewNum>리뷰 {reviews}건</ReviewNum>
          <StarRatings {...settings} />
          <RatingNum>{everage_rate}</RatingNum>
        </RatingBookInfoBox>
      </BookContainer>
    </BookContainer>
  ) : (
    <BookContainer
      onClick={() => {
        bookDetail(id);
      }}
    >
      <BasicBookImg src={cover_image} alt={`basicBook${id}`} />
      <BookContainer>
        <Rank>{id}</Rank>
        <BasicBookInfoBox>
          <BasicBookInfo>{title}</BasicBookInfo>
          <BasicBookInfo>{author}</BasicBookInfo>
        </BasicBookInfoBox>
      </BookContainer>
    </BookContainer>
  );
};

export default Book;

const RatingBookImg = styled.img`
  width: 80px;
  height: 120px;
`;

const BookContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Rank = styled.p`
  margin: 0 15px;
  font-size: 18px;
  font-weight: 700;
`;

const RatingBookInfo = styled.p`
  margin-bottom: 7px;

  &:nth-child(1) {
    font-weight: 600;
    font-size: 15px;
  }

  &:nth-child(2) {
    color: #6e777d;
    font-size: 14px;
  }
`;

const RatingNum = styled.span`
  margin-left: 5px;
  color: #999999;
  font-size: 11px;
`;

const ReviewNum = styled.p`
  color: #999999;
  font-size: 11px;
`;

const RatingBookInfoBox = styled.div`
  margin-top: 12px;
`;

const BasicBookInfoBox = styled.div`
  line-height: 25px;
`;

const BasicBookImg = styled.img`
  width: 50px;
  height: 70px;
`;

const BasicBookInfo = styled.p`
  font-size: 14px;

  &:nth-child(1) {
    font-weight: 600;
  }

  &:nth-child(2) {
    color: #6e777d;
  }
`;
