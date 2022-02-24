import styled from 'styled-components';
import { useNavigate } from 'react-router';

const TitleCard = ({
  setIsSearchFilterVisible,
  setIsListModalVisible,
  setSearchInputValue,
  titleData,
}) => {
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <TitleCardWrapper>
      <SearchStandard>제목 결과</SearchStandard>
      {titleData?.map(({ id, author, title }) => (
        <CardWrapper
          key={id}
          onClick={() => {
            setIsSearchFilterVisible(prev => !prev);
            setIsListModalVisible(false);
            setSearchInputValue('');
            goToDetail(id);
          }}
        >
          <BookTitle>『{title}』</BookTitle>
          <BookAuthor>
            {author} <Author>著</Author>
          </BookAuthor>
          <BookPublisher />
        </CardWrapper>
      ))}
    </TitleCardWrapper>
  );
};

const TitleCardWrapper = styled.div`
  width: 28vw;
  max-height: 19vh;
  min-height: 6vh;
  padding: 1vh 0 0 0.8vw;
  border-top: 1px solid lightgrey;
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
  height: 3.8vh;
  padding: 0.8vh 0;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const BookTitle = styled.span`
  margin-left: 0.9vw;
  font-size: 14px;
  font-weight: bold;
`;

const BookAuthor = styled.span`
  margin-left: 0.7vw;
  font-size: 14px;
  letter-spacing: -1px;
  color: grey;
`;

const BookPublisher = styled.span`
  margin-left: 0.6vw;
`;

const Author = styled.span`
  color: black;
`;

export default TitleCard;
