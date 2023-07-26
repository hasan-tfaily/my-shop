import { Navbar } from "./navbar";
import { PublicProfile } from "./productProfile";

export interface ProductProfilePageProps {
  id: number;
}

export const ProductProfilePage = ({ id }: ProductProfilePageProps) => {
  return (
    <div>
      <Navbar />
      <PublicProfile id={id} />
    </div>
  );
};
