import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import PopularBookList from './pages/ProductList/PopularBookList';
import BestSellerList from './pages/ProductList/BestSellerList';
import BestSellerCarousel from './pages/ProductList/BestSellerCarousel';
import BookCarousel from './pages/ProductList/BookCarousel';
import IconList from './pages/ProductList/IconList';
import MyLibrary from './pages/MyLibrary/MyLibrary';
import MainBanner from './pages/ProductList/MainBanner';
import ProductList from './pages/ProductList/ProductList';
import PopularBooks from './pages/ProductList/PopularBooks';
import BestSellers from './pages/ProductList/BestSellers';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        {/* <Route path="/popularbooklist" element={<PopularBookList />} />
        

        <Route path="/BestSellerList" element={<BestSellerList />} />
        <Route path="/BestSellerCarousel" element={<BestSellerCarousel />} />
        <Route path="/BookCarousel" element={<BookCarousel />} />
        <Route path="/mainbanner" element={<MainBanner />} />
        <Route path="/iconlist" element={<IconList />} /> */}
        <Route path="/main" element={<ProductList />} />
        {/* <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/popularbooks" element={<PopularBooks />} /> */}
        <Route path="/myLibrary" element={<MyLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
