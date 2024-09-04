import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error fetching data:", err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
			<h1>{product.title}</h1>
			<p>{product.rating.rate }</p>
			<img src={product.image} alt={product.title} style={{ width: '200px' }} />
			<p>Price: ${product.price}</p>
			<p>Category: {product.category}</p>
      <p>{product.description}</p>
      
    </div>
  );
}

export default ProductPage;
