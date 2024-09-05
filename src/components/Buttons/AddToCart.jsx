import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';

export default function AddToCart({ product }) {
  const { addToCart } = useContext(CartContext);
  const [addmsj, setAddmsj] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddmsj(true);
    
    // hide msj after 3 seconds
    setTimeout(() => {
      setAddmsj(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleAddToCart} className="addtocartbtn">
        Add to Cart
      </button>
      {addmsj && (
        <p className="text-green-500 mt-2">
          The product has been added to your cart.
        </p>
      )}
    </div>
  );
}
