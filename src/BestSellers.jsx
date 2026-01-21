import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

function BestSellers() {
  const products = [
    {
      id: 1,
      name: "P1 Resort Poles",
      description: "Our classic and award-winning magnetic resort ski poles",
      price: 159,
      images: [
        "/images/redpoles.webp",
        "/images/redpoles2.webp",
        "/images/redpoles3.webp",
      ],
    },
    {
      id: 2,
      name: "Technical Sweater",
      description: "Warm merino wool layers for winter adventures",
      price: 129,
      images: [
        "/images/sweater.webp",
        "/images/sweater2.webp",
      ],
    },
    {
      id: 3,
      name: "Everyday Bag",
      description: "Rugged enough for mountains, sleek for daily commute",
      price: 99,
      images: [
        "/images/bag.webp",
        "/images/3.webp",
      ],
    },
    {
      id: 4,
      name: "Mountain Jacket",
      description: "Built for extreme cold and comfort",
      price: 199,
      images: ["/images/basket.png"],
    },
  ];

  const CARD_WIDTH = 380; // card width + gap
  const VISIBLE_CARDS = 3;

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev < products.length - VISIBLE_CARDS ? prev + 1 : prev
    );
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="mt-20 text-black">

      {/* Header */}
      <div className="flex justify-between items-center px-20 mb-20">
        <h1 className="text-4xl font-bold">Our Bestsellers</h1>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="p-2 border rounded-full hover:bg-black hover:text-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-2 border rounded-full hover:bg-black hover:text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* VIEWPORT */}
      <div className="overflow-hidden px-20">

        {/* SLIDER */}
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * CARD_WIDTH}px)`,
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BestSellers;
