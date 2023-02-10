import { ContainerStyled } from "./Style";
import { LogoImgStyled } from "./Style";
import { LogoTextStyled } from "./Style";
import { MainLogoTextStyled } from "./Style";
import { SecondaryLogoTextStyled } from "./Style";
import { InnerContainerStyled } from "./Style";
import { goToHome } from "../../../router/Coordinator";
import { useNavigate } from "react-router-dom";

export default function BrandLogo() {
  const navigate = useNavigate();
  return (
    <ContainerStyled onClick={() => goToHome(navigate)}>
      <InnerContainerStyled>
        <LogoImgStyled
          src="https://imgur.com/ZoQvpna.gif"
          alt=""
        ></LogoImgStyled>

        <LogoTextStyled>
          <MainLogoTextStyled>OUTER SPACE</MainLogoTextStyled>
          <SecondaryLogoTextStyled>eCommerce</SecondaryLogoTextStyled>
        </LogoTextStyled>
      </InnerContainerStyled>
    </ContainerStyled>
  );
}
