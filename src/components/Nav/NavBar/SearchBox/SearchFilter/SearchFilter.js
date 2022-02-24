import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AuthorCard from './SearchCard/AuthorCard';
import TitleCard from './SearchCard/TitleCard';

const SearchFilter = ({
  isSearchFilterVisible,
  setIsSearchFilterVisible,
  setIsListModalVisible,
  searchInputValue,
  setSearchInputValue,
  authorData,
  titleData,
}) => {
  const searchFilterRef = useRef();

  const checkIfClickedOutside = e => {
    const condition =
      isSearchFilterVisible &&
      searchFilterRef.current &&
      !searchFilterRef.current.contains(e.target);
    if (condition) {
      setSearchInputValue('');
      setIsSearchFilterVisible(prev => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  });

  return (
    <FilterWrapper ref={searchFilterRef}>
      {authorData.length === 0 ? ( //authorData === null
        <NoDataWrapper>
          <InputValue>'&nbsp;{searchInputValue}&nbsp;'</InputValue>&nbsp;에 대한
          검색결과가 없습니다.
        </NoDataWrapper>
      ) : (
        <>
          <AuthorCard
            setIsSearchFilterVisible={setIsSearchFilterVisible}
            setIsListModalVisible={setIsListModalVisible}
            setSearchInputValue={setSearchInputValue}
            authorData={authorData}
            onClick={() => {
              setIsSearchFilterVisible(prev => !prev);
            }}
          />
          <TitleCard
            setIsSearchFilterVisible={setIsSearchFilterVisible}
            setIsListModalVisible={setIsListModalVisible}
            setSearchInputValue={setSearchInputValue}
            titleData={titleData}
            onClick={() => {
              setIsSearchFilterVisible(prev => !prev);
            }}
          />
        </>
      )}
    </FilterWrapper>
  );
};

const NoDataWrapper = styled.div`
  width: 28vw;
  max-height: 18vh;
  min-height: 6vh;
  padding: 2vh 0 0 2vw;
  overscroll-behavior-y: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputValue = styled.span`
  color: #fa3830;
  font-weight: bold;
`;

const FilterWrapper = styled.section`
  position: absolute;
  width: 28vw;
  max-height: 39vh;
  min-height: 12vh;
  margin-top: 0.3vh;
  margin-left: 1.5vw;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 30%) 3px 3px 10px 3px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: none;
  z-index: 12;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default SearchFilter;
