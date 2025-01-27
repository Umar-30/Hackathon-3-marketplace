import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      {/* Full-Screen Image */}
      <div className="w-full mx-auto">
        <Image
          src="/image/Image.shoe.svg"
          alt="Nike Air Max Pulse"
          width={1700}
          height={700}
          priority // Critical for above-the-fold content
          className="w-full h-auto object-cover" // Responsive image handling
        />
      </div>

      {/* Image Bottom Content */}
      <div className="w-full mx-auto text-center mt-8 px-4">
        {/* Title */}
        <h2 className="text-lg font-medium leading-6">First Look</h2>
        <h1 className="font-semibold text-4xl md:text-5xl mt-2">
          Nike Air Max Pulse
        </h1>

        {/* Description */}
        <p className="max-w-lg mx-auto mt-4 text-sm leading-6 text-gray-600">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past your limits and help you go to the
          max.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
          <button
            className="bg-black text-white py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition-all"
            aria-label="Notify Me about Nike Air Max Pulse"
          >
            Notify Me
          </button>
          <button
            className="bg-black text-white py-2 px-8 rounded-full text-sm hover:bg-gray-800 transition-all"
            aria-label="Shop Nike Air Max Pulse"
          >
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
