import styled from 'styled-components';
import theme from '../../../styles/theme';
const Header = styled.div`
  height: 6vh;
  background-color: ${theme.background};
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginHeader = () => {
  return <Header>DSNBooks</Header>;
};

export default LoginHeader;
