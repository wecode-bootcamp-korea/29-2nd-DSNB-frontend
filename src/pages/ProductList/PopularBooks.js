import React from 'react';
import styled from 'styled-components';
import PopularBookList from './PopularBookList';

const PopularBooks = () => {
  return (
    <BookList>
      <div>
        <PopularBookList />
        <Line />
        <PopularBookList />
        <Line />
        <PopularBookList />
      </div>
      <div>
        <PopularBookList />
        <Line />
        <PopularBookList />
        <Line />
        <PopularBookList />
      </div>
      <div>
        <PopularBookList />
        <Line />
        <PopularBookList />
        <Line />
        <PopularBookList />
      </div>
    </BookList>
  );
};

export default PopularBooks;

const BookList = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 25px 0 70px 2vw;
`;

const Line = styled.div`
  width: 182px;
  border: 1px solid #f2f3f5;
  margin: 7px 75px;
`;
