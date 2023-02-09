import styled from "styled-components";
import Promotions from "/Img/general/Promotions.png";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
  overflow: hidden;
`;
export const CarouselStyled = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  pointer-events: none;
`;
export const ButtonAction = styled.img`
  width: 30px;
  height: 30px;
  background-color: white;
  opacity: 70%;
  padding: 10px;
  flex-shrink: 0;
`;

export const GeneralDataStyled = styled.div`
  display: flex;
`;
export const DataStyled = styled.div`
  display: flex;
  gap: 10px;
  width: 940px;
`;
export const NameStyled = styled.span`
  display: flex;
  font-size: 2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    1px 1px 0 #000;
`;

export const NameBrandStyled = styled.span`
  display: flex;
  font-size: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
`;

export const DataDescription = styled.div`
  display: flex;
`;
export const Name = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: white;
  gap: 30px;
`;
export const DiscountStyled = styled.div`
  color: white;
  font-size: 3rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    1px 1px 0 #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Img = styled.img`
  width: 275px;
  height: 275px;
  margin: 20px;
`;
export const TytleStyled = styled.div`
  height: 70px;
  align-self: center;
  color: white;
  font-size: xx-large;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  gap: 10px;
`;
export const BodyCarouselStyed = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${Promotions});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const SpecialPromotionsStyled = styled.div`
  color: white;
  font-size: 3rem;
`;
export const InnerPriceStyled = styled.div`
  text-decoration: line-through;
`;
export const PriceStyled = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const PriceDescount = styled.div`
  font-size: 2rem;
  background-color: yellow;
  border-radius: 10px;
  padding: 10px;
  color: black;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
`;
export const Description = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    1px 1px 0 #000;
  font-size: 1rem;
  height: auto;
`;

export const DiscountConteiner = styled.div`
  gap: 0;
  display: flex;
  flex-direction: column;
`;
export const PriceConteiner = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
`;
export const PriceDicount = styled.div`
  display: flex;
`;
export const DescriptionPrice = styled.div`
  display: flex;
`;
