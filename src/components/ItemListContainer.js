import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import productsData from './ProductsData';

const ItemListContainer = () => {
  const location = useLocation();
  const category = location.pathname.split('/category/')[1];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsFromData(category);
  }, [category]);

  const fetchProductsFromData = (category) => {
    const filteredProducts = category
      ? productsData.filter((product) => product.category === category)
      : productsData;

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2>Lista de productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {product.detail ? (
              <Link to={`/item/${product.id.toString()}`}>Ver más</Link>
            ) : (
              <p>Cargando detalle...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;