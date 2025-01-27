import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const products = {
  men: [
    {
      image: "/image/men,women/Image (6).svg",
      name: "Nike Dri-FIT Challenger",
      description: "Men's Short-Sleeve Running Top",
      price: "₹ 2,495",
    },
    {
      image: "/image/men,women/Image (7).svg",
      name: "Nike Air Max Pulse",
      description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      price: "₹ 13,995",
    },
  ],
  women: [
    {
      image: "/image/men,women/Image (8).svg",
      name: "Nike Dri-FIT ADV Run Division",
      description: "Women's Long-Sleeve Running Top",
      price: "₹ 5,295",
    },
    {
      image: "/image/men,women/Image (9).svg",
      name: "Nike Fast",
      description:
        "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: "₹ 3,795",
    },
  ],
};

const ArrowButtons = ({ label }: { label: string }) => (
  <div className="flex gap-4 justify-between items-center md:justify-end md:mr-12">
    <div className="text-sm md:text-base font-medium">{label}</div>
    <div className="w-12 h-12 bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
      <ArrowLeft className="text-black" />
    </div>
    <div className="w-12 h-12 bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
      <ArrowRight className="text-black" />
    </div>
  </div>
);

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => (
  <div className="w-full md:w-1/2 p-2">
    <Image
      src={image}
      alt={name}
      height={300}
      width={300}
      className="w-full h-auto object-cover"
      placeholder="blur"
      blurDataURL={image} // Adds a low-quality placeholder for better UX
    />
    <div className="pt-4 flex justify-between">
      <div className="text-sm font-semibold">
        {name}
        <br />
        <span className="text-gray-500 text-xs">{description}</span>
      </div>
      <div className="text-sm font-semibold">{price}</div>
    </div>
  </div>
);

const Gearup = () => {
  return (
    <div className="w-full mx-auto h-full pb-8 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <h1 className="text-2xl font-medium leading-[28px] pt-3 text-center md:text-left">
        Gear up
      </h1>

      <div className="w-full mt-6 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Men's Section */}
        <div className="w-full md:w-1/2">
          <ArrowButtons label="Shop Men's" />
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {products.men.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Women's Section */}
        <div className="w-full md:w-1/2">
          <ArrowButtons label="Shop Women's" />
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {products.women.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gearup;
