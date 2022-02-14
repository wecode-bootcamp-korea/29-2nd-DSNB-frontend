import styled from 'styled-components';
import { useNavigate } from 'react-router';

const LogoutBtn = ({ setToggleUserMenu, setToken }) => {
  const navigate = useNavigate();

  const LogoutUser = () => {
    const { Kakao } = window;
    Kakao.Auth.logout(() => {
      localStorage.clear();
      alert('로그아웃 되었습니다.');
      navigate('/');
      setToggleUserMenu(prev => !prev);
      setToken(false);
    });
  };

  return (
    <Logout
      onClick={() => {
        LogoutUser();
      }}
    >
      로그아웃
    </Logout>
  );
};

const Logout = styled.span``;

export default LogoutBtn;
