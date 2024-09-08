import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ProductProvider,
  ProductContext,
} from "/src/context/ProductProvider.jsx";

const Header = () => {
  const { products, setProducts, singleProduct, setSingleProduct } =
    useContext(ProductContext);
  return (
    <header className="flex flex-row items-center justify-center w-full h-20 bg-gray-100">
      <div className="flex flex-row w-2/3 h-full px-10 items-center justify-between bg-gray-300 rounded-b-md">
        <p className="flex text-xl font-semibold tracking-wider cursor-default select-none gap-1">
          OZELL<i className="fa-solid fa-comment-dollar text-md"></i>
        </p>
        <nav className="flex gap-8 text-sm font-medium tracking-wide">
          <Link to={"/"}>HOME</Link>
          <Link to={"/"}>STORE</Link>
          <Link to={"CartPage"}>CART</Link>
          <Link
            to={"UserPage"}
            className="fa fa-solid fa-user self-center"
          ></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
