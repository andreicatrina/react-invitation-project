import React from "react";

import Pic2 from "../../Assets/pic2.jpg";
import { SecondComponentContainer, SecondComponentSection } from "./components";

export const SecondComponent = () => {
  return (
    <SecondComponentSection>
      <SecondComponentContainer>
        <img src={Pic2} alt="" />
      </SecondComponentContainer>
    </SecondComponentSection>
  );
};
