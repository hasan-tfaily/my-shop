import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { Product, ProductsType } from "../core/products";
import { ProductsRepo } from "../core/productsRepo";

export interface ProductsProps {}

interface ProductContextType {
  products: Product[];
  setId?: (id: number | undefined) => void;
  id?: number; // Include setId in the interface
  addToCart?: (product: Product, count: number) => Promise<boolean>;
}

const initialValue: ProductContextType = {
  products: [],
};

const ProductContext = createContext<ProductContextType>(initialValue);

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [id, setId] = useState<number | undefined>(undefined);
  const productRepo = useMemo(() => new ProductsRepo(), []);

  const getProducts = useCallback(async () => {
    const products = await productRepo.getProducts();
    setProducts(products);
  }, [productRepo]);

  const addToCart = useCallback(
    async (product: Product, count: number) => {
      const response = await productRepo.addToCart(product, count);
      return response;
    },
    [productRepo]
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ProductContext.Provider value={{ products, setId, id, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
