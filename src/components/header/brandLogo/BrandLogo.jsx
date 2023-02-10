import { ContainerStyled } from "./Style";
import { LogoImgStyled } from "./Style";
import { LogoTextStyled } from "./Style";
import { MainLogoTextStyled } from "./Style";
import { SecondaryLogoTextStyled } from "./Style";
import { InnerContainerStyled } from "./Style";

export default function BrandLogo() {
  return (
    <ContainerStyled>
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
