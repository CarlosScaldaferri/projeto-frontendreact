import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 110px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const LoginImgStyled = styled.img`
  width: 40px;
  height: 50px;
`;
export const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ButtonLogin = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;
export const ButtonSingUp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  color: #fff;
  font-size: 12px;
  width: fit-content;
  cursor: pointer;
`;
