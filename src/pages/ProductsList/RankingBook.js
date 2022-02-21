import React from 'react';
import styled from 'styled-components';

const RankingBook = ({ cover_image, id, title, author }) => {
  return (
    <BookContainer>
      <BasicBookImg src={cover_image} />
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

export default RankingBook;

const BookContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Rank = styled.p`
  margin: 0 15px;
  font-size: 18px;
  font-weight: 700;
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
