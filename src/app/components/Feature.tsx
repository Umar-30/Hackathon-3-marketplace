import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Title */}
        <h1 className="text-2xl font-medium leading-7 md:text-3xl pt-3">Featured</h1>

        {/* Feature Image */}
        <div className="relative w-full h-[350px] md:h-[500px] mt-4">
          <Image
            src="/image/shoes/Image (5).svg"
            alt="Full screen image"
            layout="fill"
            objectFit="cover"
            priority // Eagerly load this image for better UX
            placeholder="blur"
            blurDataURL="/image/shoes/Image (5).svg" // Optimized placeholder
          />
        </div>

        {/* Content Section */}
        <div className="text-center pt-6">
          <h2 className="font-medium text-2xl md:text-5xl">
            STEP INTO WHAT FEELS GOOD
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="pt-4">
            <button className="px-6 py-2 bg-black rounded-full text-white hover:bg-gray-800 transition duration-300">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
