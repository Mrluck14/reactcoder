import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ productsData }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetailsFromData(id);
  }, [id]);

  const fetchProductDetailsFromData = (productId) => {
    const selectedProduct = productsData.find((product) => product.id === parseInt(productId));
    setProduct(selectedProduct);
  };

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <div className="product-detail">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            View on MercadoLibre
          </a>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;