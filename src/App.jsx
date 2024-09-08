import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";
import CartPage from "./routes/CartPage";
import UserPage from "./routes/UserPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userPage" element={<UserPage />} />

        <Route path="/cartPage" element={<CartPage />} />
        {/* <Route path="/productPage" element={<ProductPage />} /> <-- use for no product found */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
