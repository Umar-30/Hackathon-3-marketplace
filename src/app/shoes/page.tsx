"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import {  four } from "@/sanity/lib/querries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Shoes2 = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(four);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.map((product) => (
        <div key={product._id} 
        className='bg-gray-100 border border-gray-300 p-6 rounded-xl shadow-md hover:shadow-lg transition'>  
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt="image"
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
          <p className="text-gray-500 mt-2">{product.price ?`$${product.price}`: "Price not available"}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Shoes2;
