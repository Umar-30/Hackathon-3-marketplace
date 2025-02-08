'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Topheader = () => {
  return (
    <nav className="w-full border-b-2 border-gray-300 p-4 bg-taji">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/image/Vector (5).svg"
          alt="Logo"
          height={24}
          width={24}
          className="h-6 w-6 object-contain"
          priority // Ensures this image is loaded quickly as it's critical
        />

        {/* Navigation Links */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/newFeature" className="hover:text-gray-500">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-gray-500">
            Help
          </Link>
          <span>|</span>
          <Link href="/Joinus
          " className="hover:text-gray-500">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/singUp" className="hover:text-gray-500">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topheader;
