import React from 'react'
import { Data, DataNumber, DataAndIconWrapp, NumberStats, IconData, DataTxt } from './Sector.styles';
import {MdEventAvailable} from 'react-icons/md';
import {FaBroom} from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs';
import {ImBlocked} from 'react-icons/im'
import { useEffect, useState } from 'react/cjs/react.development';

const SectorData = ({listLeitos}) => {
    const [countDispo, setCountDispo] = useState(0)
    const [countOcup, setCountOcup] = useState(0)
    const [countEmLimp, setCountEmLimp] = useState(0)
    const [countEmManu, setCountEmManu] = useState(0)
    const [countAguardLimp, setCountAguardLimp] = useState(0)
    const [countAguardManu, setCountAguardManu] = useState(0)

    useEffect(() => {
        for (const [index] of listLeitos.entries()) {
            if (listLeitos[index].status === 'Disponível') {
                setCountDispo(countDispo + 1)
            }
            if (listLeitos[index].status === 'Ocupado') {
                setCountOcup(countOcup + 1)
            }
            if (listLeitos[index].status === 'Em limpeza') {
                setCountEmLimp(countEmLimp + 1)
            }
            if (listLeitos[index].status === 'Em manutenção') {
                setCountEmManu(countEmManu + 1)
            }
            if (listLeitos[index].status === 'Aguardando limpeza') {
                setCountAguardLimp(countAguardLimp + 1)
            }
            if (listLeitos[index].status === 'Aguardando manutenção') {
                setCountAguardManu(countAguardManu + 1)
            }
        }
    }, [listLeitos])

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
