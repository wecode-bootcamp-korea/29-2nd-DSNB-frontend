import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductCategoryList from './ProductCategoryList/ProductCategoryList';
import FilterButton from './FilterButtons/FilterButton';
import BookCard from './BookCard/BookCard';
import Pagination from './Pagination/Pagination';

const ListModal = ({ setIsListModalVisible }) => {
  const [category, setCategory] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const paginate = pageNubmer => setCurrentPage(pageNubmer);

  const fetchFilter = async () => {
    const res = await axios.get(`http://10.58.7.150:8000/books/nav`);
    setFilter(res.data.order);
  };

  const fetchCategories = async () => {
    const res = await axios.get('http://10.58.7.150:8000/books/nav');
    setCategory(res.data.categories);
    setLoading(false);
  };

  const fetchProducts = async () => {
    const res = await axios.get('http://10.58.7.150:8000/books');
    setPosts(res.data.books);
  };

  const sortByCategory = async category => {
    const res = await axios.get('http://10.58.7.150:8000/' + category);
    setPosts(res.data.books);
  };

  const sortByFitler = async () => {
    const res = await axios.get(`http://10.58.7.150:8000/books?order=latest`);
    setPosts(res.data.books);
  };

  useEffect(() => {
    fetchCategories();
    fetchFilter();
    fetchProducts();
  }, []);

  const sortPriceToLow = () => {
    const priceToLow = posts.books?.sort((a, b) => b.max_price - a.max_price);
    setPosts({ books: priceToLow });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <ProductFilterWrapper>
      <ProductCategoryList
        category={category}
        sortByCategory={sortByCategory}
        setPosts={setPosts}
        setLoading={setLoading}
      />
      <SectionWrapper>
        <FilterButton
          posts={posts}
          filter={filter}
          sortByFitler={sortByFitler}
          sortPriceToLow={sortPriceToLow}
        />
        <BookCard
          posts={currentPosts}
          loading={loading}
          setIsListModalVisible={setIsListModalVisible}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </SectionWrapper>
    </ProductFilterWrapper>
  );
};

const ProductFilterWrapper = styled.main`
  display: flex;
  height: 78vh;
  width: 90vw;
  margin: 3vh auto;
  box-shadow: rgb(0 0 0 / 20%) 3px 3px 10px 3px;
  overflow: hidden;
`;

const SectionWrapper = styled.section``;

export default ListModal;
