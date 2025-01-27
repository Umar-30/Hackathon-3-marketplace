"use client";

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, memo } from "react";

// Define the interface for the context value
interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>; // Using Dispatch for better typing
}

// Create the context with a default value for better type safety
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

// SearchProvider component
export const SearchProvider = memo(({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const value = { searchTerm, setSearchTerm }; // Memoizing context value to prevent unnecessary renders

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
});

// Custom hook to use the SearchContext
export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};