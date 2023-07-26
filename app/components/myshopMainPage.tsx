import { Navbar } from "./navbar";
import { ProductsProvider } from "./productprovider";
import { Products } from "./products";

export interface MyShopMainPageProps {}

export const MyShopMainPage = ({}: MyShopMainPageProps) => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};
