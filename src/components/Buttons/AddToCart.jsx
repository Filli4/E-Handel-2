import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';

export default function AddToCart({ product }) {
  const { addToCart } = useContext(CartContext);
  const [addmsj, setAddmsj] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddmsj(true);
    
    // hide msj after 6 seconds
    setTimeout(() => {
      setAddmsj(false);
    }, 6000);
  };

  return (
		<div>
			{addmsj && (
				<p className="text-green-500 mt-2 py-3">
					The product has been added to your cart.{" "}
					<a className="font-semibold text-green-700" href="/cart">
						Check your cart page →
					</a>
				</p>
			)}
			<button onClick={handleAddToCart} disabled={addmsj} className="addtocartbtn">
				{addmsj ? `Adding ${product.title}...` : "Add to Cart"}
			</button>
		</div>
	);
}