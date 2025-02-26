import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: fit-content;
`;
export const Navigation = styled.nav`
  display: flex;
  width: fit-content;
  gap: 15px;
  font-family: Roboto, Helvetica, sans-serifs;
  font-weight: bold;
`;
export const A = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  font-size: medium;
  padding: 15px;
  text-decoration: none;
  color: white;
`;
export const CategoryConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: black;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 130px;
  height: 130px;
`;
