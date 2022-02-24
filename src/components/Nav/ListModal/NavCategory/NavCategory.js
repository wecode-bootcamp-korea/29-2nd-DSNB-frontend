import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import ListModal from '../ListModal/ListModal';

const { Kakao } = window;
const NavCategory = ({ isListModalVisible, setIsListModalVisible }) => {
  const navigate = useNavigate();

  return (
    <>
      <CategoryWrapper>
        <MainCategory>
          <CategoryButton
            onClick={() => {
              setIsListModalVisible(prev => !prev);
            }}
          >
            <FontAwesomeIcon icon={faBars} className="toggle-btn" />
          </CategoryButton>
        </MainCategory>
        <MainCategory
          onClick={() => {
            navigate('/');
          }}
        >
          <FontAwesomeIcon icon={faHome} className="home-icon" />홈
        </MainCategory>
        <MainCategory
          onClick={() => {
            if (localStorage.getItem('token')) {
              window.location.replace('/myLibrary');
            } else {
              Kakao.Auth.loginForm();
            }
          }}
        >
          <FontAwesomeIcon icon={faBook} className="my-library" />내 서재
        </MainCategory>
      </CategoryWrapper>
      {isListModalVisible && (
        <ListModal
          isListModalVisible={isListModalVisible}
          setIsListModalVisible={setIsListModalVisible}
        />
      )}
    </>
  );
};

const CategoryWrapper = styled.ul`
  display: flex;
  align-items: center;
  padding: 1.4vh 16vw;
  border-bottom: 1px solid lightgrey;
`;

const MainCategory = styled.li`
  display: inline;
  margin-right: 4vw;
  font-size: ${theme.fontSize3};
  font-weight: bold;
  cursor: pointer;

  .home-icon,
  .my-library {
    height: 0.9vw;
    margin-right: 0.3vw;
  }
`;

const CategoryButton = styled.button`
  height: 3vh;
  border: none;
  background: none;
  cursor: pointer;

  .toggle-btn {
    height: 1.3vw;
  }
`;

export default NavCategory;
