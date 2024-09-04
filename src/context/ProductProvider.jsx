import React, { createContext, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [singleProduct, setSingleProduct] = useState(null);

	return (
		<ProductContext.Provider value={{ products, setProducts, singleProduct, setSingleProduct }}>
			{children}
		</ProductContext.Provider>
	);
};

export { ProductProvider, ProductContext };
