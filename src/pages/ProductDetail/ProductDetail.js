import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Detail from './Detail';
import StarRatings from 'react-star-ratings';

const ProductDetail = () => {
  const [bookData, setBook] = useState('');
  const [majorData, setMajorData] = useState('');
  const [chartList, setChartList] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/productDetail/${id}`);
  };

  useEffect(() => {
    fetch(`http://10.58.7.81/books/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setMajorData(data.author_write.slice(0, 5));
      });
  }, [params]);

  useEffect(() => {
    fetch('http://10.58.7.81/books/rank')
      .then(res => res.json())
      .then(data => {
        setChartList(data.ranks);
      });
  }, []);

  return (
    <>
      <Nav>nav</Nav>
      <Wrapper>
        <SecondWrapper>
          <BodyWrapper>
            {bookData && (
              <>
                <Detail bookDetail={bookData.book} />
                <SectionWrapper>
                  <SectionTitle>저자 프로필</SectionTitle>
                  <AuthorBox>
                    <Name>{bookData.book.author.name}</Name>
                    <Intro>{bookData.book.author.intro}</Intro>
                    <MajorWork>대표저서</MajorWork>
                    {majorData && (
                      <MajorWrapper>
                        {majorData.map(list => {
                          return (
                            <Major
                              key={list.book_id}
                              onClick={() => goToDetail(list.book_id)}
                            >
                              <BookImage alt="bookimage" src={list.img} />
                              <MajorTitle>{list.title}</MajorTitle>
                              <Star>
                                <StarRatings
                                  rating={parseInt(list.rating)}
                                  starRatedColor="orange"
                                  numberOfStars={5}
                                  starDimension="13px"
                                  name="rating"
                                  starSpacing="0.5px"
                                />
                              </Star>
                            </Major>
                          );
                        })}
                      </MajorWrapper>
                    )}
                  </AuthorBox>
                </SectionWrapper>
              </>
            )}
          </BodyWrapper>
          <SideWrapper>
            {chartList.length > 0 && (
              <Recommand>
                <RecommandTitle>인기도서</RecommandTitle>
                <ListWrapper>
                  {chartList.map(list => {
                    return (
                      <List key={list.book_id}>
                        <Chart>{list.num}위</Chart>
                        <BookTitle>{list.title}</BookTitle>
                      </List>
                    );
                  })}
                </ListWrapper>
              </Recommand>
            )}
          </SideWrapper>
        </SecondWrapper>
      </Wrapper>
    </>
  );
};
const Intro = styled.div`
  padding: 0px 0px 20px 10px;
`;
const Nav = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.background};
  color: white;
  font-size: 40px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const SecondWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
`;

const BodyWrapper = styled.div`
  width: 800px;
`;

const SectionWrapper = styled.section`
  padding: 40px 29px;
`;
const SectionTitle = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50px;
  color: rgb(0, 0, 0, 0.5);
  border-bottom: 3px solid rgb(0, 0, 0, 0.5);
  font-size: ${theme.fontSize2};
`;
const AuthorBox = styled.div`
  width: 100%;
`;
const Name = styled.div`
  padding: 30px 0px;
  font-size: 24px;
`;
const MajorWork = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0px;
  width: 100%;
  border-top: 2px solid rgb(0, 0, 0, 0.1);
`;

const SideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  border-left: 1px solid rgb(0, 0, 0, 0.1);
`;

const Recommand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 500px;
  margin-top: 200px;
  margin-left: 30px;
  background-color: rgb(0, 0, 0, 0.03);
`;
const RecommandTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 170px;
  padding-bottom: 2px;
  color: #03539f;
  font-size: 18px;
  font-weight: 800;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.li`
  display: flex;
  justify-content: flex-start;
  width: 200px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
  padding-bottom: 2px;
  margin-top: 20px;
`;

const Chart = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 27px;
  margin-right: 10px;
  color: #03539f;
  font-size: 14px;
  font-weight: 500;
`;

const BookTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
`;

const Major = styled.div`
  width: 120px;
  margin-right: 20px;
`;

const BookImage = styled.img`
  width: 120px;
  height: 170px;
`;

const Star = styled.div`
  margin: 5px 0px 0px 5px;
`;

const MajorTitle = styled(Star)`
  margin-top: 8px;
  font-size: 15px;
`;

const MajorWrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;
export default ProductDetail;
