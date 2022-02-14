import styled from 'styled-components';
import { useNavigate } from 'react-router';

const DsnbLogo = () => {
  const navigate = useNavigate();

  return (
    <LogoWrapper>
      <LogoImage
        alt="동서남Books"
        src="images/MainLogo.png"
        onClick={() => navigate('/')}
      />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20vw;
  height: auto;
  padding-bottom: 1vh;
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export default DsnbLogo;
