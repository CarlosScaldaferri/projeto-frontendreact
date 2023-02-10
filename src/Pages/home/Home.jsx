import Promotions from "../../components/home/promotions/Promotions";
import BestProducts from "../../components/home/bestProducts/BestProducts";
import { HomeStyled } from "./style";
import Categories from "../../components/home/categories/Categories";

export default function Home() {
  return (
    <HomeStyled>
      <Categories />
      <Promotions />
      <BestProducts />
    </HomeStyled>
  );
}
