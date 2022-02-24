import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RankingBook from './RankingBook';
import URL from '../../FetchURL/LibrarayURL';

const RankingBookList = () => {
  const [bookList, setBookList] = useState([]);
  // const rankNum = []

  useEffect(() => {
    fetch(`${URL}/books/page?limit=9`)
      .then(res => res.json())
      .then(res => {
        setBookList(res.result);
      });
  }, []);
  // useEffect(() => {
  //   fetch('/data/mainInfo.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       setDatas(res);
  //     });
  // }, []);

  return (
    <BookList>
      <Section>
        {bookList?.map((book, i) => {
          return (
            <div key={i}>
              <RankingBook
                cover_image={book.cover_image}
                id={i + 1}
                title={book.title}
                author={book.author}
              />
              <Line />
            </div>
          );
        })}
      </Section>
    </BookList>
  );
};

export default RankingBookList;

const Section = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 950px;
  height: 300px;
  overflow: hidden;
`;

const BookList = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 3vw 0 2vw 2vw;
`;

const Line = styled.div`
  width: 182px;
  margin: 7px 75px;
  border: 1px solid #f2f3f5;
`;
const Address = styled(Link)`
  text-decoration: none;
`;
