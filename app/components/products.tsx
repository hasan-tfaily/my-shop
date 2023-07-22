import { useState, useEffect } from "react";

export interface ProductsProps {}

export const Products = ({}: ProductsProps) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(products);
  return <div></div>;
};
