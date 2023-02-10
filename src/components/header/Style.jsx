import styled from "styled-components";
import Backgroud from "/img/general/Background.png";

export const HeaderStyled = styled.header`
  background-size: cover;
  display: flex;
  align-items: center;
  background-image: url(${Backgroud});
  gap: 20px;
`;
export const ItensStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  gap: 30px;
`;
export const NavStyled = styled.div`
  display: flex;
  width: 740px;
`;
export const HeaderCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
export const ItensContainerStyled = styled.div`
  width: 40vw;
`;
