import { useState } from "react";
import { motion } from "framer-motion";

function Section() {
  const [cursor, setCursor] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const handleMove = (e, text) => {
    setCursor({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      text,
    });
  };

  const handleLeave = () => {
    setCursor((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section className="relative w-full bg-white text-black py-24">

      {/* Custom Cursor */}
      {cursor.visible && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          animate={{ x: cursor.x-20, y: cursor.y-20}}
          transition={{ type: "tween", stiffness: 300, damping: 25 }}
        >
          <div className="px-5 py-2 bg-black text-white text-sm rounded-full shadow-xl backdrop-blur-md">
            {cursor.text}
          </div>
        </motion.div>
      )}

      <h1 className="text-4xl font-bold px-15 mb-20">
        All-new gear for winter adventures
      </h1>

      {/* Products grid */}
      <div className="flex flex-wrap justify-center gap-10 px-15">

        {/* Card 1 */}
        <div className="w-90">
          <img
            src="/images/1.webp"
            className="w-full h-120 object-cover rounded-xl transition-transform duration-500 hover:scale-105 cursor-none"
            onMouseMove={(e) => handleMove(e, "View Ski Poles")}
            onMouseLeave={handleLeave}
          />
          <h2 className="text-2xl mt-6 mb-3 font-bold">
            Ski Poles that don't suck
          </h2>
          <p className="text-lg mb-3">
            Our award-winning magnetic poles for double blacks and bunny slopes.
          </p>
          <a className="underline underline-offset-4 cursor-pointer">
            Shop Ski Poles
          </a>
        </div>

        {/* Card 2 */}
        <div className="w-90">
          <img
            src="/images/2.webp"
            className="w-full h-120 object-cover rounded-xl transition-transform duration-500 hover:scale-105 cursor-none"
            onMouseMove={(e) => handleMove(e, "Explore Apparel")}
            onMouseLeave={handleLeave}
          />
          <h2 className="text-2xl mt-6 mb-3 font-bold">
            Apparel that takes you from the mountain to the lodge
          </h2>
          <p className="text-lg mb-3">
            Cozy merino wool layers for cold days outside
          </p>
          <a className="underline underline-offset-4 cursor-pointer">
            Shop Technical Apparel
          </a>
        </div>

        {/* Card 3 */}
        <div className="w-90">
          <img
            src="/images/3.webp"
            className="w-full h-120 object-cover rounded-xl transition-transform duration-500 hover:scale-105 cursor-none"
            onMouseMove={(e) => handleMove(e, "Shop Bags")}
            onMouseLeave={handleLeave}
          />
          <h2 className="text-2xl mt-6 mb-3 font-bold">
            Your new do-it-all bag
          </h2>
          <p className="text-lg mb-3">
            Rugged enough for the mountains, but sleek enough for everyday life.
          </p>
          <a className="underline underline-offset-4 cursor-pointer">
            Shop Bags
          </a>
        </div>

      </div>
    </section>
  );
}

export default Section;
