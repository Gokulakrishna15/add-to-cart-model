import React from "react";
const CartModal = ({ cartItems, onClose, removeFromCart }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
            <span className="flex-1 ml-4">{item.title}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <button
        onClick={onClose}
        className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
      >
        Close
      </button>
    </div>
  </div>
);

export default CartModal;