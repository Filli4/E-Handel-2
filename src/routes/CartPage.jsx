import React, { useContext } from "react";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx"; 

function CartPage() {
	const { products, setProducts, singleProduct, setSingleProduct } = useContext(ProductContext);
	return <h2>Product Page</h2>;
}

export default CartPage;
