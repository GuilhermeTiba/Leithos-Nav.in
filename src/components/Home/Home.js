import React from 'react';
import {
    DashboardGrid,
    Title,
    HomeWrapp,
    TitleWrapp
} from './Home.styles';
import TaxaComponent from './HomeTaxa';
import StatusComponent from './HomeStatus';
import DisponibilidadeComponent from './HomeDisponibilidade';
import OcupacaoComponent from './HomeOcupacao';
import TempoComponent from './HomeTempo';
import DatasComponent from './HomeData';

const Home = () => {
    return (
        <HomeWrapp>
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