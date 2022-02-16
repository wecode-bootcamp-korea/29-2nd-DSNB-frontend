import React from 'react';
import styled from 'styled-components';
import BestSellerList from './BestSellerList';

const BestSellers = () => {
  return (
    <BestSeller>
      <div>
        <BestSellerList />
        <Line />
        <BestSellerList />
        <Line />
        <BestSellerList />
      </div>
      <div>
        <BestSellerList />
        <Line />
        <BestSellerList />
        <Line />
        <BestSellerList />
      </div>
      <div>
        <BestSellerList />
        <Line />
        <BestSellerList />
        <Line />
        <BestSellerList />
      </div>
    </BestSeller>
  );
};

export default BestSellers;

const BestSeller = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 25px 0 80px 7vw;
`;

const Line = styled.div`
  width: 175px;
  border: 1px solid #f2f3f5;
  margin: 7px 90px;
`;
