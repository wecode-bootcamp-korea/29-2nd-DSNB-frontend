import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router';

const BookCard = ({ posts, loading, setIsListModalVisible }) => {
  const navigate = useNavigate();

  if (loading) {
    return <LoadingMessage>불러오는 중..</LoadingMessage>;
  }

  const toggleModal = () => {
    setIsListModalVisible(prev => !prev);
  };
  return (
    <ProductCardWrapper>
      {posts?.map(
        ({ book_id, img, title, author_name, rating, review_count }) => (
          <ProductCard
            key={book_id}
            onClick={() => {
              navigate(`/productDetail/${book_id}`);
              toggleModal();
            }}
          >
            <ProductCardImg>
              <CardImg src={img} alt="BookImgByCategory" />
            </ProductCardImg>
            <ProductName>{title}</ProductName>
            <ProductAuthor>{author_name}</ProductAuthor>
            <RatingWrapper>
              <StarRatings
                rating={parseInt(rating)}
                starRatedColor="Orange"
                nubmerOfStars={5}
                starDimension="10px"
                name="rating"
                starSpacing="0"
              />
              <ReviewNums>{review_count}명</ReviewNums>
            </RatingWrapper>
          </ProductCard>
        )
      )}
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 70vh;
  margin-left: 2.5vw;
  overflow-y: auto;
  overscroll-behavior-y: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LoadingMessage = styled.h1`
  padding: 5vh 0 0 5vw;
`;

const ProductCard = styled.div`
  margin: 0vh 4vw 0vh 1vw;
  cursor: pointer;
`;

const ProductCardImg = styled.div`
  height: 24vh;
  width: 10vw;
  margin-bottom: 0vh;
  box-shadow: 2px 1px 4px 0px grey;
`;

const CardImg = styled.img`
  height: 100%;
  width: 100%;
`;

const ProductName = styled.p`
  padding: 1vh 0 0.2vh 0.2vh;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 16px;
`;

const ProductAuthor = styled.span`
  padding-left: 0.2vh;
  color: #666;
  font-size: 13px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 10vw;
  padding-left: 0.2vh;
  overflow: hidden;
`;

const ReviewNums = styled.span`
  margin-left: 0.5vw;
  color: rgb(142, 142, 142);
  font-size: 12px;
`;

export default BookCard;
