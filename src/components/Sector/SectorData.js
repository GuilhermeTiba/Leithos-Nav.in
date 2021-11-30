import React from 'react'
import { Data, DataNumber, DataAndIconWrapp, NumberStats, IconData, DataTxt } from './Sector.styles';
import {MdEventAvailable} from 'react-icons/md';
import {FaBroom} from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs';
import {ImBlocked} from 'react-icons/im';
import { useCount } from '../../contexts/countContext';

const SectorData = () => {
    const {
        countDispo, 
        countOcup,  
        countEmLimp, 
        countEmManu, 
        countAguardLimp, 
        countAguardManu, 
        } = useCount()

    return (
        <Data>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>{countDispo}</NumberStats>
                    <IconData><MdEventAvailable/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Disponíveis</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>{countOcup}</NumberStats>
                    <IconData><ImBlocked/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Ocupados</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>{countAguardLimp}</NumberStats>
                    <IconData><FaBroom/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Aguardando limp</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>{countAguardManu}</NumberStats>
                    <IconData><BsFillGearFill/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Aguardando manu</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>{countEmLimp}</NumberStats>
                    <IconData><FaBroom/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Em limpeza</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>{countEmManu}</NumberStats>
                    <IconData><BsFillGearFill/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Em manutenção</DataTxt>
            </DataNumber>
        </Data>
    )
}

export default SectorData
