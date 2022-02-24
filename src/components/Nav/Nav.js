import { useState, useEffect } from 'react';
import NavBar from '../Nav/NavBar/NavBar';
import NavCategory from './ListModal/NavCategory/NavCategory';

const Nav = () => {
  const [isListModalVisible, setIsListModalVisible] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    token && setToken(token);
  }, []);

  if (window.location.pathname === '/myLibrary') {
    return null;
  }
  return (
    <>
      <NavBar
        isListModalVisible={isListModalVisible}
        setIsListModalVisible={setIsListModalVisible}
        token={token}
        setToken={setToken}
      />
      <NavCategory
        isListModalVisible={isListModalVisible}
        setIsListModalVisible={setIsListModalVisible}
      />
    </>
  );
};

export default Nav;
