import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductsType } from "../core/products";

export interface ProductsProps {}

interface ProductContextType {
  products: Product[];
  setId?: (id: number | undefined) => void;
  id?: number; // Include setId in the interface
}

const initialValue: ProductContextType = {
  products: [],
};

const ProductContext = createContext<ProductContextType>(initialValue);

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [id, setId] = useState<number | undefined>(undefined); // Define the type of id as number | undefined

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

  return (
    // Provide the products state through the context
    <ProductContext.Provider value={{ products, setId, id }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
