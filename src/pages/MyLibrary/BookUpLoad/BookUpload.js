import React, { useState } from 'react';
import styled from 'styled-components';

const BookUpload = props => {
  const { setBookUploader } = props;

  const [inputData, setInputData] = useState({
    bookTitle: '',
    bookWritter: '',
    price: '',
    thumbnail: '',
    bookFile: '',
  });

  const [fileImage, setFileImage] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const saveFileData = e => {
    const { name, files } = e.target;

    setInputData({
      ...inputData,
      [name]: files,
    });
    if (name === 'thumbnail') {
      setFileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setInputData('');
    setFileImage('');
  };

  const UploadDatas = () => {
    const datas = new FormData();
    if (
      inputData.bookTitle &&
      inputData.bookWritter &&
      inputData.price &&
      inputData.thumbnail &&
      inputData.bookFile
    ) {
      datas.append('thumbnail', inputData.thumbnail[0]);
      datas.append('bookFile', inputData.bookFile[0]);
      //formdata 확인용 콘솔입니다.
      for (let key of datas.keys()) {
        console.log(key);
      }
      for (let value of datas.values()) {
        console.log(value);
      }
    }
  };

  const CloseBookUpload = () => {
    setInputData({
      bookTitle: '',
      bookWritter: '',
      price: '',
    });
    deleteFileImage();
    setBookUploader(false);
  };

  return (
    <BookUploadTotal>
      <Span>
        <Div>
          <div>책 제목</div>
          <div style={{ marginRight: '2vh' }}>:</div>
        </Div>
        <Input
          name="bookTitle"
          type="text"
          placeholder="책 제목을 입력하세요"
          onChange={handleInput}
        />
      </Span>
      <Span>
        <Div>
          <div>저자</div>
          <div style={{ marginRight: '2vh' }}>:</div>
        </Div>
        <Input
          name="bookWritter"
          type="text"
          placeholder="저자를 입력하세요"
          onChange={handleInput}
        />
      </Span>
      <Span>
        <Div>
          <div>가격</div>
          <div style={{ marginRight: '2vh' }}>:</div>
        </Div>
        <Input
          name="price"
          type="number"
          placeholder="판매 가격을 입력하세요"
          onChange={handleInput}
        />
      </Span>
      <Span>
        <Div>
          <div>표지</div>
          <div style={{ marginRight: '2vh' }}>:</div>
        </Div>
        <Input
          name="thumbnail"
          type="file"
          accept="image/*"
          onChange={saveFileData}
        />
      </Span>
      <Thumbnail back={fileImage} />
      <Span>
        <Div>
          <div>파일</div>
          <div style={{ marginRight: '2vh' }}>:</div>
        </Div>
        <Input
          name="bookFile"
          type="file"
          accept=".pdf"
          onChange={saveFileData}
        />
      </Span>
      <SendButtonBox>
        <Button cancle="cancle" onClick={CloseBookUpload}>
          취소
        </Button>
        <Button onClick={UploadDatas}>송부</Button>
      </SendButtonBox>
    </BookUploadTotal>
  );
};

const BookUploadTotal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50vh;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
  background-color: black;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3vh;
`;

const Div = styled.div`
  display: flex;
  width: 20%;
  font-size: 1.5vh;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 80%;
  height: 2vh;
  padding-left: ${props =>
    props.name === 'thumbnail' || props.name === 'bookFile' ? '0px' : '10px'};
  font-size: 1vh;
`;

const Thumbnail = styled.div`
  margin: auto;
  width: 30vh;
  height: 50vh;
  text-align: center;
  background-size: 40vh 50vh;
  background-image: url(${props => props.back});
  background-color: white;
  background-repeat: repeat;
`;

const SendButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 3vh;
`;

const Button = styled.button`
  width: 10vh;
  height: 1.5vh;
  margin-right: ${props => props.cancle && '2vh'};
  font-size: 1vh;
`;
export default BookUpload;
