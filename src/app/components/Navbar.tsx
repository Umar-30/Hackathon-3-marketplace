'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoBagRemoveOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { Heart, MenuIcon, Search } from "lucide-react";
import { useSearch } from "../context/SearchContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  // Use `useCallback` to memoize the handler function
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value); // Update search term in context
    },
    [setSearchTerm]
  );

  // Links array to avoid repetition
  const navLinks = [
    { href: "/", label: "New & Featured" },
    { href: "#", label: "Men" },
    { href: "#", label: "Women" },
    { href: "#", label: "Kids" },
    { href: "#", label: "Sale" },
    { href: "#", label: "SNKRS" },
  ];

  return (
    <nav className="w-full border-b-2 border-gray-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <SiNike className="size-16" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-[18px] font-normal">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Search and Cart */}
        <div className="hidden md:flex gap-4">
          <div className="relative">
            <Input
              placeholder="Search Products"
              className="bg-[#f5f5f5] rounded"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <Search className="absolute right-2 top-2" />
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Heart />
            </Button>
            <Link href="/cart">
              <Button variant="outline" size="icon">
                <IoBagRemoveOutline />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant="outline" size="icon" className="rounded-sm">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <SiNike className="size-16" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[18px] font-normal">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <div className="relative">
                <Input
                  placeholder="Search Products"
                  className="bg-[#f5f5f5] rounded"
                  value={searchTerm}
                  onChange={handleInputChange}
                  type="text"
                />
                <Search className="absolute right-2 top-2" />
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="outline" size="icon">
                  <Heart />
                </Button>
                <Link href="/cart">
                  <Button variant="outline" size="icon">
                    <IoBagRemoveOutline />
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;