import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './css/Navbar.css';
import './css/ItemListContainer.css';
import './css/ItemDetailContainer.css';
import ProductsData from './components/ProductsData';

const App = () => {
  const productsData = ProductsData;

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer productsData={productsData} />} />
          <Route path="/category/:id" element={<ItemListContainer productsData={productsData} />} />
          <Route path="/item/:id" element={<ItemDetailContainer productsData={productsData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
