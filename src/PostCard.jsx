import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const postCards = [
  { id: 1, title: "Sienna in Chamonix", image: "/images/postcard.jpg" },
  { id: 2, title: "Anya in Breckenridge", image: "/images/postcard1.jpg" },
  { id: 3, title: "Nika in the Dolomites", image: "/images/postcard2.jpg" },
  { id: 4, title: "Nick in Tahoe", image: "/images/postcard3.jpg" },
  { id: 5, title: "Maddie in Vermont", image: "/images/postcard4.jpg" },
  { id: 6, title: "Piya in Mammoth", image: "/images/postcard5.jpg" },
  { id: 7, title: "Alex in Steamboat", image: "/images/postcard6.jpg" },
  { id: 8, title: "Taylor in Jackson Hole", image: "/images/postcard7.jpg" },
];

function PostCard() {
  const CARD_WIDTH = 300; // card width + gap
  const VISIBLE = 4;

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev < postCards.length - VISIBLE ? prev + 1 : prev
    );
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="text-black w-full px-16 mt-20">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Postcards from you</h1>

      </div>

      {/* VIEWPORT */}
      <div className="overflow-hidden">

        {/* SLIDER */}
        <div
          className="flex gap-10 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * CARD_WIDTH}px)`,
          }}
        >
          {postCards.map((postCard) => (
            <div
              key={postCard.id}
              className="w-65 shrink-0"
            >
              <div className="h-90 rounded-xl overflow-hidden cursor-pointer">
                <img
                  src={postCard.image}
                  alt={postCard.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <h2 className="text-xl font-bold mt-6 px-2">
                {postCard.title}
              </h2>
            </div>
          ))}
        </div>

      </div>
      
        <div className="mt-8 flex gap-3 justify-end">
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
    </section>
  );
}

export default PostCard;
