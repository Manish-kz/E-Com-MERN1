import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../api/api";

function Child() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    getProductsByCategory("kids").then(setProducts);
  }, []);

  return (
    <div className="text-black">

      {/* Heading */}
      <div className="px-6 sm:px-10 lg:px-20 mt-42 mb-14">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          The Journal
        </h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base lg:text-lg">
          Travel guides from the field, deep dives on new product drops, and stories from the Yardsale community.
        </p>
      </div>

      {/* Journal Grid */}
      <div className="px-6 sm:px-10 lg:px-20 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20">

          {products.map((item) => (
              <div key={item._id} className="group cursor-pointer"
              onClick={() => navigate(`/product/${item._id}`)}
              >

              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px]
                             object-cover transition-transform duration-700
                             group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <h2 className="mt-6 font-semibold text-lg sm:text-xl">
                {item.title}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Child;
