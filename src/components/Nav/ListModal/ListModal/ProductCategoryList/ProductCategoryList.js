import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const ProductCategoryList = ({ category, sortByCategory }) => {
  return (
    <div>
      <CategoryWrapper>
        {category?.map(({ id, name, url }) => (
          <Category
            key={id}
            onClick={() => {
              sortByCategory(url);
            }}
          >
            {name}
            <FontAwesomeIcon icon={faAnglesRight} className="items-icon" />
          </Category>
        ))}
      </CategoryWrapper>
    </div>
  );
};

const CategoryWrapper = styled.ul`
  width: 12vw;
  height: 78vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Category = styled.li`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 2.2vh;
  padding: 1vh 1vw 1vh 1.5vw;
  color: rgb(96, 95, 95);
  background-color: rgb(247, 247, 247);
  border: 0.5px solid lightgrey;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgb(234, 234, 234);
    color: black;
    font-size: 19px;
  }

  .items-icon {
    width: 0.5vw;
    color: rgb(130, 64, 7);
  }
`;

export default ProductCategoryList;
