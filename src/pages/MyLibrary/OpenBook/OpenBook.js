import React, { useState } from 'react';
import styled from 'styled-components';
import { Page, Document, pdfjs } from 'react-pdf';
import StarRating from './StarRating';
import useViewPort from '../../../Hooks/useViewPort';
import LibrarayURL from '../../../FetchURL/LibrarayURL';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const OpenBook = props => {
  const { book, setBook, bookData, setBookData, pageData, setPageData } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(pageData);
  const [changePageNumber, setChangePageNumber] = useState(pageNumber);
  const [openInfo, setOpenInfo] = useState(false);
  const { width, height } = useViewPort();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const closeBook = e => {
    setBook(false);
    setPageData('');
    setOpenInfo(false);
    fetch(`${LibrarayURL()}/users/library`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        book_id: e.target.id,
        bookmark: pageNumber,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          fetch(`${LibrarayURL()}/users/library`, {
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
      });
  };

  const bookscale = () => {
    let newwidth = width / 1920;
    let newheight = height / 1019;

    return newwidth >= newheight ? newheight : newwidth;
  };

  const changePage = e => {
    if (e.target.value > numPages) {
      alert('잘못된 페이지 값입니다.');
      e.target.value = '';
    } else {
      setChangePageNumber(parseInt(e.target.value));
    }
  };

  const goPage = e => {
    if (e.key === 'Enter') {
      setPageNumber(changePageNumber);
      e.target.value = '';
    }
  };

  const ToggleInfo = () => {
    setOpenInfo(openInfo => !openInfo);
  };

  return (
    <div>
      {book && (
        <>
          <Modal onClick={closeBook} id={bookData.book_id} />
          <OpenBookTotal>
            <DocumentBox>
              <Document
                file={bookData.file_url}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} scale={bookscale()} />
              </Document>
              <MoveButton
                location="left"
                onClick={() =>
                  pageNumber > 1 && setPageNumber(pageNumber => pageNumber - 1)
                }
              />
              <MoveButton
                location="right"
                onClick={() =>
                  pageNumber < numPages &&
                  setPageNumber(pageNumber => pageNumber + 1)
                }
              />
              {openInfo && (
                <Span openInfo={openInfo}>
                  Page{' '}
                  <PageInput
                    placeholder={pageNumber}
                    onChange={changePage}
                    onKeyUp={goPage}
                  />{' '}
                  of {numPages}
                </Span>
              )}
            </DocumentBox>
            {!openInfo && (
              <InfoBox openInfo={openInfo}>
                <Span use="pageInfo">
                  Page{' '}
                  <PageInput
                    placeholder={pageNumber}
                    onChange={changePage}
                    onKeyUp={goPage}
                  />{' '}
                  of {numPages}
                </Span>
                <BookImg src={bookData.cover_image} />
                <Div>
                  <Span use="Title">{bookData.title}</Span>
                  <Span use="Title">{bookData.author}</Span>
                  <StarRating starRating={bookData.rating} />
                </Div>
              </InfoBox>
            )}
            <InfoOpenButton onClick={ToggleInfo}>
              <ButtonArrow> {openInfo ? '>' : '<'}</ButtonArrow>
            </InfoOpenButton>
          </OpenBookTotal>
        </>
      )}
    </div>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const OpenBookTotal = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
  background-color: black;
`;

const DocumentBox = styled.div`
  position: relative;
  margin: 30px;
  text-align: center;
`;

const MoveButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => (props.location === 'left' ? 'left : 0' : 'right: 0 ')};
  height: 80%;
  width: 50%;
  transform: translate(0%, -50%);
  border: none;
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const InfoBox = styled.div`
  display: flex;
  margin: 30px;
  width: 43vh;
  flex-direction: column;
  text-align: end;
`;

const Span = styled.span`
  padding-bottom: 2vh;
  font-size: ${props =>
    props.use === 'Title' && (props => props.theme.fontSize2)};
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageInput = styled.input`
  width: 2vh;
  text-align: center;
`;

const BookImg = styled.img`
  margin: auto;
  width: 20vh;
  height: 30vh;
`;

const InfoOpenButton = styled.button`
  position: absolute;
  top: 0;
  right: -3vh;
  width: 3vh;
  height: 6vh;
  border: none;
  background-color: black;
`;

const ButtonArrow = styled.span`
  color: white;
  font-weight: bold;
`;

export default OpenBook;
