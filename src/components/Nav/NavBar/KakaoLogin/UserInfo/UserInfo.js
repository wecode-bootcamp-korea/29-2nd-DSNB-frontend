import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import theme from '../../../../../styles/theme';

const UserInfo = ({ setToken }) => {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const menuRef = useRef();

  const checkIfClickedOutside = e => {
    const condition =
      toggleUserMenu && menuRef.current && !menuRef.current.contains(e.target);
    if (condition) {
      setToggleUserMenu(prev => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  });

  return (
    <>
      <UserName>{localStorage.name}</UserName>
      <GreetingText>&nbsp;님,&nbsp;&nbsp;&nbsp;환영합니다!</GreetingText>
      <UserImageWrapper onClick={() => setToggleUserMenu(true)}>
        <UserImage alt="userImage" src={localStorage.profile} />
      </UserImageWrapper>
      {toggleUserMenu && (
        <UserMenu ref={menuRef}>
          <MenuItems
            onClick={() => {
              setToggleUserMenu(prev => !prev);
            }}
          >
            <NameWrapper
              onClick={() => {
                window.location.replace('/myLibrary');
              }}
            >
              {' '}
              <Name>{localStorage.name}</Name> <Welcome>님의 서재</Welcome>
            </NameWrapper>
          </MenuItems>
          <MenuItems>장바구니</MenuItems>
          <MenuItems>고객센터</MenuItems>
          <MenuItems>찾아 오시는 길</MenuItems>
          <MenuItems>
            <LogoutBtn
              setToggleUserMenu={setToggleUserMenu}
              setToken={setToken}
            />
          </MenuItems>
        </UserMenu>
      )}
    </>
  );
};

const UserName = styled.span`
  margin-bottom: 0.5vh;
  font-size: 18px;
  color: white;
  font-weight: bold;

  /* font-family: Song Myung; */
`;

const GreetingText = styled.span`
  color: white;
  /* font-family: ${theme.fontFamily}; */
`;

const UserImageWrapper = styled.div`
  width: 1.5vw;
  height: 2.5vh;
  margin-left: 0.5vw;
`;

const UserImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
`;

const UserMenu = styled.ul`
  position: absolute;
  width: 10vw;
  margin-top: 30vh;
  background-color: white;
  box-shadow: rgb(0 0 0 / 30%) 3px 3px 10px 3px;
  z-index: 1231;
`;

const MenuItems = styled.li`
  display: flex;
  align-items: center;
  height: 5vh;
  padding-left: 2vh;
  color: rgb(79, 79, 79);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #f8f9fa;
    /* background-color: rgb(226, 226, 226); */
  }
`;

const NameWrapper = styled.span`
  display: inline-flex;
  align-items: baseline;
  /* margin: auto 0; */
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const Welcome = styled.span`
  font-size: 14px;
`;

export default UserInfo;
