import ProductCard from "../../products/productCard/ProductCard";
import { ContainerStyled, ProductsStyled, TitleStyled } from "./Style";
import { CarouselStyled } from "./Style";

export default function BestProducts() {
  const products = JSON.parse(localStorage.getItem("products"))
    .sort((a, b) => {
      a.price > b.price ? 1 : -1;
    })
    .filter((e) => e.idCategory !== 1)
    .slice(12);

  return (
    <ContainerStyled>
      <ProductsStyled>
        <TitleStyled>Most popular products</TitleStyled>
        <CarouselStyled>
          {products.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard product={item} />
              </div>
            );
          })}
        </CarouselStyled>
      </ProductsStyled>
    </ContainerStyled>
  );
}
