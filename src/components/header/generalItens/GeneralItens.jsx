import { Container } from "./Style";
import { Favorite } from "./Style";
import { ShoppingCart } from "./Style";
import FavoriteImg from "../../../../public/Img/General/Favorite.png";
import ShoppingCartImg from "../../../../public/Img/General/ShoppingCart.png";

export default function GeneralItens() {
  return (
    <Container>
      <Favorite src={FavoriteImg} alt=""></Favorite>
      <ShoppingCart src={ShoppingCartImg} alt=""></ShoppingCart>
    </Container>
  );
}
