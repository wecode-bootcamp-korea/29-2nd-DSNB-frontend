import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const BestSellerList = () => {
  return (
    <BookContainer>
      <SetImg src="/images/Main/map.jpg" />
      <BookContainer>
        <Rank>1</Rank>
        <Align>
          <BookInfo>물고기는 존재하지 않는다</BookInfo>
          <BookInfo>룰루 밀러</BookInfo>
          <ReviewNum>리뷰 10건</ReviewNum>
          <StarRatings {...settings} />
          <RatingNum>4.7 </RatingNum>
        </Align>
      </BookContainer>
    </BookContainer>
  );
};
export default BestSellerList;
const settings = {
  starRatedColor: '#fa722e',
  numberOfStars: 5,
  // name: 'rating',
  rating: 4.203, //유동적
  starDimension: '11px',
  starSpacing: '0',
};

const SetImg = styled.img`
  width: 80px;
  height: 120px;
`;
const BookContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Rank = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0 15px;
`;

const BookInfo = styled.p`
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

// const StyledStar = styled(StarRatings)`
//   width: 50px;
//   height: 10px;
// `;

const RatingNum = styled.span`
  margin-left: 5px;
  font-size: 11px;
  color: #999999;
`;
const ReviewNum = styled.p`
  font-size: 11px;
  color: #999999;
`;

const Align = styled.div`
  margin-top: 12px;
`;
