import { Container, CountShoppingCart, ShoppingCartConteiner } from "./Style";
import { Favorite } from "./Style";
import { ShoppingCart } from "./Style";
import { goToShoppingCart } from "../../../router/Coordinator";
import { useNavigate } from "react-router-dom";

export default function GeneralItens(props) {
  const navigate = useNavigate();
  function handleShoppingCartClick() {
    goToShoppingCart(navigate, 0);
  }

  return (
    <Container>
      <Favorite src="https://imgur.com/msfaHaA.png" alt=""></Favorite>
      <ShoppingCartConteiner>
        <ShoppingCart
          src="https://imgur.com/FkggBfL.png"
          onClick={handleShoppingCartClick}
          alt=""
        ></ShoppingCart>
        <CountShoppingCart>{props.shopingCartNumber}</CountShoppingCart>
      </ShoppingCartConteiner>
    </Container>
  );
}
