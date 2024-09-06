import { useContext, useEffect } from "react";
import React from "react";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx"; 
import FetchItems from "../services/FetchItems";
import Card from "../components/Card";

export default function Shop() {

	const { products, setProducts } = useContext(ProductContext);

	useEffect(() => {
		async function HandleFetch() {
			FetchItems(setProducts, 20);
		}
		HandleFetch();
	}, []);

	return (
		<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
			{products.map((product) => (
				<Card
					key={product.id}
					imgSrc={product.image}
					title={product.title}
					price={product.price}
					id={product.id}
				/>
			))}
		</div>
	);
}
