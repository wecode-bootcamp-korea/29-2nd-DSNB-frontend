import ReactModal from 'react-modal';
import * as thousand from '../../utils/thousand';
import { faX, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import theme from '../../styles/theme';
import URL from '../../FetchURL/LibrarayURL';

const PaymentModal = ({ pay, onCancel, list, cash }) => {
  const { book_id, img, name, book_option, author } = list;
  const handlePaymentModal = () => {
    onCancel();
  };

  const afterCash = parseInt(cash) - parseInt(book_option[0].dis_price);

  const goToLibrary = () => {
    fetch(`${URL}/orders/buy`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        book_id: book_id,
        book_option: book_option[0].id,
        price: book_option[0].dis_price,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('결제 완료되었습니다.');
          window.location.replace('/myLibrary');
        } else if (result.message === 'LOW_CASH') {
          alert('코인을 충전해주세요');
        } else {
          alert(
            '이미 구매 완료된 책은 내 서재 페이지에서 확인하실 수 있습니다.'
          );
        }
      });
  };

  return (
    <ReactModal isOpen={pay} style={modalStyle}>
      <Back onClick={handlePaymentModal}>
        <FontAwesomeIcon icon={faX} size="lg" transform="right--15" />
      </Back>
      <Book>
        <Info>
          <BookImage src={img} />
          <BookDetail>
            <Detail>{name}</Detail>
            <DetailAuthor>{author.name}</DetailAuthor>
          </BookDetail>
          <Price>{thousand.thousand(book_option[0].dis_price)}</Price>
        </Info>
      </Book>
      <CashBox>
        <MyCash>
          <Title>
            보유 캐시
            <FontAwesomeIcon
              icon={faCoins}
              style={{ marginLeft: '5px', color: '#F3C50C' }}
            />
          </Title>
          <Cash>{thousand.thousand(cash)}</Cash>
        </MyCash>
        <UpdateCash>
          <Title>
            결제 후 캐시
            <FontAwesomeIcon
              icon={faCoins}
              style={{ marginLeft: '5px', color: '#F3C50C' }}
            />
          </Title>
          <Cash>{thousand.thousand(afterCash)}</Cash>
        </UpdateCash>
      </CashBox>
      <Payment onClick={goToLibrary}>결제하기</Payment>
    </ReactModal>
  );
};

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    zIndex: 10,
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '420px',
    zIndex: 100,
    padding: 0,
    border: 'none',
  },
};

const Book = styled.div`
  padding: 20px;
  border: solid 1px transparent;
`;

const Back = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
`;

const Info = styled.div`
  display: flex;
  width: 440px;
  height: 150px;
`;

const BookImage = styled.img`
  width: 100px;
  height: 100%;
`;

const BookDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 240px;
  height: 120px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 10px 30px;
  width: 200px;
  height: 30px;
  font-weight: 600;
  font-size: ${theme.fontSize2};
`;

const DetailAuthor = styled(Detail)`
  margin-top: 10px;
  color: rgb(70, 70, 70);
  font-size: 18px;
  font-weight: normal;
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100px;
  font-size: ${theme.fontSize2};
`;

const CashBox = styled.div`
  margin: 0 50px 0 0;
`;

const MyCash = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
`;

const UpdateCash = styled(MyCash)`
  margin-top: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: ${theme.fontSize3};
`;

const Cash = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
  font-size: ${theme.fontSize3};
  border-bottom: 2px solid black;
`;

const Payment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 38px;
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;
  font-size: ${theme.fontSize2};
  font-weight: 600;
`;

export default PaymentModal;
