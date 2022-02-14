import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import theme from '../../../../styles/theme';
import SearchFilter from './SearchFilter/SearchFilter';

const SearchBox = ({
  setIsListModalVisible,
  searchInputValue,
  setSearchInputValue,
  titleData,
  authorData,
  handleInput,
}) => {
  const [isSearchFilterVisible, setIsSearchFilterVisible] = useState(false);

  const openFilter = e => {
    if (e.key === 'Enter') {
      setIsSearchFilterVisible(true);
    }
    if (searchInputValue.length === 0) {
      setIsSearchFilterVisible(false);
    }
  };

  return (
    <MainWrapper>
      <SearchBoxWrapper>
        <SearchInput
          type="text"
          placeholder="제목, 저자, 출판사 검색"
          value={searchInputValue}
          onChange={handleInput}
          onKeyDown={openFilter}
        />
        <SearchBtn>
          <FontAwesomeIcon icon={faSearch} />
        </SearchBtn>
        {searchInputValue.length > 0 && (
          <DeleteBtn
            onClick={() => {
              setSearchInputValue('');
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </DeleteBtn>
        )}
      </SearchBoxWrapper>
      {/* {searchInputValue.length > 0 && ( */}
      {isSearchFilterVisible && searchInputValue.length > 0 && (
        <SearchFilter
          isSearchFilterVisible={isSearchFilterVisible}
          setIsSearchFilterVisible={setIsSearchFilterVisible}
          setIsListModalVisible={setIsListModalVisible}
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
          authorData={authorData}
          titleData={titleData}
        />
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  position: relative;
`;

const SearchBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 25vw;
  margin-left: 1.5vw;
`;

const SearchInput = styled.input`
  position: relative;
  width: 100%;
  height: 4.3vh;
  padding-left: 2.2vw;
  border-radius: 3px;
  border: none;
  font-size: ${theme.fontSize3};
  outline: none;
`;

const SearchBtn = styled.button`
  position: absolute;
  left: 0;
  height: 0;
  padding-left: 0.8vw;
  margin-bottom: 1.8vh;
  background-color: white;
  border: none;
`;

const DeleteBtn = styled.button`
  position: absolute;
  right: 0;
  height: 0;
  padding-right: 0.8vw;
  margin-bottom: 1.8vh;
  background-color: white;
  border: none;
  cursor: pointer;
`;

export default SearchBox;
