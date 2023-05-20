import { styled } from "styled-components";

export const SecondComponentSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: #ff7a7a;
  background: -webkit-linear-gradient(0deg, #ff7a7a 0%, #ad1a95 100%);
  background: linear-gradient(0deg, #ff7a7a 0%, #ad1a95 100%);
`;

export const SecondComponentContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;
