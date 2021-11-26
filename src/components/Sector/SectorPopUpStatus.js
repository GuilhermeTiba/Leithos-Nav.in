import React from 'react';
import {PopUp, PopUpWrapp, PopUpTitle, PopUpForm, PopUpField, PopUpButtons, PopUpCancel, PopUpCreate, PopUpLabel, PopUpStatus, PopUpButton} from './Sector.styles'
import { StatusAguardandoLimpeza, StatusAguardandoManutencao, StatusDisponivel, StatusEmLimpeza, StatusEmManutencao, StatusOcupado } from './SectorStatus';

const SectorPopUpStatus = ({showPopUpStatus, listLeitos, setListLeitos, setShowPopUpStatus, dataLeito, setDataLeito}) => {

    const handleCancel = () => {
        setShowPopUpStatus(false);
    }

    const handleSave = (e) => {
        e.preventDefault();
        for (const [index] of listLeitos.entries()) {
            if (dataLeito.id === listLeitos[index].id) {
            console.log('save')
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
            setShowPopUpStatus(false);
        }
        }
        
    }

    const handleUpdateOcupado = (e) => {
        e.preventDefault();
        const changedLeito = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusOcupado.colorLeft,
            bgIcon: StatusOcupado.colorRight,
            icon: StatusOcupado.icon,
            status: 'Ocupado'
        }
        setDataLeito(changedLeito)
    }

    const handleUpdateDisponivel = (e) => {
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

    const handleUpdateEmLimp = (e) => {
        e.preventDefault();
        const changedLeito = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusEmLimpeza.colorLeft,
            bgIcon: StatusEmLimpeza.colorRight,
            icon: StatusEmLimpeza.icon,
            status: 'Em limpeza'
        }
        setDataLeito(changedLeito)
    }

    const handleUpdateEmManu = (e) => {
        e.preventDefault();
        const changedLeito = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusEmManutencao.colorLeft,
            bgIcon: StatusEmManutencao.colorRight,
            icon: StatusEmManutencao.icon,
            status: 'Em manutenção'
        }
        setDataLeito(changedLeito)
    }

    const handleUpdateAguardLimp = (e) => {
        e.preventDefault();
        const changedLeito = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusAguardandoLimpeza.colorLeft,
            bgIcon: StatusAguardandoLimpeza.colorRight,
            icon: StatusAguardandoLimpeza.icon,
            status: 'Aguardando limpeza'
        }
        setDataLeito(changedLeito)
    }

    const handleUpdateAguardManu = (e) => {
        e.preventDefault();
        const changedLeito = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusAguardandoManutencao.colorLeft,
            bgIcon: StatusAguardandoManutencao.colorRight,
            icon: StatusAguardandoManutencao.icon,
            status: 'Aguardando manutenção'
        }
        setDataLeito(changedLeito)
    }

    // const handleDeletar = (e) => {
    //     e.preventDefault();
    //     for (const [index] of listLeitos.entries()) {
    //         if (dataLeito.id === listLeitos[index].id) {
    //             const newList = listLeitos.filter((leito) => leito[index].id ===! dataLeito.id);
    //             setListLeitos(newList)
    //         }
    //     }
    // }

    return (
        <PopUp active2 ={showPopUpStatus}>
            <PopUpWrapp>

                <PopUpTitle>{dataLeito.name}</PopUpTitle>
                <PopUpStatus color = {dataLeito.bgIcon}>{dataLeito.status}</PopUpStatus> 

                <PopUpForm>
                    <PopUpLabel>Atualizar status:</PopUpLabel>
                    <PopUpField>
                        <PopUpButton onClick={handleUpdateOcupado}>Ocupado</PopUpButton>
                        <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                        <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                        <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                        <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                        <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                    </PopUpField>

                    <PopUpField>
                        <PopUpLabel>Sobre o leito:</PopUpLabel>
                        <PopUpField>
                            <PopUpButton>Alterar informações</PopUpButton>
                            <PopUpButton>Deletar leito</PopUpButton>
                        </PopUpField>
                    </PopUpField>

                </PopUpForm>
                <PopUpButtons>
                        <PopUpCancel onClick={handleCancel}>Cancelar</PopUpCancel>
                        <PopUpCreate onClick={handleSave}>Salvar</PopUpCreate>
                    </PopUpButtons>
            </PopUpWrapp>
        </PopUp>
    )

}

export default SectorPopUpStatus
