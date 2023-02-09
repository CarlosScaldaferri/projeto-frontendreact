import { useRef } from "react";
import { ContainerStyled } from "./Style";
import { CarouselStyled } from "./Style";
import { ButtonAction } from "./Style";
import { GeneralDataStyled } from "./Style";
import { DataStyled } from "./Style";
import { NameStyled } from "./Style";
import { Img } from "./Style";
import { DataDescription } from "./Style";
import NextBtn from "../../../../../public/Img/General/Next.png";
import PrevBtn from "../../../../../public/Img/General/Prev.png";
import { Description } from "./Style";
import React, { useState, useEffect } from "react";
import { BodyCarouselStyed } from "./Style";
import {
  NameBrandStyled,
  InnerPriceStyled,
  PriceDescount,
  PriceConteiner,
  Name,
  DiscountConteiner,
  DiscountStyled,
} from "./Style";

export default function Carrousel() {
  const products = JSON.parse(localStorage.getItem("products")).filter(
    (e) => e.discount > 20
  );

  const [intervalId, setIntervalId] = useState(null);

  const startInterval = (interval) => {
    useEffect(() => {
      if (!intervalId) {
        const id = setInterval(() => {
          handleRightClick();
        }, interval);
        setIntervalId(id);
      }
      return () => clearInterval(intervalId);
    }, [intervalId]);
  };

  startInterval(2000000);

  const carousel = useRef(null);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <ContainerStyled>
      <BodyCarouselStyed>
        <ButtonAction
          src={PrevBtn}
          alt="Scroll Left"
          onClick={handleLeftClick}
        ></ButtonAction>

        <CarouselStyled ref={carousel} id="scroll-container"  >
          {products.map((item) => {
            return (
              <GeneralDataStyled>
                <DataStyled  key={item.id}>
                  <Img src={item.images[0]} alt={item.description} />
                  <DataDescription>
                    <Name>
                      <NameBrandStyled>
                        {item.color}{" "}
                        {
                          JSON.parse(localStorage.getItem("categories")).filter(
                            (e) => e.id == item.idCategory
                          )[0].name
                        }{" "}
                        from{" "}
                        {
                          JSON.parse(localStorage.getItem("brands")).filter(
                            (e) => e.id == item.idBrand
                          )[0].name
                        }
                      </NameBrandStyled>

                      <NameStyled>{item.name.toUpperCase()}</NameStyled>

                      <Description>{item.description}</Description>
                      <PriceConteiner>
                        <DiscountConteiner>
                          <DiscountStyled>{item.discount}%</DiscountStyled>
                          <DiscountStyled>OFF</DiscountStyled>
                        </DiscountConteiner>
                        <InnerPriceStyled>
                          U$ {item.price.toFixed(2)}
                        </InnerPriceStyled>
                        <PriceDescount>
                          U${" "}
                          {(
                            item.price -
                            item.price * Number("0." + item.discount)
                          ).toFixed(2)}
                        </PriceDescount>
                      </PriceConteiner>
                    </Name>

                    {/* <NameStyled>{item.name}</NameStyled>
                    
                    <span>Branb: {item.brand}</span>
                    <span>Stock: {item.quantity} iten(s)</span>
                    <PriceStyled>
                      <div>Price:</div>
                      <InnerPriceStyled>
                        U$ {item.price.toFixed(2)}
                      </InnerPriceStyled>
                      <PriceDescount>
                        U${" "}
                        {(
                          item.price -
                          item.price * Number("0." + item.discount)
                        ).toFixed(2)}
                      </PriceDescount>
                    </PriceStyled>
                    <br /> */}
                  </DataDescription>
                </DataStyled>
              </GeneralDataStyled>
            );
          })}
        </CarouselStyled>
        <ButtonAction
          src={NextBtn}
          alt="Scroll Right"
          onClick={handleRightClick}
        ></ButtonAction>
      </BodyCarouselStyed>
    </ContainerStyled>
  );
}
