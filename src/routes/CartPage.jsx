import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  // calculate to total price on cart products
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handleDelete = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  if (cartItems.length === 0) {
    return<div className="text-center py-8"><h1>Your cart is empty. Really?</h1><a className="bg-indigo-600 shadow-md font-semibold p-3 rounded-md hover:bg-indigo-500 text-sm text-white mt-5" href='/shop'>Start shopping now.</a></div>;
  }

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 border-b">Image</th>
            <th className="py-2 border-b">Product Name</th>
            <th className="py-2 border-b">Price</th>
            <th className="py-2 border-b">Quantity</th>
            <th className="py-2 border-b">Total</th>
            <th className="py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="py-2 border-b">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mx-auto" />
              </td>
              <td className="py-2 border-b">{item.title}</td>
              <td className="py-2 border-b">${item.price}</td>
              <td className="py-2 border-b">{item.quantity}</td>
              <td className="py-2 border-b">${(item.price * item.quantity).toFixed(2)}</td>
              <td className="py-2 border-b">
                <button 
                  onClick={() => handleDelete(item.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right font-bold py-2">Grand Total:</td>
            <td colSpan="2" className="text-center font-bold py-2 text-2xl">
              ${calculateTotalPrice().toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CartPage;
