import { Product, ProductsType } from "./products";
import { CartProduct, CartProductsType } from "./productsFromCart";

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

  async addToCart(product: ProductsType, _count: number): Promise<boolean> {
    try {
      localStorage.setItem("count", JSON.stringify({ ...product, _count }));
      return true;
    } catch (error) {
      console.error("Error adding product to cart:", error);
      return false;
    }
  }

  async getFromCart(): Promise<CartProduct | null> {
    try {
      const cartData = localStorage.getItem("count");

      if (cartData) {
        const product: CartProduct = new CartProduct(JSON.parse(cartData));
        console.log(JSON.parse(cartData));
        return product;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error retrieving count from cart:", error);
      return null;
    }
  }
}
  

