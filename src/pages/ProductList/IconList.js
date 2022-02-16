import React from 'react';
import styled from 'styled-components';

const IconList = ({ marginBottom }) => {
  const Icons = [
    { id: 1, img: '/images/Main/Icon/1.png', description: '신간' },
    { id: 2, img: '/images/Main/Icon/2.png', description: '이벤트' },
    { id: 3, img: '/images/Main/Icon/3.png', description: '베스트셀러' },
    { id: 4, img: '/images/Main/Icon/4.png', description: '지금 인기세트' },
    { id: 5, img: '/images/Main/Icon/5.png', description: '신간 캘린더' },
    { id: 6, img: '/images/Main/Icon/6.png', description: '일반 혜택지도' },
    { id: 7, img: '/images/Main/Icon/7.png', description: '위클리 쿠폰' },
    { id: 8, img: '/images/Main/Icon/8.png', description: '리디페이퍼' },
  ];
  return (
    <Container marginBottom={marginBottom}>
      <IconsContainer>
        {Icons.map((icon, idx) => {
          return (
            <div key={idx}>
              <IconImg src={icon.img} />
              <IconTitle>{icon.description}</IconTitle>
            </div>
          );
        })}
      </IconsContainer>
    </Container>
  );
};
export default IconList;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.marginBottom};
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 970px;
  /* background-color: black; */
`;

const IconImg = styled.img`
  width: 40px;
  height: 40px;
`;

const IconTitle = styled.p`
  font-size: 10px;
  color: #535a61;
  text-align: center;
  line-height: 20px;
`;
