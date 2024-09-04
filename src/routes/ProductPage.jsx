import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx"; 
import FetchSingleItem from "../services/FetchSingleItem";

function ProductPage() {
	const { products, setProducts, singleProduct, setSingleProduct } = useContext(ProductContext);

	const { id } = useParams();

	useEffect(() => {
		async function handleFetch() {
			FetchSingleItem(setSingleProduct, id);
		}
		handleFetch();
	}, [id]);

	if (!singleProduct) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>{singleProduct.title}</h1>
			<p>{singleProduct.rating.rate}</p>
			<img src={singleProduct.image} alt={singleProduct.title} style={{ width: "200px" }} />
			<p>Price: ${singleProduct.price}</p>
			<p>Category: {singleProduct.category}</p>
			<p>{singleProduct.description}</p>
		</div>
	);
}

export default ProductPage;
