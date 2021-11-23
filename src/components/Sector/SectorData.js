import React from 'react'
import { Data, DataNumber, DataAndIconWrapp, NumberStats, IconData, DataTxt } from './Sector.styles';
import {MdEventAvailable} from 'react-icons/md';
import {FaBroom} from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs';
import {ImBlocked} from 'react-icons/im'

const SectorData = () => {
    return (
        <Data>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>6</NumberStats>
                    <IconData><MdEventAvailable/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Disponíveis</DataTxt>
            </DataNumber>


            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>6</NumberStats>
                    <IconData><ImBlocked/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Ocupados</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>3</NumberStats>
                    <IconData><FaBroom/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Aguardando limp</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>1</NumberStats>
                    <IconData><BsFillGearFill/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Aguardando manu</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>3</NumberStats>
                    <IconData><FaBroom/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Em limpeza</DataTxt>
            </DataNumber>
            <DataNumber>
                <DataAndIconWrapp>
                    <NumberStats>1</NumberStats>
                    <IconData><BsFillGearFill/></IconData>
                </DataAndIconWrapp>
                <DataTxt>Em manutenção</DataTxt>
            </DataNumber>
        </Data>
    )
}

export default SectorData
