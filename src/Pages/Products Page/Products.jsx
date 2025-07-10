import React from 'react';

const Products = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-red-800 p-6 rounded-2xl shadow-2xl max-w-md w-full">
        <img
          src="https://via.placeholder.com/400x400.png?text=Product+Image"
          alt="T-Shirt"
          className="w-full rounded-xl mb-4 border-4 border-black"
        />
        <h2 className="text-3xl font-bold mb-2">Red Ninja T-Shirt</h2>
        <p className="text-gray-200 mb-4">
          A stylish black and red ninja-themed T-shirt, made from 100% cotton for all-day comfort.
        </p>
        <p className="text-xl font-semibold mb-4">₹799</p>
        <button className="bg-black text-red-500 hover:bg-red-900 hover:text-white font-bold py-2 px-4 rounded-xl w-full transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
