import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export default function UserPage() {
  const {
    products,
    setProducts,
    singleProduct,
    setSingleProduct,
    user,
    setUser,
  } = useContext(ProductContext);

  console.log(user.name, user.lastName);

  return (
    <>
      <p>Mitt namn är {user.name}</p>
    </>
  );
}
