function Hero() {
  return (
    <section className="relative w-full aspect-4/5 sm:aspect-video lg:h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        src="/public/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* HERO CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold max-w-3xl">
          Clever gear for epic days outside
        </h1>

        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full">
            Shop Poles
          </button>
          <button className="border border-white px-6 py-3 rounded-full">
            Shop Apparel
          </button>
        </div>
      </div>

    </section>
  );
}

export default Hero;
