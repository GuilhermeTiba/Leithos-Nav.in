import React from 'react';
import { useCount } from '../../contexts/countContext';
import {PopUp, PopUpWrapp, PopUpTitle, PopUpForm, PopUpField, PopUpButtons, PopUpCancel, PopUpCreate, PopUpLabel, PopUpStatus, PopUpButton} from './Sector.styles'
import { StatusAguardandoLimpeza, StatusAguardandoManutencao, StatusDisponivel, StatusEmLimpeza, StatusEmManutencao, StatusOcupado } from './SectorStatus';

const SectorPopUpStatus = ({
    showPopUpStatus, 
    listLeitos, 
    setListLeitos, 
    setShowPopUpStatus, 
    dataLeito, 
    setDataLeito, 
    setShowPopUpInfoPatient, 
    patientInfo,
    showPopUpInfoPatient
    }) => {

    const {
        countDispo, 
        setCountDispo, 
        countOcup, 
        setCountOcup, 
        countEmLimp, 
        setCountEmLimp, 
        countEmManu, 
        setCountEmManu, 
        countAguardLimp, 
        setCountAguardLimp, 
        countAguardManu, 
        setCountAguardManu
    } = useCount();

    const handleCancel = () => {
        setShowPopUpStatus(false);
    }

    const handleSave = (e) => {
        e.preventDefault();
        for (const [index] of listLeitos.entries()) {
            if (dataLeito.id === listLeitos[index].id) {
            console.log('save')
            if(listLeitos[index].status === 'Disponível'){
                setCountDispo(countDispo - 1);
            }
            if(listLeitos[index].status === 'Ocupado'){
                setCountOcup(countOcup - 1);
            }
            if(listLeitos[index].status === 'Em limpeza'){
                setCountEmLimp(countEmLimp - 1);
            }
            if(listLeitos[index].status === 'Em manutenção'){
                setCountEmManu(countEmManu - 1);
            }
            if(listLeitos[index].status === 'Aguardando manutenção'){
                setCountAguardManu(countAguardManu - 1);
            }
            if(listLeitos[index].status === 'Aguardando limpeza'){
                setCountAguardLimp(countAguardLimp - 1);
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
            setShowPopUpStatus(false);
        }
        }
        console.log(patientInfo);
        setShowPopUpStatus(false);
    }

    const handleUpdateOcupado = (e) => {
        e.preventDefault();

        setShowPopUpInfoPatient(true);
        const changedLeito = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusOcupado.colorLeft,
            bgIcon: StatusOcupado.colorRight,
            icon: StatusOcupado.icon,
            status: 'Ocupado'
        }
        setCountOcup(countOcup + 1)
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
        setCountDispo(countDispo + 1);
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
        setCountEmLimp(countEmLimp + 1)
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
        setCountEmManu(countEmManu + 1)
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
        setCountAguardLimp(countAguardLimp + 1)
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
        setCountAguardManu(countAguardManu + 1)
        setDataLeito(changedLeito)
    }

    const handleDeletar = (e) => {
        e.preventDefault();
        for (const [index] of listLeitos.entries()) {
            if (dataLeito.id === listLeitos[index].id) {
                const newList = listLeitos.filter((leito) => leito.id !== dataLeito.id);
                setListLeitos(newList);
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
                setShowPopUpStatus(false);
            }
        }
    }

    const handleChangeInfo = (e) => {
        e.preventDefault(e);
    }

    return (
        <PopUp active2 ={showPopUpStatus}>
            <PopUpWrapp>

                <PopUpTitle>{dataLeito.name}</PopUpTitle>
                <PopUpStatus color = {dataLeito.bgIcon}>{dataLeito.status}</PopUpStatus> 

                <PopUpForm>
                    <PopUpLabel>Atualizar status:</PopUpLabel>
                    <PopUpField>
                        {dataLeito.status === 'Ocupado' ?
                            <>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Disponível' ? 
                            <>
                            <PopUpButton onClick={handleUpdateOcupado}>Ocupado</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Aguardando manutenção' ? 
                            <>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            <PopUpButton onClick={handleUpdateOcupado}>Ocupado</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Em manutenção' ? 
                            <>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            <PopUpButton onClick={handleUpdateOcupado}>Ocupado</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Em limpeza' ? 
                            <>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            <PopUpButton onClick={handleUpdateOcupado}>Ocupado</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Aguardando limpeza' ? 
                            <>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            <PopUpButton onClick={handleUpdateOcupado}>Ocupado</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            </>
                            :
                            <></>
                        }
                    </PopUpField>

                    <PopUpField>
                        <PopUpLabel>Sobre o leito:</PopUpLabel>
                        <PopUpField>
                            <PopUpButton onClick={handleChangeInfo}>Alterar informações</PopUpButton>
                            <PopUpButton onClick={handleDeletar}>Deletar leito</PopUpButton>
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
