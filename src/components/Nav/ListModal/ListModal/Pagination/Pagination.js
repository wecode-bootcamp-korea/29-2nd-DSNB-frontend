import styled from 'styled-components';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PageItem>
        {pageNumbers?.map(number => (
          <Page key={number}>
            <Link onClick={() => paginate(number)} href="#DSNBook">
              {number}
            </Link>
          </Page>
        ))}
      </PageItem>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding-top: 1vh;
  margin-bottom: 5vh;
  margin-left: 13vw;
`;

const PageItem = styled.ul`
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 2.5vh;
`;

const Page = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.2vw;
  margin-right: 1vw;
  border: solid 1px grey;
  border-radius: 10%;
  font-size: 16px;

  &:hover {
    background-color: lightgrey;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;
export default Pagination;
