import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Book from './Book';
import URL from '../../FetchURL/LibrarayURL';

const BookList = ({ option }) => {
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

  return (
    <BasicBookListBox>
      <BasicSection>
        {bookList.map((book, i) => {
          return option === 'starRating' ? (
            <RatingSection key={i}>
              <Book
                cover_image={book.cover_image}
                id={i + 1}
                title={book.title}
                author={book.author}
                everage_rate={book.everage_rate}
                reviews={book.reviews}
                option={option}
                onClick={() => {
                  bookDetail(book.id);
                }}
              />
              <RatingListLine />
            </RatingSection>
          ) : (
            <React.Fragment key={i}>
              <Book
                cover_image={book.cover_image}
                id={i + 1}
                title={book.title}
                author={book.author}
              />
              <BasicListLine />
            </React.Fragment>
          );
        })}
      </BasicSection>
    </BasicBookListBox>
  );
};

export default BookList;

const BasicSection = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 950px;
  height: 325px;
  overflow: hidden;
`;

const RatingSection = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 10px 0;
  overflow: hidden;
`;

const RatingListLine = styled.div`
  width: 175px;
  margin: 7px 90px;
  border: 1px solid #f2f3f5;
`;

const BasicBookListBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 3vw 0 2vw 2vw;
`;

const BasicListLine = styled.div`
  width: 182px;
  margin: 7px 75px;
  border: 1px solid #f2f3f5;
`;
