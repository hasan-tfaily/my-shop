import { CartIcon } from "./icons/cart";
import { Icon } from "./icons/myIcon";
import { UserIcon } from "./icons/user";
import { useProductContext } from "./productprovider";

export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {

  const { products } = useProductContext();

  return (
    <div className="bg-white xl:pl-72 lg:pl-10 md:pl-0 text-black ">
      <div className="grid grid-cols-2 xl:gap-x-44 lg:gap-x-0  sm:gap-x-0  md:gap-x-0  ">
        <div className="flex  ">
          <Icon className="w-28 py-10 min-w-max" />
          <div className="flex space-x-4 lg:space-x-8 md:space-x-4 sm:space-x-2 pl-3">
            <button className="text-xs py-14 hidden sm:flex pl-4 hover:underline hover:font-bold transition-all duration-300">
              Home
            </button>
            <button className="text-xs py-14  hidden sm:flex pl-4 hover:underline hover:font-bold transition-all duration-300">
              Product
            </button>
            <button className="text-xs py-14   hidden sm:flex pl-4 hover:underline hover:font-bold transition-all duration-300">
              Categories
            </button>
            <button className="text-xs py-14 hidden sm:flex pl-4 hover:underline hover:font-bold transition-all duration-300">
              Brands
            </button>
          </div>
        </div>
        <div className="py-10 flex space-x-4 lg:space-x-8 md:space-x-4 sm:space-x-2">
          <button>
            <UserIcon />
          </button>
          <button className="px-5">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
