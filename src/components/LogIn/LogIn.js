import React from "react";
import { LogInContainer, Logo, LogInWrapp, Logo2 } from "./LogIn.styles";
import circleDesign from "../../assets/circlesDesign.png";
import leitosMap from "../../assets/logoDesign.png";
import LeftSide from "./LogInLeftSideGrid";
import RigthSide from "./LogInRightSideGrid";

const LogIn = () => {
  return (
    <LogInContainer>
      <Logo src={circleDesign} />
      <Logo2 src={leitosMap} />
      <LogInWrapp>
        <LeftSide />
        <RigthSide />
      </LogInWrapp>
    </LogInContainer>
  );
};

export default LogIn;
