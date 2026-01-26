import { useNavigate } from "react-router-dom";
function Collage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full text-white flex items-center justify-center">

      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 w-full h-auto sm:h-screen">

        {/* Card 1 */}
        <div className="relative w-full h-[50vh] sm:h-full overflow-hidden group">
          <img
            src="/images/sportcoat.webp"
            alt="Sport Coat"
            className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              The Sport Coat
            </h2>
            <button className="border border-white px-5 py-2 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            onClick={() => navigate(`/men`)}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full h-[50vh] sm:h-full overflow-hidden group">
          <img
            src="/images/sweater.webp"
            alt="Dinner Sweater"
            className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              The Dinner Sweater
            </h2>
            <button className="border border-white px-5 py-2 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            onClick={() => navigate(`/women`)}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full h-[50vh] sm:h-full overflow-hidden group">
          <img
            src="/images/resortpoles.webp"
            alt="Resort Poles"
            className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              P1 Resort Poles
            </h2>
            <button className="border border-white px-5 py-2 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer"
             onClick={() => navigate(`/child`)}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative w-full h-[50vh] sm:h-full overflow-hidden group">
          <img
            src="/images/bag.webp"
            alt="Day Bag"
            className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              The Day Bag
            </h2>
            <button className="border border-white px-5 py-2 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            onClick={() => navigate(`/equipment`)}
            >
              Shop Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Collage;
