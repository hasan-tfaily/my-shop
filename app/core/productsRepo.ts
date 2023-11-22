import { Product, ProductsType } from "./products";

export class ProductsRepo {
  async getProducts(): Promise<Product[]> {
    return fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productData = data.products || [];

        const productInstances = productData.map(
          (productData: ProductsType) => new Product(productData)
        );
        return productInstances;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return [];
      });
  }
}
