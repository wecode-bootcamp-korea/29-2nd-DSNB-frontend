import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import MyLibrary from './pages/MyLibrary/MyLibrary';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Nav />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/myLibrary" element={<MyLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
