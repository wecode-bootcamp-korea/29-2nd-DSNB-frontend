import React, { useState } from 'react';
import styled from 'styled-components';
import OpenBook from '../OpenBook/OpenBook';

const LibraryBooks = ({ bookData, setBookData }) => {
  const [book, setBook] = useState(false);
  const [bottonBox, setBottonBox] = useState(false);
  const [pageData, setPageData] = useState('');

  const OpenButtonBox = () => {
    setBottonBox(bottonBox => !bottonBox);
  };

  const OpenBooks = page => {
    setBook(true);
    setPageData(page);
  };

  return (
    <>
      <LibraryBooksBox
        onMouseEnter={OpenButtonBox}
        onMouseLeave={OpenButtonBox}
      >
        <Booksimg alt="" src={bookData.cover_image} />
        {bottonBox && (
          <ButtonBox>
            <Button onClick={() => OpenBooks(bookData.bookmark)}>
              이어 보기
            </Button>
            <Button onClick={() => OpenBooks(1)}>처음 부터</Button>
          </ButtonBox>
        )}
        {!bottonBox && <BooksInfo>총 1화</BooksInfo>}
        <BooksTitle>{bookData.title}</BooksTitle>
      </LibraryBooksBox>
      {pageData && (
        <OpenBook
          book={book}
          setBook={setBook}
          bookData={bookData}
          setBookData={setBookData}
          pageData={pageData}
          setPageData={setPageData}
        />
      )}
    </>
  );
};

const LibraryBooksBox = styled.div`
  position: relative;
  margin: 2vh 2vh 4vh 2vh;
  width: 20vh;
  height: 30vh;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

const Booksimg = styled.img`
  width: 100%;
  height: 100%;
`;

const BooksInfo = styled.div`
  position: absolute;
  padding: 1vh 1.5vh;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1vh;
  font-weight: bold;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const BooksTitle = styled.div`
  position: absolute;
  bottom: -4vh;
  width: 100%;
  height: 3vh;
  font-size: 1.5vh;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: 1vh;
  width: 10vh;
  height: 4vh;
  font-size: 1.5vh;
  font-weight: bold;
`;

export default LibraryBooks;
