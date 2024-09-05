import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";
import CartPage from "./routes/CartPage";

function App() {
  return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/cartpage" element={<CartPage />} />
				{/* <Route path="/productPage" element={<ProductPage />} /> <-- use for no product found */}
				<Route path="/product/:id" element={<ProductPage />} />
			</Routes>
		</main>
	);
}

export default App;
