import styled from "styled-components";

export const ZipCodeImgStyled = styled.img`
  width: 20px;
  height: 20px;
`;
export const ZipCodeButtonStyled = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  color: #fff;
  font-size: 12px;
`;
export const ContainerStyled = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
