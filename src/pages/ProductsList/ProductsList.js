import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Banner from './Banner';
import IconList from './IconList';
import BookCarousel from './BookCarousel';
import BookList from './BookList';

const ProductsList = () => {
  return (
    <ProductsListContainer>
      <Banner marginBottom="30px" />
      <IconList marginBottom="30px" />
      <FirstTitleBlackBox>
        <SecondTitleBlackBox>
          <WhiteTitle to="/">베스트셀러 &gt; </WhiteTitle>
        </SecondTitleBlackBox>
      </FirstTitleBlackBox>
      <BookCarousel className="test" backgroundColor="black" color="white" />
      <FirstTitleWhiteBox>
        <SecondTitleWhiteBox>
          <BlackTitle to="/">오늘, DSNB의 발견 &gt; </BlackTitle>
        </SecondTitleWhiteBox>
      </FirstTitleWhiteBox>
      <FirstTitleWhiteBox>
        <BookList />
      </FirstTitleWhiteBox>
      <FirstTitleWhiteBox>
        <SecondTitleWhiteBox>
          <BlackTitle to="/">지금 많이 읽고 있는 책 &gt; </BlackTitle>
        </SecondTitleWhiteBox>
      </FirstTitleWhiteBox>
      <BookCarousel />
      <FirstTitleWhiteBox>
        <SecondTitleWhiteBox>
          <BlackTitle to="/">화제의 책 &gt; </BlackTitle>
        </SecondTitleWhiteBox>
      </FirstTitleWhiteBox>
      <FirstTitleWhiteBox>
        <BookList option="starRating" />
      </FirstTitleWhiteBox>
      <FirstTitleWhiteBox>
        <SecondTitleWhiteBox>
          <BlackTitle to="/">MD's PICK &gt; </BlackTitle>
        </SecondTitleWhiteBox>
      </FirstTitleWhiteBox>
      <BookCarousel />
      <FirstTitleWhiteBox>
        <SecondTitleWhiteBox>
          <BlackTitle to="/">DSNB 추천도서 &gt; </BlackTitle>
        </SecondTitleWhiteBox>
      </FirstTitleWhiteBox>
      <BookCarousel option="starRating" />
    </ProductsListContainer>
  );
};

const ProductsListContainer = styled.div`
  margin-bottom: 150px;
  overflow: hidden;
`;

const FirstTitleWhiteBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const SecondTitleBlackBox = styled.div`
  width: 970px;
`;

const FirstTitleBlackBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 35px;
  background-color: black;
`;

const SecondTitleWhiteBox = styled.div`
  width: 970px;
`;

const BlackTitle = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
`;

const WhiteTitle = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

export default ProductsList;
