import { ContainerStyled } from "./Style";
import { ZipCodeImgStyled } from "./Style";
import { ZipCodeButtonStyled } from "./Style";

export default function ZipCode() {
  return (
    <ContainerStyled>
      <ZipCodeImgStyled src="https://imgur.com/bq0X2em.png" />
      <ZipCodeButtonStyled>Zip Code</ZipCodeButtonStyled>
    </ContainerStyled>
  );
}
