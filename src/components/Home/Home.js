import React from 'react';
import cantoDireitoInferior from '../../assets/canto-inferior-direito.png'


import {
    DashboardGrid,
    Title,
    HomeWrapp,
    TitleWrapp,
    ArteCantoInferiorDireito,
} from './Home.styles';
import TaxaComponent from './HomeTaxa';
import StatusComponent from './HomeStatus';
import DisponibilidadeComponent from './HomeDisponibilidade';
import OcupacaoComponent from './HomeOcupacao';
import TempoComponent from './HomeTempo';
import DatasComponent from './HomeData';

//import { useContext } from 'react/cjs/react.development';
//import { newContext } from '../../pages/Home.js';

const Home = () => {
    return (
        <HomeWrapp>
            <ArteCantoInferiorDireito src={cantoDireitoInferior}/>
            <TitleWrapp>
                <Title>Dashboard</Title>
            </TitleWrapp>
            <DashboardGrid>
                <TaxaComponent/>
                <StatusComponent/>
                <DisponibilidadeComponent/>
                <TempoComponent/>
                <OcupacaoComponent/>
                <DatasComponent/>
            </DashboardGrid>
        </HomeWrapp> 
    )
}

export default Home