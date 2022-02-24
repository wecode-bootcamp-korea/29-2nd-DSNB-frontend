import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DsnbLogo from './DsnbLogo/DsnbLogo';
import SearchBox from './SearchBox/SearchBox';
import KakaoLogin from './KakaoLogin/KakaoLogin';
import URL from '../../../FetchURL/LibrarayURL';

const NavBar = ({ setIsListModalVisible, token, setToken }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [authorData, setAuthorData] = useState([]);
  const [titleData, setTitleData] = useState([]);

  const handleInput = e => {
    setSearchInputValue(e.target.value);
    fetchAuthorData();
    fetchTitleData();
  };

  const fetchAuthorData = async () => {
    const res = await axios.get(`${URL}/books/?search=${searchInputValue}`);
    setAuthorData(res.data.result);
  };

  const fetchTitleData = async () => {
    const res = await axios.get(`${URL}/books/?search=${searchInputValue}`);
    setTitleData(res.data.result);
  };

  return (
    <Background>
      <DsnbLogo />
      <SearchBox
        setIsListModalVisible={setIsListModalVisible}
        searchInputValue={searchInputValue}
        handleInput={handleInput}
        setSearchInputValue={setSearchInputValue}
        authorData={authorData}
        titleData={titleData}
        fetchTitleData={fetchTitleData}
        fetchAuthorData={fetchAuthorData}
      />
      <KakaoLogin token={token} setToken={setToken} />
    </Background>
  );
};

const Background = styled.section`
  display: flex;
  align-items: center;
  height: 9vh;
  background-color: black;
  padding: 0 0 0 16vw;
  z-index: 1000;
`;

export default NavBar;
