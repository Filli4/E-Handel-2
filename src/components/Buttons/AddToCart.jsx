import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';

export default function AddToCart({ product }) {
  // Access the addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // Local state to manage the visibility of the success message
  const [addmsj, setAddmsj] = useState(false);

  // Function to handle the button click event
  const handleAddToCart = () => {
    // Add the selected product to the cart
    addToCart(product);
    
    // Show the "product added" message
    setAddmsj(true);
    
    // Automatically hide the message after 6 seconds
    setTimeout(() => {
      setAddmsj(false);
    }, 6000);
  };

  return (
    <div>
      {/* Display success message if a product was added */}
      {addmsj && (
        <p className="text-green-500 mt-2 py-3">
          The product has been added to your cart.{" "}
          <a className="font-semibold text-green-700" href="/cart">
            Check your cart page →
          </a>
        </p>
      )}
      {/* Add to Cart button, disabled when the product is being added */}
      <button onClick={handleAddToCart} disabled={addmsj} className="addtocartbtn">
        {addmsj ? `Adding ${product.title}...` : "Add to Cart"}
      </button>
    </div>
  );
}