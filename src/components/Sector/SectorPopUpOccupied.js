import React from 'react'
import { useCount } from '../../contexts/countContext'
import { useNecessary } from '../../contexts/necessaryInfoContext'
import { PopUpOccupied, PopUpWrappOccupied, PopUpFieldOccupied, PopUpTitleOccupied, PopUpStatusOccupied, PopUpButton, PopUpLabel, PopUpButtonsOccupied, PopUpFieldOccupiedStatus } from './Sector.styles'

const SectorPopUpOccupied = () => {
    const {
        showPopUpOccupied, 
        setShowPopUpOccupied, 
        dataLeito, 
        setShowPopUpVacate, 
        setShowPopUpSuccesfullyDeleted, 
        listLeitos, 
        setListLeitos, 
        setShowPopUpViewInfoPatient, 
        setPatientList, 
        patientList
    } = useNecessary();

    const {
        setCountDispo,
        countDispo,
        setCountOcup,
        countOcup,
        setCountEmLimp,
        countEmLimp,
        setCountEmManu,
        countEmManu,
        setCountAguardManu,
        countAguardManu,
        setCountAguardLimp,
        countAguardLimp


    } = useCount()

    const handleDesocupar = () => {
        setShowPopUpOccupied(false);
        setShowPopUpVacate(true);
    }

    const handleCancelar = () => {
        setShowPopUpOccupied(false);
    }

    const handleDeletar = (e) => {
        e.preventDefault();
        for (const [index] of listLeitos.entries()) {
            if (dataLeito.id === listLeitos[index].id) {
                const newList = listLeitos.filter((leito) => leito.id !== dataLeito.id);
                const newListInfoPatient = patientList.filter((patient) => patient.id !== dataLeito.id);
                setPatientList(newListInfoPatient);
                setListLeitos(newList);
                console.log(patientList)
                
                if(dataLeito.status === 'Disponível'){
                    setCountDispo(countDispo - 1);
                }
                if(dataLeito.status === 'Ocupado'){
                    setCountOcup(countOcup - 1);
                }
                if(dataLeito.status === 'Em limpeza'){
                    setCountEmLimp(countEmLimp - 1);
                }
                if(dataLeito.status === 'Em manutenção'){
                    setCountEmManu(countEmManu - 1);
                }
                if(dataLeito.status === 'Aguardando manutenção'){
                    setCountAguardManu(countAguardManu - 1);
                }
                if(dataLeito.status === 'Aguardando limpeza'){
                    setCountAguardLimp(countAguardLimp - 1);
                }
                setShowPopUpSuccesfullyDeleted(true);
                setShowPopUpOccupied(false)
            }
        }  
    }

    const handleOpenPatientInfo = () => {
        setShowPopUpOccupied(false);
        setShowPopUpViewInfoPatient(true);
    }

    return (
        <PopUpOccupied active={showPopUpOccupied}>
            <PopUpWrappOccupied>
                <PopUpFieldOccupiedStatus>
                    <PopUpTitleOccupied>{dataLeito.name}</PopUpTitleOccupied>
                    <PopUpStatusOccupied color = {dataLeito.bgIcon}>{dataLeito.status}</PopUpStatusOccupied>
                </PopUpFieldOccupiedStatus>

                <PopUpFieldOccupied>
                    <PopUpButton onClick={handleOpenPatientInfo}>Visualizar informações do paciente</PopUpButton>
                    <PopUpButton onClick={handleDesocupar}>Desocupar leito</PopUpButton>
                </PopUpFieldOccupied>

                <PopUpFieldOccupied>
                    <PopUpLabel>Sobre leito:</PopUpLabel>
                    <PopUpButtonsOccupied>
                        <PopUpButton onClick={handleDeletar}>Deletar leito</PopUpButton>
                        <PopUpButton onClick={handleCancelar}>Cancelar</PopUpButton>
                    </PopUpButtonsOccupied>
                </PopUpFieldOccupied>
            </PopUpWrappOccupied>
        </PopUpOccupied>
    )
}

export default SectorPopUpOccupied
