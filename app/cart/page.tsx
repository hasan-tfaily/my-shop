"use client";

import { ProductsProvider } from "../components/productprovider";
import { CartMainPage } from "../components/cartPage";

export default function page() {
  return (
    <main className="bg-gray-400">
      <ProductsProvider>
        <CartMainPage />
      </ProductsProvider>
    </main>
  );
}
