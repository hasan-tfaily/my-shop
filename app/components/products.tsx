import { useState, useEffect } from "react";
import { Product, ProductsType } from "../core/products";

export interface ProductsProps {}

interface proType {
  products: {
    products: ProductsType[];
  };
}

export const Products = ({}: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Extract the products array from the received data
        const productData = data.products || [];
        // Convert the received data into Product instances and store them in the state
        const productInstances = productData.map(
          (productData: ProductsType) => new Product(productData)
        );
        setProducts(productInstances);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const prod: proType = { products };
  console.log(prod);

  return <div></div>;
};
