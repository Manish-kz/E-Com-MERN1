import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/UseCart.jsx";
import { getProductById } from "../api/api";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("S");
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getProductById(id)
      .then((data) => {
        console.log("PRODUCT API RESPONSE:", data);
        setProduct(data);
      })
      .catch((err) => console.error("Product fetch error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="p-10 text-lg">Loading product...</p>;
  }

  if (!product || !product._id) {
    return <p className="p-10 text-lg">Product not found.</p>;
  }

  return (
    <section className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT IMAGE */}
      <div className="bg-[#ededed] flex items-center justify-center p-12">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[80vh] object-contain"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col px-10 md:px-16 lg:px-20 pt-36 mt-10 text-black">

        <p className="text-sm tracking-widest uppercase mb-6 text-gray-500">
          Fashion Hunt.
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-3">
          {product.title}
        </h1>

        <p className="text-lg font-semibold mb-6">
          ₹{product.price}
        </p>

        <p className="text-gray-600 leading-relaxed max-w-xl mb-10">
          {product.description}
        </p>

        {/* SIZE SELECTOR */}
        <div className="flex items-center gap-4 mb-12 flex-wrap">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-14 h-12 rounded-lg border text-sm font-semibold transition
                ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "border-gray-300 hover:border-black"
                }`}
            >
              {size}
            </button>
          ))}

          <span className="text-sm underline cursor-pointer ml-2">
            Size Chart
          </span>
        </div>

        <button
          className="w-full max-w-xl bg-[#2a1a08] hover:bg-black transition text-white py-5 rounded-full text-lg font-medium cursor-pointer"
          onClick={() => addToCart(product, selectedSize)}
        >
          Add to Bag
        </button>

        <p className="text-sm text-center mt-4 text-gray-600 max-w-xl">
          Free & Easy Return or Exchange Coverage for $2.98
        </p>
      </div>
    </section>
  );
}
