
function Collage() {
  return (
    <div className=" min-h-screen w-full text-white flex items-center justify-center">

        <div className=" h-screen grid grid-cols-2 grid-rows-2 w-full">
            
            <div className="relative w-full h-full overflow-hidden group">
                <img src="/images/sportcoat.webp" alt=""
             className="w-full h-full object-cover object-center
             cursor-pointer hover:scale-105 transition-transform duration-300
             "
            />
             <div className="absolute bottom-8 left-50 text-white space-y-3">
            <h2 className="text-3xl font-bold ml-8">
              The Sport Coat
            </h2>
            <button className="border border-white px-5 py-2 ml-10 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Shop Now
            </button>
          </div>
            </div>
        
            <div className="relative w-full h-full overflow-hidden group">
                <img src="/images/sweater.webp" alt=""
                    className="w-full h-full object-cover object-center
                    cursor-pointer hover:scale-105 transition-transform duration-300
                    "
                    />
                     <div className="absolute bottom-8 left-50 text-white space-y-3">
                        <h2 className="text-3xl font-bold">
                        The Dinner Sweater
                        </h2>
                        <button className="border border-white px-5 py-2 ml-10 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                        Shop Now
                        </button>
                 </div>
            </div>


            <div className="relative w-full h-full overflow-hidden group">
                <img src="/images/resortpoles.webp" alt=""
             className="w-full h-full object-cover object-center
             cursor-pointer hover:scale-105 transition-transform duration-300
             "
            />
             <div className="absolute bottom-8 left-50 text-white space-y-3">
            <h2 className="text-3xl font-bold ml-8">
              P1 Resort Poles
            </h2>
            <button className="border border-white px-5 py-2 ml-10 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Shop Now
            </button>
          </div>
            </div>

            <div className="relative w-full h-full overflow-hidden group">
                <img src="/images/bag.webp" alt=""
             className="w-full h-full object-cover object-center
             cursor-pointer hover:scale-105 transition-transform duration-300
             "
            />
             <div className="absolute bottom-8 left-50 text-white space-y-3">
            <h2 className="text-3xl font-bold ml-2">
              The Day Bag
            </h2>
            <button className="border border-white px-5 py-2 ml-10 font-bold rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Shop Now
            </button>
          </div>
            </div>
        </div>


    </div>
  )
}

export default Collage