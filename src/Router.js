import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsList from './pages/ProductsList/ProductsList';
import MyLibrary from './pages/MyLibrary/MyLibrary';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/myLibrary" element={<MyLibrary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
