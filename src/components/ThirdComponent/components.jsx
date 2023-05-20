import { styled } from "styled-components";

import pic2 from "../../Assets/pic2.jpg";

export const ThirdComponentSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: #ff7a7a;
  background: -webkit-linear-gradient(0deg, #ff7a7a 0%, #ad1a95 100%);
  background: linear-gradient(0deg, #ff7a7a 0%, #ad1a95 100%);
`;

export const ThirdComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 1000px;
  background-image: url(${pic2});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.25);
  /* border-radius: 16px; */

  p {
    padding: 64px 32px 12px;
    margin: 0;
    font-size: 20px;

    span {
      font-weight: 500;
    }
  }

  @media (max-width: 700px) {
    p {
      padding: 48px 24px 12px;
      margin: 0;
      font-size: 16px;

      span {
        font-weight: 500;
      }
    }
  }
  @media (max-width: 500px) {
    p {
      padding: 32px 18px 12px;
      margin: 0;
      font-size: 16px;

      span {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 420px) {
    p {
      padding: 32px 18px 12px;
      margin: 0;
      font-size: 14px;

      span {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 380px) {
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 300px) {
    p {
      font-size: 12px;
    }
  }
`;
