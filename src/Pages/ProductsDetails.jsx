import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../Components/data/mock_tshirt_products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);

  if (!product) {
    return <div className="text-white p-10">Product not found.</div>;
  }

  const image = product.images.find((img) => img.is_default);
  const sizes = product.variants.map((v) => v.title);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-50 ">
        <div className="md:w-1/2">
          <img
            src={image?.src}
            alt={product.title}
            className="w-full h-[400px] object-contain rounded bg-white p-4"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div
            className="text-gray-300 mb-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          <div className="mb-4">
            <span className="font-semibold text-lg">Price: </span>
            <span className="text-green-400 font-bold text-xl">
              ₹{selectedVariant?.price}
            </span>
          </div>

          {/* Size Selector */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Available Sizes & Colors:</h4>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant)}
                  className={`px-3 py-1 border rounded-md text-sm transition-all duration-200 ${
                    selectedVariant?.id === variant.id
                      ? "bg-red-600 text-white border-red-400"
                      : "bg-zinc-800 border-zinc-700"
                  }`}
                >
                  {variant.title}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Quantity:</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="bg-zinc-700 px-3 py-1 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="bg-zinc-700 px-3 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded w-2xs mt-4">
            Add {quantity} to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
