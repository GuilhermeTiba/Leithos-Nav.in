import e from 'cors';
import React from 'react'
import { useCount } from '../../contexts/countContext'
import { PopUpVacate, PopUpButton, PopUpButtonsVacate, PopUpFieldVacate, PopUpLabelVacate, PopUpWrappVacate, PopUpCancelVacate, PopUpCreateVacate, PopUpButtonsVacateApply  } from './Sector.styles'
import { StatusDisponivel } from './SectorStatus';

const SectorPopUpVacate = ({showPopUpVacate, setShowPopUpVacate, dataLeito, setDataLeito, listLeitos, setShowPopUpSuccessfullyAvaible}) => {
    const {setCountDispo, countDispo} = useCount();
    const handleClick = (e) => {
        e.preventDefault();
        
        const changedLeito = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusDisponivel.colorLeft,
            bgIcon: StatusDisponivel.colorRight,
            icon: StatusDisponivel.icon,
            status: 'Disponível'
        }
        setDataLeito(changedLeito)
    }
    const handleSave = () => {
        for (const [index] of listLeitos.entries()) {
        if (dataLeito.id === listLeitos[index].id) {
        if(listLeitos[index].status === 'Disponível'){
            setCountDispo(countDispo - 1);
        }
        listLeitos[index] = 
        {
            id: listLeitos[index].id,
            name: listLeitos[index].name,
            style : {
                colorRight: dataLeito.bgIcon,
                colorLeft: dataLeito.bgText,
                icon: dataLeito.icon
            },
            status: dataLeito.status
        }
        setCountDispo(countDispo + 1);
        setShowPopUpVacate(false);
        setShowPopUpSuccessfullyAvaible(true);
        }}
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setShowPopUpVacate(false)
    }
        

    return (
        <PopUpVacate active={showPopUpVacate}>
            <PopUpWrappVacate>
                <PopUpFieldVacate>
                    <PopUpLabelVacate>Motivo da liberação do {dataLeito.name}?</PopUpLabelVacate>
                    <PopUpButtonsVacate>
                        <PopUpButton onClick={handleClick}>Alta</PopUpButton>
                        <PopUpButton onClick={handleClick}>Outro</PopUpButton>
                    </PopUpButtonsVacate>
                </PopUpFieldVacate>
            
                <PopUpButtonsVacateApply>
                    <PopUpCancelVacate onClick={handleCancel}>Cancelar</PopUpCancelVacate>
                    <PopUpCreateVacate onClick={handleSave}>Salvar</PopUpCreateVacate>
                </PopUpButtonsVacateApply>

            </PopUpWrappVacate>
        </PopUpVacate>
    )
}

export default SectorPopUpVacate
