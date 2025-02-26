import { HeaderStyled } from "./Style";
import { HeaderCenterDiv } from "./Style";
import BrandLogo from "./brandLogo/BrandLogo";
import UserLogin from "./userLogin/UserLogin";
import GeneralItens from "./generalItens/GeneralItens";
import ZipCode from "./zipCode/ZipCode";
import SearshInput from "./searshInput/SearshInput";
import { ItensStyled } from "./Style";
import { ItensContainerStyled } from "./Style";

export default function Header(props) {
  return (
    <HeaderStyled>
      <BrandLogo />

      <ItensContainerStyled>
        <ItensStyled>
          <HeaderCenterDiv>
            <SearshInput />
            <ZipCode />
          </HeaderCenterDiv>
          <UserLogin />
          <GeneralItens shopingCartNumber={props.shopingCartNumber} />
        </ItensStyled>
      </ItensContainerStyled>
    </HeaderStyled>
  );
}
