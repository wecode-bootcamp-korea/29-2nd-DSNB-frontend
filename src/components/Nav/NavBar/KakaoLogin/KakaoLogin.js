import styled from 'styled-components';
import LoginBtn from '../KakaoLogin/LoginBtn/LoginBtn';
import UserInfo from './UserInfo/UserInfo';

const KakaoLogin = ({ token, setToken }) => {
  return (
    <ButtonWrapper>
      {token ? (
        <UserInfo setToken={setToken} />
      ) : (
        <LoginBtn setToken={setToken} />
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 31vw;
`;

export default KakaoLogin;
