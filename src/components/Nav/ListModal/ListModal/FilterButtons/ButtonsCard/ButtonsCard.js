import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';

const ButtonsCard = ({ name, sortByFitler }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <FilterButtons
        onClick={() => {
          setIsChecked(prev => !prev);
          sortByFitler();
        }}
        isChecked={isChecked}
      >
        <FontAwesomeIcon icon={faBookOpen} className="book-icon" />
        {name}
      </FilterButtons>
      <MiddleDot>&#183;</MiddleDot>
    </>
  );
};

const FilterButtons = styled.li`
  display: inline-flex;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -2px;
  cursor: pointer;

  ${({ isChecked }) => css`
    margin-left: ${isChecked ? '0.7vw' : '0.5vw'};
    color: ${isChecked ? 'black' : '#666'};
  `};

  &:hover {
    color: black;
    text-decoration: underline;
  }

  .book-icon {
    display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
    margin-right: 0.2vw;
    cursor: pointer;
  }
`;

const MiddleDot = styled.span`
  margin-left: 0.5vw;
  margin-right: -0.3vw;

  &:last-child {
    visibility: hidden;
  }
`;

export default ButtonsCard;
