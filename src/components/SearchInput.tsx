import React from "react";
import { SearchInputProps } from "../types/types";

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        console.log("Search Query:", e.target.value); // Debugging
        onChange(e.target.value);
      }}
      className="w-full max-w-md mx-auto mb-6 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-500 focus:bg-clip-text focus:text-transparent"
    />
  );
};

export default SearchInput;
