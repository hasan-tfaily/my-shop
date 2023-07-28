import React, { useState } from "react";
import { useProductContext } from "./productprovider";

export interface SearchBarProps {}

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [newArray, setNewArray] = useState([]);

  const { products } = useProductContext();
  console.log(products);
  let filteredProducts;

  const handleOnclick = () => {
    filteredProducts = products.filter((item) =>
      item?.title?.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(filteredProducts);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div className="px-44">
      <input
        type="text"
        onChange={handleInputChange}
        className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        value={inputValue}
        title="searchBar"
      />
      <button onClick={handleOnclick}>search</button>
    </div>
  );
};
