import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/products');
      setProduct(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/products/${id}`);
      console.log(res);
      alert('Deleted successfully');
      // Fetch the updated list of products after deletion
      getProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-price">Price: ${product.price}</div>
          <div className="product-details">
            <span className="product-brand">{product.brand}</span>
            <span className="product-category">{product.category}</span>
          </div>
          <div className="product-rating">Rating: {product.rating}</div>
          <h2 onClick={() => handleDelete(product._id)}>Delete</h2>
        </div>
      ))}
    </div>
  );
};

export default Product;
