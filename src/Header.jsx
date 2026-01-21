// import React, { useState } from "react";
// import { ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <section className="relative w-full overflow-hidden">

//       {/* HERO WRAPPER */}
//       <div className="relative w-full aspect-4/5 sm:aspect-video lg:h-screen">

//         {/* VIDEO */}
//         <video
//           src="/public/video.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30" />

//        {/* NAVBAR */}
// <header className="absolute top-6 left-0 w-full z-50 text-black">
//   <div className="max-w-6xl mx-auto px-4">

//     <div className="relative flex items-center h-14 rounded-full bg-[#fffbe8] px-5">

//       {/* LEFT */}
//       <div className="flex items-center gap-6">
//         {/* Hamburger (mobile only) */}
//         <button
//           className="lg:hidden relative w-6 h-6 cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="absolute top-1/2 w-full h-0.5 bg-black -translate-y-2 transition-all" />
//           <span className="absolute top-1/2 w-full h-0.5 bg-black transition-all" />
//           <span className="absolute top-1/2 w-full h-0.5 bg-black translate-y-2 transition-all" />
//         </button>

//         {/* DESKTOP NAV (RESTORED) */}
//        <nav className="hidden lg:flex gap-6 text-sm font-medium">
//           {[
//             { name: "Equipment", path: "/equipment" },
//             { name: "Men", path: "/men" },
//             { name: "Women", path: "/women" },
//             { name: "Child", path: "/child" },
//           ].map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="relative cursor-pointer group"
//             >
//               {item.name}
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* CENTER LOGO */}
//       <div className="absolute left-1/2 -translate-x-1/2 font-bold text-xl">
//         Fashion Hunt
//       </div>

//       {/* RIGHT */}
//       <div className="ml-auto flex items-center gap-2">
//         <ShoppingBag size={24} />
//       </div>

//     </div>

//     {/* MOBILE DROPDOWN (unchanged) */}
//     <div
//       className={`overflow-hidden transition-all duration-500 ease-out cursor-pointer lg:hidden ${
//         menuOpen ? "max-h-100 mt-4" : "max-h-0"
//       }`}
//     >
//       <div className="bg-[#fffbe8] rounded-3xl px-6 py-8 space-y-6">
//         {["Equipment", "Men", "Women", "Stuff"].map((item, i) => (
//           <div
//             key={item}
//             className="flex items-center justify-between text-4xl font-serif text-[#2b1d0e] opacity-0 animate-menu"
//             style={{ animationDelay: `${i * 100 + 100}ms` }}
//           >
//             <span>{item}</span>
//             <span className="text-3xl">+</span>
//           </div>
//         ))}
//       </div>
//     </div>

//   </div>
// </header>


//         {/* HERO CONTENT */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold max-w-3xl">
//             Clever gear for epic days outside
//           </h1>

//           <div className="mt-6 flex gap-4">
//             <button className="bg-white text-black px-6 py-3 rounded-full">
//               Shop Poles
//             </button>
//             <button className="border border-white px-6 py-3 rounded-full">
//               Shop Apparel
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* ANIMATION */}
//       <style>
//         {`
//           @keyframes menuFade {
//             from {
//               opacity: 0;
//               transform: translateY(12px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-menu {
//             animation: menuFade 0.4s ease forwards;
//           }
//         `}
//       </style>

//     </section>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 w-full z-50 text-black">
      <div className="max-w-6xl mx-auto px-4">

        <div className="relative flex items-center h-14 rounded-full bg-[#fffbe8] px-5">

          {/* LEFT */}
          <div className="flex items-center gap-6">
            {/* Hamburger (mobile only) */}
            <button
              className="lg:hidden relative w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="absolute top-1/2 w-full h-0.5 bg-black -translate-y-2 transition-all" />
              <span className="absolute top-1/2 w-full h-0.5 bg-black transition-all" />
              <span className="absolute top-1/2 w-full h-0.5 bg-black translate-y-2 transition-all" />
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex gap-6 text-sm font-medium">
              {[
                { name: "Equipment", path: "/equipment" },
                { name: "Men", path: "/men" },
                { name: "Women", path: "/women" },
                { name: "Child", path: "/child" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative cursor-pointer group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 font-bold text-xl">
            Fashion Hunt
          </div>

          {/* RIGHT */}
          <div className="ml-auto flex items-center gap-2">
            <ShoppingBag size={24} />
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out lg:hidden ${
            menuOpen ? "max-h-100 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-[#fffbe8] rounded-3xl px-6 py-8 space-y-6">
            {["Equipment", "Men", "Women", "Stuff"].map((item, i) => (
              <div
                key={item}
                className="flex items-center justify-between text-4xl font-serif text-[#2b1d0e] opacity-0 animate-menu"
                style={{ animationDelay: `${i * 100 + 100}ms` }}
              >
                <span>{item}</span>
                <span className="text-3xl">+</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes menuFade {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-menu {
            animation: menuFade 0.4s ease forwards;
          }
        `}
      </style>
    </header>
  );
}

export default Header;
