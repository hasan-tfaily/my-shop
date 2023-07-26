import { useState, useEffect } from "react";
import { useProductContext } from "./productprovider";

export interface PublicProfileProps {
  id: number;
}

export const PublicProfile = ({ id }: PublicProfileProps) => {
  const { products } = useProductContext();

  const Theproduct = products.find((item) => {
    return item.id == id;
  });
  console.log(Theproduct);
  return (
    <div>
      <img src={Theproduct?.images[0]} />
    </div>
  );
};
