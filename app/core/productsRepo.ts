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

  async addToCart(product: Product, count: number): Promise<boolean> {
    try {
      localStorage.setItem("count", JSON.stringify({ ...product, count }));
      return true;
    } catch (error) {
      console.error("Error adding product to cart:", error);
      return false;
    }
  }

  async getFromCart(): Promise<{ product?: Product; count: number }> {
    try {
      const cartData = localStorage.getItem("count");
      if (cartData) {
        const { product, count } = JSON.parse(cartData);
        return { product, count };
      } else {
        return { count: 0 };
      }
    } catch (error) {
      console.error("Error retrieving count from cart:", error);
      return { count: 0 };
    }
  }
}
  

