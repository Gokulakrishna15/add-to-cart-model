import React from "react";
const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
    <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
    <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
    <p className="text-green-600 font-bold">${product.price}</p>
    <button
      onClick={() => addToCart(product)}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;