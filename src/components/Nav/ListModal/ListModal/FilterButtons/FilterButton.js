import styled from 'styled-components';
import ButtonsCard from './ButtonsCard/ButtonsCard';

const FilterButton = ({ posts, filter, sortByFitler, sortPriceToLow }) => {
  return (
    <MainWrapper>
      <FilterButtonsWrapper>
        {filter?.map(item => {
          return (
            <ButtonsCard
              key={item.id}
              name={item.name}
              filter={filter}
              sortByFitler={sortByFitler}
              sortPriceToLow={sortPriceToLow}
            />
          );
        })}
      </FilterButtonsWrapper>
      <NumOfProductsWrapper>
        총&nbsp;
        <NumOfProducts>{posts?.length}</NumOfProducts>권
      </NumOfProductsWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8.5vw 1.5vh 3.5vw;
  border-bottom: 1px solid lightgrey;
`;

const NumOfProductsWrapper = styled.div`
  margin-left: 1vw;
  font-size: 15px;
`;

const NumOfProducts = styled.span`
  font-size: 16px;
  color: #666;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const FilterButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  width: 40vw;
  height: 6vh;
  color: black;
`;

export default FilterButton;
