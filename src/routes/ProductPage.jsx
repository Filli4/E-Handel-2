import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx"; 
import FetchSingleItem from "../services/FetchSingleItem";
import AddToCart from "../components/Buttons/AddToCart.jsx";

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
		<div className="flex flex-row py-8 gap-3">
			<div className="w-1/2 p-4">
				<div className="max-w-96">
					<img className="object-cover " src={singleProduct.image} alt={singleProduct.title} />
				</div>
			</div>
			<div className="w-1/2 flex flex-col justify-between gap-3">
				<div className="flex flex-col gap-5">
					<h1>{singleProduct.title}</h1>
					<p className="pricetag">{singleProduct.price} <span>sek</span></p>
					<div className="flex flex-col justify-between">
						<p>Rating: {singleProduct.rating.rate}</p>
						<p>Category: {singleProduct.category}</p>
					</div>
					
					<h3>Description</h3>
					<p>{singleProduct.description}</p>
				</div>
				<AddToCart product={singleProduct} />
			</div>
		</div>
	);
}

export default ProductPage;
