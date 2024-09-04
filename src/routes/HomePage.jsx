import React, { useContext } from "react";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx";
import React from "react";
import Store from "../Store"

function HomePage() {
	const { products, setProducts, singleProduct, setSingleProduct } = useContext(ProductContext);

	return (
		<div className="flex items-center justify-center  bg-gray-100">
		
			<Store/>
		</div>
	);
}

export default HomePage;
