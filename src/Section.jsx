import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getHomeSections } from "./api/api";
import { Link } from "react-router-dom";

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
const routeMap = {
  winter: "equipment",
  men: "men",
  women: "women",
  kids: "child",
  child: "child",
  accessories: "equipment"
};
  const handleLeave = () => {
    setCursor((prev) => ({ ...prev, visible: false }));
  };

  const [sections, setSections] = useState([]);

  useEffect(() => {
    getHomeSections().then(setSections);
  }, []);

  return (
    <section className="relative w-full bg-white text-black py-24">

      {/* Custom Cursor */}
      {cursor.visible && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          animate={{ x: cursor.x - 20, y: cursor.y - 20 }}
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

      {/* Sections Grid */}
      <div className="flex flex-wrap justify-center gap-10 px-15">

        {sections.map((item) => (
          <Link
            to={`/${routeMap[item.category] || item.category}`}
            key={item._id}
            className="group block cursor-pointer w-90"
          >
            <img
              src={item.image}
              className="w-full h-120 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              onMouseMove={(e) => handleMove(e, `Shop ${item.category}`)}
              onMouseLeave={handleLeave}
            />

            <h2 className="text-2xl mt-6 mb-3 font-bold">
              {item.title}
            </h2>

            <p className="text-lg mb-3">
              {item.description}
            </p>

            <span className="underline underline-offset-4">
              Shop {item.category}
            </span>
          </Link>
        ))}

      </div>
    </section>
  );
}

export default Section;
