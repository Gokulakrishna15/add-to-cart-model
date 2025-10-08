import React from "react";
const Navbar = ({ cartCount, onCartClick }) => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">🛍️ Fake Store</h1>
    <button
      onClick={onCartClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Cart ({cartCount})
    </button>
  </nav>
);

export default Navbar;