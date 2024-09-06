import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx";
import { CartContext } from '../context/CartProvider';


const Header = () => {
	const { products, setProducts, singleProduct, setSingleProduct } = useContext(ProductContext);
	
	// calculate and show total cart item in badge
	const { cartItems } = useContext(CartContext);
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header>
			<div className="flex flex-row w-full h-full px-10 py-5 items-center justify-between bg-gray-300 rounded-b-md">
				<p className="flex text-xl font-semibold tracking-wider cursor-default select-none gap-1">
					<Link to={"/"}>OZELL<i className="fa-solid fa-comment-dollar text-md"></i></Link>
				</p>
				<nav className="flex gap-8 text-sm font-medium tracking-wide">
					<Link to={"/"}>HOME</Link>
					<Link to={"/shop"}>SHOP</Link>
					<div className="relative mr-2">
						<Link to={"/cart"}>CART
						{/* Badge: show if product have in cart */}
								{totalItems > 0 && (
									<span className="absolute top-0 right-25 bg-red-500 text-white rounded-full text-xs px-2 py-1">
										{totalItems}
									</span>
							)}
							</Link>
					</div>
					<Link to={"/cart"} className="fa fa-solid fa-user self-center"></Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
