import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import styled from 'styled-components';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyDocument = ({ list }) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: list.file_url,
    page,
    canvasRef,
    scale: '0.94',
  });

  return (
    <CanvasWrapper>
      {!pdfDocument && <span>Loading...</span>}
      <Canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <>
          <ButtonBox>
            <Prev
              disabled={page === 1}
              onClick={() => setPage(page => page - 1)}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{
                  marginLeft: '30px',
                  width: '20px',
                  height: '20px',
                }}
              />
            </Prev>
            <Next
              disabled={page > Math.round(pdfDocument.numPages * 0.1)}
              onClick={() => setPage(page => page + 1)}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{
                  marginRight: '30px',
                  width: '20px',
                  height: '20px',
                }}
              />
            </Next>
          </ButtonBox>
          <CurrentPage>
            <Page>
              {page}/{pdfDocument.numPages}
            </Page>
          </CurrentPage>
        </>
      )}
    </CanvasWrapper>
  );
};

const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
`;

const Page = styled.span`
  font-size: 20px;
`;

const CanvasWrapper = styled.div`
  position: relative;
`;

const Canvas = styled.canvas`
  z-index: 1;
`;

const ButtonBox = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(0, -50%);
  z-index: 1000;
`;

const Prev = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  background-color: transparent;
  border: none;
`;
const Next = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: transparent;
  border: none;
`;
export default MyDocument;
