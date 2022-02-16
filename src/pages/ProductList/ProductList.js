import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainBanner from './MainBanner';
import IconList from './IconList';
import BookCarousel from './BookCarousel';
import PopularBooks from './PopularBooks';
import BestSellerCarousel from './BestSellerCarousel';
import BestSellers from './BestSellers';

const ProductList = () => {
  return (
    <Main>
      <MainBanner marginBottom="30px" />
      <IconList marginBottom="30px" />

      <Align3>
        <Align2>
          <ThemeTitle2 to="/">베스트셀러 &gt; </ThemeTitle2>
        </Align2>
      </Align3>

      <BookCarousel backgroundColor="black" color="white" />
      <Align>
        <Align4>
          <ThemeTitle to="/">베스트셀러 &gt; </ThemeTitle>
        </Align4>
      </Align>
      <Align>
        <PopularBooks />
      </Align>

      <Align>
        <Align4>
          <ThemeTitle to="/">베스트셀러 &gt; </ThemeTitle>
        </Align4>
      </Align>
      <BookCarousel />

      <Align>
        <Align4>
          <ThemeTitle to="/">베스트셀러 &gt; </ThemeTitle>
        </Align4>
      </Align>
      <Align>
        <BestSellers />
      </Align>
      <Align>
        <Align4>
          <ThemeTitle to="/">베스트셀러 &gt; </ThemeTitle>
        </Align4>
      </Align>
      <BookCarousel />
      <Align>
        <Align4>
          <ThemeTitle to="/">베스트셀러 &gt; </ThemeTitle>
        </Align4>
      </Align>
      <BookCarousel />
      <Align>
        <Align4>
          <ThemeTitle to="/">베스트셀러 &gt; </ThemeTitle>
        </Align4>
      </Align>
      <BestSellerCarousel />
    </Main>
  );
};

// const settings={

// }

const Main = styled.div`
  /* width: 100%;
  height: 100%; */
`;

const Align = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
const Align2 = styled.div`
  width: 970px;
  background-color: black;
`;
const Align3 = styled.div`
  padding-top: 35px;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: black;
`;
const Align4 = styled.div`
  width: 970px;
`;

const ThemeTitle = styled(Link)`
  font-size: 20px;
  /* margin-left: 16vw; */
  text-decoration: none;
  color: black;
`;

const ThemeTitle2 = styled(Link)`
  font-size: 20px;
  /* margin-left: 16vw; */
  text-decoration: none;
  color: white;
`;

export default ProductList;
