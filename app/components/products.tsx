import React, { useState } from "react";
import { useProductContext } from "./productprovider";
import { OneProduct } from "./product";
import { ProductsType } from "../core/products";

export interface ProductsProps {}

export const Products = ({}: ProductsProps) => {
  const { products } = useProductContext();
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductsType[]>([]);

  const handleOnclick = () => {
    const filtered = products.filter((item) =>
      item.title?.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div>
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
      <div className="grid grid-cols-3 px-20">
        {filteredProducts.length > 0
          ? filteredProducts.map((item, index) => (
              <OneProduct key={index} product={item} />
            ))
          : products.map((item, index) => (
              <OneProduct key={index} product={item} />
            ))}
      </div>
    </div>
  );
};
