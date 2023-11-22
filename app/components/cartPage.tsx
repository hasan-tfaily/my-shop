import { useEffect } from "react";
import { useProductContext } from "./productprovider";
import { OneCartProduct } from "./carProduct";

export const CartMainPage = () => {
  const { cartProducts } = useProductContext();
  console.log(cartProducts);
  return (
    <div>{cartProducts ? <OneCartProduct product={cartProducts} /> : ""}</div>
  );
};
