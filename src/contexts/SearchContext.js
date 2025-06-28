import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}