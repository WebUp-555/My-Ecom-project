import React from "react";
import productsData from "../Components/data/mock_tshirt_products.json";
import { Link } from "react-router-dom";

const Products = () => {
  return (

    <div className="min-h-screen bg-black text-white flex flex-wrap justify-center gap-6 p-6">
      {productsData.products.map((product) => {
        const image = product.images.find((img) => img.is_default);
        const price = product.variants.find((v) => v.is_enabled)?.price;

        // Dummy discount logic for demo (feel free to replace with actual JSON fields)
        const originalPrice = Math.round(price * 1.6); // example markup
        const discountPercent = Math.round(((originalPrice - price) / originalPrice) * 100);

        return (
          <Link to={`/product/${product.id}`} key={product.id} className="no-underline">

          <div
            key={product.id}
            className="w-[220px] bg-zinc-800 text-black p-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow hover:shadow-xl"
            >
            <img
              src={image?.src}
              alt={product.title}
              className="w-full h-48 object-contain rounded-md mb-3 hover:brightness-110 hover:drop-shadow-[0_0_8px_#ff0000]"
            />

            <div className="text-left">
              <h3 className="text-base font-semibold text-white mb-1">
                {product.title}
              </h3>
              <p
                className="text-sm text-gray-500 mb-2"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white">₹{price}</span>
                <span className="text-sm text-gray-400 line-through">₹{originalPrice}</span>
                <span className="text-sm text-red-500 font-medium">
                  ({discountPercent}% OFF)
                </span>
              </div>
              <button className="mt-3 bg-red-600 text-white hover:bg-red-500 font-bold py-1.5 px-3 rounded-md w-full transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
            </Link>
        );
      })}
    </div>
    
  );
};

export default Products;
