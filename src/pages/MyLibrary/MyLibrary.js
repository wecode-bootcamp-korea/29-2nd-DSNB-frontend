import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LibraryBooks from './LibraryBooks/LibraryBooks';
import BookUpload from './BookUpLoad/BookUpload';
import LibrarayURL from '../../FetchURL/LibrarayURL';

const MyLibrary = () => {
  const [bookData, setBookData] = useState([]);
  const [bookUploader, setBookUploader] = useState(false);
  const [bookSearch, setBookSearch] = useState('');
  const [token, setToken] = useState(null);

  const getMethod = {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    token && setToken(token);
  }, []);

  useEffect(() => {
    fetch(`${LibrarayURL}/users/library`, getMethod)
      .then(res => res.json())
      .then(result => {
        setBookData(result.message);
      });
  }, []);

  const openBookUpload = () => {
    setBookUploader(bookUploader => !bookUploader);
  };

  const doSearchText = e => {
    setBookSearch(e.currentTarget.value);
  };

  const doSearch = e => {
    if (e.key === 'Enter') {
      if (bookSearch.length > 0) {
        fetch(`${LibrarayURL}/users?search=${bookSearch}`, getMethod)
          .then(res => res.json())
          .then(result => {
            setBookData(result.result);
          });
      } else {
        fetch(`${LibrarayURL}/users/library`, {
          method: 'GET',
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        })
          .then(res => res.json())
          .then(result => {
            setBookData(result.message);
          });
      }
    }
  };

  const goToHome = () => {
    window.location.replace('/');
  };

  const doLogoutUser = () => {
    const { Kakao } = window;
    Kakao.Auth.logout(() => {
      localStorage.clear();
      alert('로그아웃 되었습니다.');
      setToken(false);
      window.location.replace('/');
    });
  };

  return (
    <>
      <Headers>
        <Library>내 서재</Library>
        <LibrarySub>
          <LibrarySubMenu right="right" onClick={goToHome}>
            Home
          </LibrarySubMenu>
          <LibrarySubMenu onClick={doLogoutUser}>LogOut</LibrarySubMenu>
        </LibrarySub>
      </Headers>
      <Search>
        <SearchInput
          type="text"
          placeholder="모든 책 검색"
          onChange={doSearchText}
          onKeyUp={doSearch}
        />
      </Search>
      <LibraryBooksTotal>
        <LibraryBooksContents>
          {bookData.length > 0 &&
            bookData.map((com, idx) => (
              <LibraryBooks
                key={idx}
                bookData={com}
                setBookData={setBookData}
              />
            ))}
        </LibraryBooksContents>
      </LibraryBooksTotal>
      <UploadButton onClick={openBookUpload}>Book UpLoad</UploadButton>
      {bookUploader && (
        <>
          <Modal onClick={openBookUpload} />
          <BookUpload
            setBookUploader={setBookUploader}
            bookUploader={bookUploader}
          />
        </>
      )}
    </>
  );
};

const Headers = styled.header`
  display: flex;
  padding: 2vh 15vh;
  align-items: center;
  justify-content: space-between;
`;

const Library = styled.div`
  padding: 0 10vh;
  font-size: 2vh;
  font-weight: bolder;
`;

const LibrarySub = styled.div`
  display: flex;
`;

const LibrarySubMenu = styled.div`
  padding: 0 1vh;
  ${props => props.right && 'border-right: 1px solid #b7b7b7'};
  font-size: 1.5vh;
  font-weight: bolder;
  color: gray;
  cursor: pointer;
`;

const Search = styled.div`
  padding: 1vh;
  border-top: 1px solid #b7b7b7;
  border-bottom: 1px solid #b7b7b7;
  background-color: #f3f4f5;
`;

const SearchInput = styled.input`
  margin: auto 23vh;
  padding-left: 2vh;
  width: 45%;
  height: 3vh;
  border: 1px solid #b7b7b7;
  border-radius: 10px;
  font-size: 1.5vh;
`;

const LibraryBooksTotal = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #f3f4f5; */
`;

const LibraryBooksContents = styled.div`
  margin: auto 20vh;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
`;

const UploadButton = styled.button`
  position: fixed;
  bottom: 5vh;
  right: 5vh;
  width: 10vh;
  height: 10vh;
  border: none;
  font-size: 2vh;
  border-radius: 5vh;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export default MyLibrary;
