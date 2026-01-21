import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Globe, ChevronDown } from "lucide-react";

function Footer() {
  const options = [
    "United States ($)",
    "Canada ($)",
    "India (₹)",
    "Australia ($)"
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("India (₹)");
  const dropdownRef = useRef(null);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full text-black mb-8">

      {/* Shipping Info */}
      <div className="flex px-20 py-20 gap-10 border-t">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold">
            Free Shipping & Extended Returns
          </h1>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl">
            Get free shipping for orders over $120. Plus, if you bought a gift
            for the skier in your life this holiday season, take until January
            5th for returns or exchanges.
          </h3>
        </div>
      </div>

      {/* Email Signup */}
      <div className="w-[90%] h-40 px-2 bg-blue-300 m-auto rounded-4xl flex items-center justify-between">
        <input
          type="text"
          placeholder="Drop your Email for $15"
          className="
            w-[85%] h-full px-10 text-7xl
            border-0 outline-none focus:ring-0
            placeholder:text-black bg-transparent
          "
        />
        <div className="w-[15%] h-full flex items-center justify-center">
          <ArrowRight size={100} strokeWidth={1} className="cursor-pointer" />
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-26 border-t w-full px-20 py-10 flex gap-48 text-3xl">
        <div>
          <h3 className="relative cursor-pointer font-bold group mb-2">Shop All
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
          <h3 className="relative cursor-pointer font-medium group mb-2">FAQ
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
          <h3 className="relative cursor-pointer font-medium group mb-2">Return
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
          <h3 className="relative cursor-pointer font-medium group mb-2">Gift Cards
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
        </div>

        <div>
           <h3 className="relative cursor-pointer font-bold group mb-2">About
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
           <h3 className="relative cursor-pointer font-medium group mb-2">Stockists
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
           <h3 className="relative cursor-pointer font-medium group mb-2">Jobs
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
           <h3 className="relative cursor-pointer font-medium group mb-2">Press
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
        </div>

        <div>
           <h3 className="relative cursor-pointer font-bold group mb-2">Social
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
           <h3 className="relative cursor-pointer font-medium group mb-2">Instagram
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
           <h3 className="relative cursor-pointer font-medium group mb-2">Facebook
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
           <h3 className="relative cursor-pointer font-medium group mb-2">Twitter
            <span className="
            absolute left-0 bottom-0
            h-0.5 w-0 bg-black
            transition-all duration-300
            group-hover:w-full
        "></span>
          </h3>
          
        </div>
      </div>

      {/* Country Dropdown */}
      <div
        ref={dropdownRef}
        className="relative px-20 mt-10 z-100 h-10 flex align-middle justify-between" >
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="
            flex items-center gap-4
            border-2 border-black
            rounded-full
            px-6 py-3
            text-2xl
            cursor-pointer
            hover:bg-gray-100
            transition
            bg-white
          "
        >
          <Globe size={24} strokeWidth={1.5} />
          <span>{selected}</span>

          {/* Chevron rotates */}
          <ChevronDown
            size={22}
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            className="
              absolute bottom-full mb-2 
              w-65
              bg-white
              border border-black
              rounded-2xl
              shadow-2xl
              z-999
            "
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="
                  px-6 py-4 text-xl
                  cursor-pointer
                  hover:bg-gray-100
                  transition
                "
              >
                {option}
              </div>
            ))}
          </div>
        )}

        <div className="flex align-middle gap-28 mt-2">
            <h3>FashionHunt Equipment Company 2026</h3>

            <h3>Privacy</h3>
            <h3>Cookies</h3>
            <h3>Terms</h3>
        </div>
      </div>

    </div>
  );
}

export default Footer;
