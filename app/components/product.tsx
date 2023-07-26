import Image from "next/image";
import { Product, ProductsType } from "../core/products";

export interface OneProductProps {
  product?: ProductsType;
  className?: string;
}

export const OneProduct = ({ product, className }: OneProductProps) => {
  return (
    <div
      className={`bg-white shadow-md rounded text-black m-5 group   ${
        className ?? ""
      }`}
    >
      <div className="flex justify-center">
        <img src={product?.images[0]} alt={`Image`} className="h-40  " />
      </div>
      <h1 className=" group-hover:underline">{product?.title}</h1>

      <h1 className="text-xl">{product?.price} $</h1>
    </div>
  );
};
