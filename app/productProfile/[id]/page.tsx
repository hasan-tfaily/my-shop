"use client";

import { ProductProfilePage } from "@/app/components/productProfilePage";
import { ProductsProvider } from "@/app/components/productprovider";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <main className="bg-gray-400">
      <ProductsProvider>
        <ProductProfilePage id={params.id} />
      </ProductsProvider>
    </main>
  );
}
