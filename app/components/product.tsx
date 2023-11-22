import Image from "next/image";
import { Product, ProductsType } from "../core/products";
import { useProductContext } from "./productprovider";
import { useRouter } from "next/router";
import { Counter } from "./counter";

export interface OneProductProps {
  product?: Product;
  className?: string;
}

export const OneProduct = ({ product, className }: OneProductProps) => {
  const { setId, id } = useProductContext();
  const onclick = (id: number) => {
    setId?.(id);
    window.location.href = `/productProfile/${product?.id}`;
  };

  return (
    <div className="bg-white shadow-md rounded text-black m-5 group cursor-pointer ">
      <a
        className={`  ${className ?? ""}`}
        onClick={() => onclick(product?.id || 0)}
        // Wrap the function call inside another function
      >
        <div className="flex justify-center">
          <img
            src={product?.images?.[0] || "/images/placeholder.png"}
            alt={`Image`}
            className="h-40"
          />
        </div>
        <h1 className=" ">{product?.title}</h1>

        <h1 className="text-xl">{product?.price} $</h1>
      </a>
      <div
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Counter product={product!} />
      </div>
    </div>
  );
};
