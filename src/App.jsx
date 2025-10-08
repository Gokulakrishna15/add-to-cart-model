import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Add to cart with duplicate check
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} onCartClick={() => setShowModal(true)} />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {showModal && (
        <CartModal
          cartItems={cart}
          onClose={() => setShowModal(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;