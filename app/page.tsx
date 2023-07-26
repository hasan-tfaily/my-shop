"use client";

import { MyShopMainPage } from "./components/myshopMainPage";
import { ProductsProvider } from "./components/productprovider";

export default function Home() {
  return (
    <main className="bg-gray-400">
      <ProductsProvider>
        <MyShopMainPage />
      </ProductsProvider>
    </main>
  );
}
