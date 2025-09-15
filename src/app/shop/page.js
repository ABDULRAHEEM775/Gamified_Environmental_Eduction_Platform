"use client";
import React, { useState } from "react";

// ✅ Hardcoded eco-friendly products
const products = [
  { id: 1, name: "Bamboo Water Bottle", mrp: 350, points: 150, img: "/images/bottle.jpg" },
  { id: 2, name: "Recycled Notebook", mrp: 120, points: 50, img: "/images/note-book.png.jpg" },
  { id: 3, name: "Plantable Pens (Set of 5)", mrp: 180, points: 70, img: "/images/pen.jpg" },
  { id: 4, name: "Cotton Tote Bag", mrp: 250, points: 100, img: "/images/bag.jpg" },
  { id: 5, name: "Solar Desk Lamp", mrp: 900, points: 500, img: "/images/lanp.jpg" },
  { id: 6, name: "Lunch Box", mrp: 400, points: 200, img: "/images/lunchbox.jpg" },
  { id: 7, name: "Eco-friendly Phone Case", mrp: 300, points: 120, img: "/images/phone_backcover.jpg" },
  { id: 8, name: "Cloth Mask (Pack of 3)", mrp: 150, points: 60, img: "/images/mask.png" },
  { id: 9, name: "Digital E-Book", mrp: 0, points: 80, img: "/images/ebook.png" },
  { id: 10, name: "Avatar Skin Pack", mrp: 0, points: 50, img: "/images/avator.png" },
  { id: 11, name: "Eco Lunch Combo", mrp: 650, points: 300, img: "/images/ecolunch.png" },
  { id: 12, name: "Plant Kit", mrp: 500, points: 220, img: "/images/plant.jpg" },
];

export default function ShopPage() {
  // ✅ User points (dummy value, update later when connected to profile)
  const [points, setPoints] = useState(1200); // <-- change this later
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Add to cart
  const addToCart = (product, type) => {
    if (type === "points" && product.points > points) return;
    setCart([...cart, { ...product, type }]);
  };

  // ✅ Checkout
  const checkout = () => {
    let totalPoints = cart
      .filter((item) => item.type === "points")
      .reduce((sum, item) => sum + item.points, 0);

    if (totalPoints > points) {
      alert("Not enough points!");
      return;
    }

    setPoints(points - totalPoints);
    setCart([]);
    setIsCartOpen(false);
    alert("Checkout successful!");
  };

  return (
    <div className="flex min-h-screen">
      {/* ===== Left Sidebar ===== */}
      <aside className="w-56 bg-white  p-4 flex flex-col items-start fixed top-0 left-0 h-screen">
        <h1 className="text-2xl font-bold text-green-600 mb-6">Green-vision</h1>
        <nav className="flex flex-col gap-4 w-full">
          <a href="/landing" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">🏠 Learn</a>
          <a href="/diy" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">🛠️ DIY</a>
          <a href="/leaderboards" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">🏆 Leaderboards</a>
          <a href="/quests" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">🎯 Quests</a>
           <a href="/profile" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">👤 Profile</a>
          <a href="/shop" className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 font-semibold">🛒 Shop</a>
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 ml-56 min-h-screen overflow-y-auto p-8 bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-600">Eco Shop</h2>
          <div className="flex items-center space-x-6">
            <span className="text-lg font-semibold">
              Points Balance: <span className="text-green-600">{points}</span>
            </span>
            <button
              className="bg-yellow-500 px-4 py-2 rounded-md shadow hover:bg-yellow-600"
              onClick={() => setIsCartOpen(true)}
            >
              View Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow border p-4 flex flex-col items-center text-center">
              <img src={product.img} alt={product.name} className="w-32 h-32 object-cover mb-4" />
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600">₹{product.mrp}</p>
              <p className="text-green-600">{product.points} Points</p>
              <div className="flex space-x-2 mt-3">
                <button
                  onClick={() => addToCart(product, "money")}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Add (₹)
                </button>
                <button
                  onClick={() => addToCart(product, "points")}
                  disabled={product.points > points}
                  className={`px-3 py-1 rounded ${
                    product.points > points
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Add (Points)
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ===== Cart Sidebar ===== */}
      {isCartOpen && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-6 z-50">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items in cart.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.type === "money" ? `₹${item.mrp}` : `${item.points} Points`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-6">
            <button
              onClick={checkout}
              disabled={cart.length === 0}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400"
            >
              Checkout
            </button>
          </div>
          <button
            className="mt-4 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
            onClick={() => setIsCartOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

