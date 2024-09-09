import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Hook to get the dynamic route parameter (product ID)
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx"; // Context to manage product state
import FetchSingleItem from "../services/FetchSingleItem"; // Service to fetch a single product
import AddToCart from "../components/Buttons/AddToCart.jsx"; // AddToCart component for adding product to cart

function ProductPage() {
  // Extracting product-related state from ProductContext
  const { products, setProducts, singleProduct, setSingleProduct } = useContext(ProductContext);

  // Getting the product ID from the route parameters
  const { id } = useParams();

  // useEffect to fetch the product details based on the product ID when the component loads
  useEffect(() => {
    async function handleFetch() {
      // Fetch a single product using the product ID
      FetchSingleItem(setSingleProduct, id);
    }
    handleFetch();
  }, [id]); // Dependency array ensures the fetch runs when the ID changes

  // Display a loading message until the product data is available
  if (!singleProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row py-8 gap-3">
      {/* Left side: Product image */}
      <div className="w-1/2 p-4">
        <div className="max-w-96">
          <img className="object-cover" src={singleProduct.image} alt={singleProduct.title} />
        </div>
      </div>
      
      {/* Right side: Product details */}
      <div className="w-1/2 flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-5">
          {/* Product title */}
          <h1>{singleProduct.title}</h1>
          
          {/* Product price */}
          <p className="pricetag">{singleProduct.price} <span>usd</span></p>

          {/* Product rating and category */}
          <div className="flex flex-col justify-between">
            <p>Rating: {singleProduct.rating.rate}</p>
            <p>Category: {singleProduct.category}</p>
          </div>

          {/* Product description */}
          <h3>Description</h3>
          <p>{singleProduct.description}</p>
        </div>

        {/* Add to Cart button, passing the product details */}
        <AddToCart product={singleProduct} />
      </div>
    </div>
  );
}

export default ProductPage;
