import Image from "next/image";
import { Product, ProductsType } from "../core/products";
import { useProductContext } from "./productprovider";
import { useRouter } from "next/router";
import { Counter } from "./counter";
import { CartProduct } from "../core/productsFromCart";

export interface OneProductProps {
  product?: CartProduct;
  className?: string;
}

export const OneCartProduct = ({ product, className }: OneProductProps) => {
  const { setId, id } = useProductContext();
  const onclick = (id: number) => {
    setId?.(id);
    window.location.href = `/productProfile/${product?.id}`;
  };
  console.log(product);

  return (
    <div className="bg-white shadow-md rounded text-black m-5 group cursor-pointer ">
      <div className="flex justify-center">
        <img
          src={product?.images?.[0] || "/images/placeholder.png"}
          alt={`Image`}
          className="h-40"
        />
      </div>
      <h1 className=" ">{product?.title}</h1>

      <h1 className="text-xl">{product?.price} $</h1>

      <div>{product?.count}</div>
    </div>
  );
};
