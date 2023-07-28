import { Navbar } from "./navbar";
import { ProductsProvider } from "./productprovider";
import { Products } from "./products";
import { SearchBar } from "./searchbar";

export interface MyShopMainPageProps {}

export const MyShopMainPage = ({}: MyShopMainPageProps) => {
  return (
    <div>
      <Navbar />
      {/* <SearchBar /> */}
      <Products />
    </div>
  );
};
