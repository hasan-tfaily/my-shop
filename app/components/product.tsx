import Image from "next/image";
import { Product, ProductsType } from "../core/products";
import { useProductContext } from "./productprovider";
import { useRouter } from "next/router";

export interface OneProductProps {
  product?: ProductsType;
  className?: string;
}

export const OneProduct = ({ product, className }: OneProductProps) => {
  const { setId, id } = useProductContext();
  const onclick = (id: number) => {
    setId?.(id);
    window.location.href = `/productProfile/${product?.id}`;
  };
  console.log(id);
  return (
    <a
      className={`bg-white shadow-md rounded text-black m-5 group cursor-pointer   ${
        className ?? ""
      }`}
      onClick={() => onclick(product?.id)}
      // Wrap the function call inside another function
    >
      <div className="flex justify-center">
        <img src={product?.images[0]} alt={`Image`} className="h-40  " />
      </div>
      <h1 className=" group-hover:underline">{product?.title}</h1>

      <h1 className="text-xl">{product?.price} $</h1>
    </a>
  );
};
