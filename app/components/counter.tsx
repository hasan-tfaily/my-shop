import React, { useState } from "react";
import { useProductContext } from "./productprovider";
import { Product } from "../core/products";

export interface CounterProps {
  product: Product;
}
export const Counter = ({ product }: CounterProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const { addToCart } = useProductContext();
  return (
    <>
      <div className="grid grid-cols-3">
        <button className="bg-black p-2 text-white" onClick={increment}>
          +
        </button>
        <div className="flex justify-center">
          <p className="text-2xl"> {count}</p>
        </div>
        <button className="bg-black p-2 text-white" onClick={decrement}>
          -
        </button>
      </div>
      <div className="pb-5">
        <button
          className="bg-green-300 w-full text-center shadow-md hover:underline"
          onClick={() => addToCart!(product, count)}
        >
          add to cart
        </button>
      </div>
    </>
  );
};
