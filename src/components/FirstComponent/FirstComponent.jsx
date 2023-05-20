import React from "react";
import { FirstComponentContainer, FirstComponentSection } from "./components";

import Pic1 from "../../Assets/pic1.jpg";

export const FirstComponent = () => {
  return (
    <FirstComponentSection>
      <FirstComponentContainer>
        <img src={Pic1} alt="" />
      </FirstComponentContainer>
    </FirstComponentSection>
  );
};
