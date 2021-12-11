import React from 'react';
import {SectorWrapp, TitleWrapp, Title, SectorGrid } from './Sector.styles';
import SectorData from './SectorData';
import SectorDashboard from './SectorDashboard';

const Sector = () => {
    return (
        <>
        <SectorWrapp>
            <TitleWrapp>
                <Title>Setor 1</Title>
            </TitleWrapp>
            <SectorGrid >
                <SectorData/>
                <SectorDashboard/>
            </SectorGrid>
        </SectorWrapp> 
        </>
    )
}

export default Sector
