import { useNavigate } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

const { Kakao } = window;
const LoginBtn = ({ setToken }) => {
  const navigate = useNavigate();

  const KakaoLoginHandler = () => {
    Kakao.Auth.loginForm({
      success: data => {
        const fetchKakaoUserData = async () => {
          const res = await axios.get('http://10.58.7.81/users/kakao-auth', {
            headers: {
              Authorization: data.access_token,
            },
          });
          if (!localStorage.token) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('name', res.data.user_info.name);
            localStorage.setItem(
              'profile',
              res.data.user_info.profile_image_url
            );
            if (res.data.token) {
              setToken(localStorage.getItem('token'));
              navigate('/');
            }
          }
        };
        fetchKakaoUserData();
      },
    });
  };

  return (
    <>
      <Signup>회원가입</Signup>
      <Login onClick={KakaoLoginHandler}>로그인</Login>
    </>
  );
};

const Signup = styled.button`
  height: 3.9vh;
  width: 5vw;
  margin-right: 0.3vw;
  color: white;
  background-color: black;
  border: 1px solid white;
  border-radius: 2px;
  cursor: pointer;
`;

const Login = styled.button`
  height: 3.9vh;
  width: 5vw;
  background-color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export default LoginBtn;
