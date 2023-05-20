import { useState } from "react";

import "./App.css";

import { FirstComponent } from "./components/FirstComponent/FirstComponent";
import { SecondComponent } from "./components/SecondComponent/SecondComponent";
import { ThirdComponent } from "./components/ThirdComponent/ThirdComponent";
import { styled } from "styled-components";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Container = styled.div`
  position: relative;
`;

const ContainerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 160px;
  height: 40px;
  font-family: "IBM Plex Serif", serif;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background: rgba(164, 30, 206, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(164, 30, 206, 0.25);
  border-radius: 8px;
  cursor: pointer;

  svg {
    color: #d5c0e2;
  }

  @media (max-height: 900px) {
    bottom: 10%;
  }

  @media (max-height: 800px) {
    bottom: 5%;
  }

  @media (max-width: 300px) {
    max-width: 120px;
    height: 36px;
    font-size: 14px;
    bottom: 5%;
  }
`;

function App() {
  const [displayedComponent, setDisplayedComponent] = useState(1);

  function onClickButton() {
    if (displayedComponent === 1) {
      setDisplayedComponent(2);
    } else if (displayedComponent === 2) {
      setDisplayedComponent(3);
    } else if (displayedComponent === 3) {
      setDisplayedComponent(1);
    }
  }

  return (
    <Container>
      {displayedComponent === 1 && <FirstComponent />}
      {displayedComponent === 2 && <SecondComponent />}
      {displayedComponent === 3 && <ThirdComponent />}
      <ContainerButton onClick={onClickButton}>
        Apasă <BsFillArrowRightCircleFill />
      </ContainerButton>
    </Container>
  );
}

export default App;
