import { useState, useEffect } from "react";
import { Product, ProductsType } from "../core/products";
import { useProductContext } from "./productprovider";
import { OneProduct } from "./product";

export interface ProductsProps {}

interface proType {
  products: {
    products: ProductsType[];
  };
}

export const Products = ({}: ProductsProps) => {
  const { products } = useProductContext();

  return (
    <div className="!grid !grid-cols-3 px-20">
      {products.map((item, index) => {
        return <OneProduct key={index} product={item} />;
      })}
    </div>
  );
};
