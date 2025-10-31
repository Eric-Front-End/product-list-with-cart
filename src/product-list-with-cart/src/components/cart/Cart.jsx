import React from 'react';
import { useCart } from '../../hooks/useCart';

export const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Clear Cart</button>
        </div>
      )}
    </div>
  );
};