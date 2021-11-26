import React from 'react';
import {SectorWrapp, TitleWrapp, Title, SectorGrid } from './Sector.styles';
import SectorData from './SectorData';
import SectorDashboard from './SectorDashboard';

const Sector = ({showPopUpAdd, setShowPopUpAdd, listLeitos, setListLeitos, showPopUpStatus, setShowPopUpStatus, dataLeito, setDataLeito}) => {
    return (
        <>
        <SectorWrapp>
            <TitleWrapp>
                <Title>Setor 1</Title>
            </TitleWrapp>
            <SectorGrid >
                <SectorData/>
                <SectorDashboard showPopUpAdd={showPopUpAdd} setShowPopUpAdd={setShowPopUpAdd} setShowPopUpStatus={setShowPopUpStatus} showPopUpStatus={showPopUpStatus} listLeitos={listLeitos} setListLeitos={setListLeitos} dataLeito={dataLeito} setDataLeito={setDataLeito}/>
            </SectorGrid>
        </SectorWrapp> 
        </>
    )
}

export default Sector
