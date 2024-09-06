import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const Header = () => {
	// calculate and show total cart item in badge
	const { cartItems } = useContext(CartContext);
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header>
			<div className="flex flex-row w-full h-full px-10 py-5 items-baseline justify-between bg-gray-300 rounded-b-md">
				<p className="flex text-xl font-semibold tracking-wider cursor-default select-none gap-1">
					<Link to={"/"}>OZELL</Link>
					<i className="fa-solid fa-comment-dollar text-md"></i>
				</p>
				<nav className="flex gap-8 text-sm font-medium tracking-wide">
					<Link to={"/"}>HOME</Link>
					<Link to={"/shop"}>SHOP</Link>
					<div className="relative mr-2">
						<Link to={"/cart"}>
							CART
							{/* Badge: show if product have in cart */}
							{totalItems > 0 && (
								<span className="flex justify-center items-center absolute top-[-10px] right-[-16px] bg-red-500 text-white rounded-full text-[8px] w-[18px] h-[18px]">
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
