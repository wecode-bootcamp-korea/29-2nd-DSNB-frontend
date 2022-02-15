import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import MyLibrary from './pages/MyLibrary/MyLibrary';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/myLibrary" element={<MyLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
