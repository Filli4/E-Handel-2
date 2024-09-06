import React, { createContext, useState } from "react";

// Skapa en context för produkter med ett initialt värde av null
const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
	// useState för att hantera listan med produkter
	const [products, setProducts] = useState([]);
	// useState för att hantera en enskild produkt
	const [singleProduct, setSingleProduct] = useState(null);

	// Retunera en provider med alla states och deras setters
	return (
		<ProductContext.Provider value={{ products, setProducts, singleProduct, setSingleProduct }}>
			{children}
		</ProductContext.Provider>
	);
};

export { ProductProvider, ProductContext };
