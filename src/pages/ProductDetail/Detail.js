import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import StarRatings from 'react-star-ratings';
import PreviewModal from './PreviewModal';
import PaymentModal from './PaymentModal';
import * as thousand from '../../utils/thousand';
import URL from '../../FetchURL/LibrarayURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCartShopping,
  faGift,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

const Detail = props => {
  const list = props.bookDetail;
  const { name, publisher, rating, book_option, author, img } = list;
  const [pay, setPay] = useState(false);
  const [prev, setPrev] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const handlePaymentButton = () => {
    if (localStorage.getItem('token') === null) {
      alert('로그인하세요');
    } else {
      fetch(`${URL}/orders/info`, {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(res => res.json())
        .then(data => {
          const user = data.result;
          setUserInfo(user[0].cash);
        });
      setPay(true);
    }
  };

  const handlePrevButton = () => {
    setPrev(true);
  };

  const handlePaymentModal = () => setPay(false);
  const handlePrevModal = () => {
    setPrev(false);
  };
  return (
    <BookIntro>
      <ImageWrapper>
        <BookImage alt=" bookimage" src={img} />
        <Button onClick={handlePrevButton}>
          <Book>
            <FontAwesomeIcon icon={faBookOpen} style={{ width: '17px' }} />
          </Book>
          미리보기
        </Button>
        <PreviewModal prev={prev} onClose={handlePrevModal} list={list} />
      </ImageWrapper>
      <BookDetail>
        <Title>{name}</Title>
        <Author>{author.name}</Author>
        <Publisher>{publisher}</Publisher>
        <Star>
          <StarRatings
            rating={parseInt(rating)}
            starRatedColor="Orange"
            numberOfStars={5}
            starDimension="20px"
            name="rating"
            starSpacing="2px"
          />
        </Star>
        <PriceWrapper>
          <PriceTitle>구매</PriceTitle>
          <PriceType>
            <span>종이책 정가</span>
            <span>전자책 정가</span>
            <span>판매가</span>
          </PriceType>
          <Price>
            <span>{thousand.thousand(book_option[0].price)}</span>
            <span>{thousand.thousand(book_option[0].dis_price)}</span>
            <span>{thousand.thousand(book_option[0].dis_price)}</span>
          </Price>
        </PriceWrapper>
        <Icon>
          <IconButton>
            <FontAwesomeIcon className="heart" icon={faHeart} size="lg" />
          </IconButton>
          <IconButton>
            <FontAwesomeIcon
              className="heart"
              icon={faCartShopping}
              size="lg"
            />
          </IconButton>
          <IconButton>
            <FontAwesomeIcon className="heart" icon={faGift} size="lg" />
          </IconButton>
          <Buy onClick={handlePaymentButton}>소장하기</Buy>
          {localStorage.getItem('token') && (
            <PaymentModal
              pay={pay}
              onCancel={handlePaymentModal}
              list={list}
              cash={userInfo}
            />
          )}
        </Icon>
      </BookDetail>
    </BookIntro>
  );
};

const BookIntro = styled.section`
  display: flex;
  padding: 40px 29px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-top: 40px;
`;

const BookImage = styled.img`
  width: 200px;
  height: 300px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 150px;
  height: 50px;
  background-color: white;
  color: black;
  border: solid 1px ${theme.background};
  border-radius: 0.5rem;
  font-size: 18px;
  &:hover {
    background-color: rgb(0, 0, 0, 0.05);
  }
`;

const Book = styled.div`
  margin-right: 7px;
`;

const BookDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 40px;
  margin-top: 30px;
`;

const Title = styled.span`
  font-size: 36px;
`;
const Author = styled.span`
  margin-top: 30px;
  font-size: 16px;
`;
const Publisher = styled.span`
  margin-top: 10px;
  font-size: 16px;
`;

const Star = styled.span`
  margin-top: 15px;
  color: red;
  font-size: 20px;
`;

const PriceWrapper = styled.div`
  display: flex;
  height: 100px;
  margin-top: 30px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const PriceTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-right: 1px solid black;
  background-color: rgb(0, 0, 0, 0.05);
`;

const PriceType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  padding: 20px 20px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 40%;
  padding: 20px 20px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  margin-top: 30px;
`;

const IconButton = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: transparent;
  border: solid 1px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  .heart {
    opacity: 0.5;
  }
  &:hover {
    background-color: rgb(0, 0, 0, 0.05);

    .heart {
      opacity: 1;
      color: #e74938;
    }
  }
`;

const Buy = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  background-color: ${theme.background};
  border: solid 1px ${theme.background};
  border-radius: 0.5rem;
  font-size: 15px;
`;

export default Detail;
