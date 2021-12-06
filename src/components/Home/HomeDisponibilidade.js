import React from 'react';
import { Disponibilidade, TittleItens, SectorAndArrow, ScrollArrow, SectorWrapp, SectorData, DataLeitos, NumberLeitos, SectorName } from './Home.styles';
import {CgChevronRight} from 'react-icons/cg';
import {CgChevronLeft} from 'react-icons/cg';

const DisponibilidadeComponent = () => {
    return (
        <Disponibilidade>
            <TittleItens>Disponibilidade</TittleItens>
            <SectorAndArrow>
                <ScrollArrow>
                        <CgChevronLeft/>
                </ScrollArrow>
                <SectorWrapp>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 1</SectorName>
                    </SectorData>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 2</SectorName>
                    </SectorData>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 2</SectorName>
                    </SectorData>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 2</SectorName>
                    </SectorData>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 2</SectorName>
                    </SectorData>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 2</SectorName>
                    </SectorData>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 2</SectorName>
                    </SectorData>
                    <SectorData>
                        <DataLeitos>
                            <NumberLeitos>4</NumberLeitos>leitos
                        </DataLeitos>
                        <SectorName>Setor 2</SectorName>
                    </SectorData>
                </SectorWrapp>
                <ScrollArrow>
                        <CgChevronRight/>
                </ScrollArrow>
            </SectorAndArrow>
        </Disponibilidade>
    )
}

export default DisponibilidadeComponent
