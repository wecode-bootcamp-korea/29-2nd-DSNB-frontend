import styled from 'styled-components';
import KakaoLogin from './KakaoLogin/KakaoLogin';
import LoginHeader from './LoginHeader/LoginHeader';

const Login = () => {
  return (
    <LoginHeader>
      <KakaoLogin />
    </LoginHeader>
  );
};
export default Login;
