import React, { useContext } from "react";
import {
  ProductProvider,
  ProductContext,
} from "/src/context/ProductProvider.jsx";

function HomePage() {
  const { products, setProducts, singleProduct, setSingleProduct } =
    useContext(ProductContext);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-500">Home Page</h2>
    </div>
  );
}

export default HomePage;
