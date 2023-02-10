import { LoginImgStyled } from "./Style";
import { LoginContainer } from "./Style";
import { LoginButtons } from "./Style";
import { ButtonLogin } from "./Style";
import { ButtonSingUp } from "./Style";

export default function UserLogin() {
  return (
    <LoginContainer>
      <LoginImgStyled
        src="https://imgur.com/Q7bF1fB.png"
        alt=""
      ></LoginImgStyled>

      <LoginButtons>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonSingUp>Sing up</ButtonSingUp>
      </LoginButtons>
    </LoginContainer>
  );
}
