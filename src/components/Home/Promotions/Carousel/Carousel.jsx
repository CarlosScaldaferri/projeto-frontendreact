import { useRef } from "react";
import { ContainerStyled } from "./Style";
import { CarouselStyled } from "./Style";
import { ButtonAction } from "./Style";
import { GeneralDataStyled } from "./Style";
import { DataStyled } from "./Style";
import { NameStyled } from "./Style";
import { Img } from "./Style";
import { DataDescription } from "./Style";
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
    (e) => e.discount > 15
  );

  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    useEffect(() => {
      if (!intervalId) {
        const id = setInterval(() => {
          handleRightClick();
        }, 5000);

        setIntervalId(id);
      }
      return () => clearInterval(intervalId);
    }, [intervalId]);
  };

  startInterval();

  window.addEventListener("beforeunload", clearInterval(intervalId));

  const carousel = useRef(null);

  const [isDisabled, setIsDisabled] = useState(false);
  async function handleLeftClick() {
    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsDisabled(false);
  }

  async function handleRightClick() {
    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    if (carousel.current) {
      if (
        carousel.current.scrollLeft + carousel.current.offsetWidth ===
        carousel.current.scrollWidth
      ) {
        carousel.current.scrollLeft = 0;
      } else {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsDisabled(false);
  }

  return (
    <ContainerStyled>
      <BodyCarouselStyed>
        <ButtonAction
          src="https://imgur.com/8XAJLxq.png"
          alt="Scroll Left"
          onClick={handleLeftClick}
        ></ButtonAction>

        <CarouselStyled ref={carousel}>
          {products.map((item, index) => {
            return (
              <GeneralDataStyled key={index}>
                <DataStyled key={item.id}>
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
                          <DiscountStyled>{item.discount}% OFF</DiscountStyled>
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
                  </DataDescription>
                </DataStyled>
              </GeneralDataStyled>
            );
          })}
        </CarouselStyled>
        <ButtonAction
          src="https://imgur.com/4ihFlup.png"
          alt="Scroll Right"
          onClick={handleRightClick}
        ></ButtonAction>
      </BodyCarouselStyed>
    </ContainerStyled>
  );
}
