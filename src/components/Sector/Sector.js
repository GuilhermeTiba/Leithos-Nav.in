import React from "react";
import { SectorWrapp, TitleWrapp, Title, SectorGrid } from "./Sector.styles";
import SectorData from "./SectorData";
import SectorDashboard from "./SectorDashboard";

const Sector = ({ title }) => {
  return (
    <>
      <SectorWrapp>
        <TitleWrapp>
          <Title>{title}</Title>
        </TitleWrapp>
        <SectorGrid>
          <SectorData />
          <SectorDashboard />
        </SectorGrid>
      </SectorWrapp>
    </>
  );
};

export default Sector;
