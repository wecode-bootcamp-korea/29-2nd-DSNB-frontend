import styled from 'styled-components';
import { useNavigate } from 'react-router';

const AuthorCard = ({
  setIsSearchFilterVisible,
  setIsListModalVisible,
  setSearchInputValue,
  authorData,
}) => {
  const navigate = useNavigate();

  return (
    <AuthorCardWrapper>
      <SearchStandard>작가 결과</SearchStandard>
      {authorData?.map(({ id, author, title }) => (
        <CardWrapper
          key={id}
          onClick={() => {
            setIsSearchFilterVisible(prev => !prev);
            setIsListModalVisible(false);
            setSearchInputValue('');
            navigate(`/productDetail/${id}`);
          }}
        >
          <CardImgWrapper>
            <BookImg src="images/user.png" alt="user" />
          </CardImgWrapper>
          <BookAuthor>{author} 著 ,</BookAuthor>
          <BookTitle>{`<${title}>`}</BookTitle>
          <BookPublisher />
        </CardWrapper>
      ))}
    </AuthorCardWrapper>
  );
};

const AuthorCardWrapper = styled.div`
  width: 28vw;
  max-height: 19vh;
  min-height: 6vh;
  padding: 1vh 0 0 0.8vw;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SearchStandard = styled.span`
  color: grey;
  font-size: 14px;
`;

const CardWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 36.2vw;
  height: 4.5vh;
  padding: 0.6vh 1.3vw;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const CardImgWrapper = styled.div`
  height: 3vh;
  width: 1.5vw;
`;

const BookImg = styled.img`
  height: 100%;
  width: 100%;
`;

const BookAuthor = styled.span`
  margin-left: 0.7vw;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -1px;
`;

const BookTitle = styled.span`
  margin-left: 0.9vw;
  color: grey;
  font-size: 14px;
`;

const BookPublisher = styled.span`
  margin-left: 0.6vw;
`;

export default AuthorCard;
