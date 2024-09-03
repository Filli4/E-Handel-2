import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";
import CartPage from "./routes/CartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
