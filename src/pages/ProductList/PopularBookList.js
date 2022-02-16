import React from 'react';
import styled from 'styled-components';

const PopularBookList = () => {
  return (
    <BookContainer>
      <SetImg src="/images/Main/map.jpg" />
      <BookContainer>
        <Rank>1</Rank>
        <SetAlign>
          <BookInfo>해리포터 시리즈 개정 번역판</BookInfo>
          <BookInfo>조앤 K 롤링</BookInfo>
        </SetAlign>
      </BookContainer>
    </BookContainer>
  );
};

export default PopularBookList;

const SetImg = styled.img`
  width: 50px;
  height: 70px;
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

const SetAlign = styled.div`
  line-height: 25px;
`;

const BookInfo = styled.p`
  font-size: 14px;
  &:nth-child(1) {
    font-weight: 600;
  }
  &:nth-child(2) {
    color: #6e777d;
  }
`;
