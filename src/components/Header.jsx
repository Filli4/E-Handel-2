import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx";

const Header = () => {
	const { products, setProducts, singleProduct, setSingleProduct } = useContext(ProductContext);
	return (
		<header>
			<div className="flex flex-row w-full h-full px-10 py-5 items-center justify-between bg-gray-300 rounded-b-md">
				<p className="flex text-xl font-semibold tracking-wider cursor-default select-none gap-1">
					<Link to={"/"}>OZELL<i className="fa-solid fa-comment-dollar text-md"></i></Link>
				</p>
				<nav className="flex gap-8 text-sm font-medium tracking-wide">
					<Link to={"/"}>HOME</Link>
					<Link to={"/"}>STORE</Link>
					<Link to={"CartPage"}>CART</Link>
					<Link to={"CartPage"} className="fa fa-solid fa-user self-center"></Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
