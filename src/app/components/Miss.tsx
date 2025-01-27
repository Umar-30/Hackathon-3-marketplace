import React, { memo } from "react";
import Image from "next/image";

// Reusable Data Arrays
const categories = [
  {
    title: "Icons",
    items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
  },
  {
    title: "Shoes",
    items: ["All Shoes", "Custom Shoes", "Jordan", "Running Shoes"],
  },
  {
    title: "Clothing",
    items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
  },
  {
    title: "Kids",
    items: [
      "Infant & Toddler Shoes",
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes",
    ],
  },
];

const miss = memo(() => {
  return (
    <div className="w-full mx-auto px-4">
      {/* Section 1: Don't Miss */}
      <div className="text-2xl font-medium pb-5">Don&apos;t Miss</div>
      <div className="relative w-full h-[500px]">
        <Image
          src="/image/Image (10).svg"
          alt="Full screen image"
          layout="fill"
          objectFit="cover"
          priority // Ensures the first image is loaded immediately
        />
      </div>
      <div className="text-center pt-5">
        <h2 className="text-4xl font-medium">FLIGHT ESSENTIALS</h2>
        <p className="text-base pt-5">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <button className="mt-5 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800">
          Shop
        </button>
      </div>

      {/* Section 2: The Essentials */}
      <div className="text-2xl font-medium py-5">The Essentials</div>
      <div className="flex flex-wrap gap-4 justify-center">
        {["/image/Frame (1).svg", "/image/Frame (3).svg", "/image/men,women/Frame (2).svg"].map(
          (src, idx) => (
            <div key={idx} className="relative w-[300px] h-[300px]">
              <Image
                src={src}
                alt={`Essential image ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={src} // Placeholder for better UX
              />
            </div>
          )
        )}
      </div>

      {/* Section 3: Categories */}
      <div className="pt-36 pb-36">
        <div className="flex flex-wrap gap-8 justify-center">
          {categories.map((category, idx) => (
            <div key={idx} className="w-[200px]">
              <h3 className="font-bold text-xl">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default miss;
