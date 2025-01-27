"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/querries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addTOCart } from "../actions/actions";
import { useSearch } from "../context/SearchContext";
import Swal from "sweetalert2";

const Shoes = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { searchTerm } = useSearch(); // Access searchQuery from context

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [products, searchTerm]
  );

  // Add to cart
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addTOCart(product);
  };

  // Reusable Button component
  const Button = ({ children, onClick, className }: { children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; className: string }) => (
    <button className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold p-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out ${className}`} onClick={onClick}>
      {children}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center font-serif">Our Latest Products</h1>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300"
            >
              <Link href={`/newFeature/${product.slug.current}`}>
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
                <p className="text-blue-500 mt-2 font-bold">
                  {product.price ? `$${product.price}` : "Price not available"}
                </p>
                <div className="flex w-full justify-between items-center mt-4 gap-4">
                  <Button onClick={(e) => handleAddToCart(e, product)} className="p-2">Add To Cart</Button>
                  <Button className="py-2">View Detail</Button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Shoes;
