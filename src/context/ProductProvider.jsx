import React, { createContext, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [user, setUser] = useState({ name: "Peter", lastName: "Skog" });

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        singleProduct,
        setSingleProduct,
        user,
        setUser,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
