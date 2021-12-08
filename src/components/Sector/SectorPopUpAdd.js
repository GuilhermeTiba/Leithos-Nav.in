import React, { useState } from 'react'
import { useCount } from '../../contexts/countContext';
import {PopUp, PopUpWrapp, PopUpTitle, PopUpForm, PopUpField, PopUpButtons, PopUpCancel, PopUpCreate, PopUpLabel, PopUpInput, PopUpInputSelect, SelectOption} from './Sector.styles'
import { StatusAguardandoLimpeza, StatusAguardandoManutencao, StatusDisponivel, StatusEmLimpeza, StatusEmManutencao } from './SectorStatus';

const SectorPopUpAdd = ({
    showPopUpAdd, 
    setShowPopUpAdd, 
    listLeitos, 
    setListLeitos,
    setShowPopUpSucessfullyCreated
}) => {
    const [nameLeito, setNameLeito] = useState('');
    const [statusLeito, setStatusLeito] = useState('StatusDiponivel')
    const {
        countDispo, 
        setCountDispo,  
        countEmLimp, 
        setCountEmLimp, 
        countEmManu, 
        setCountEmManu, 
        countAguardLimp, 
        setCountAguardLimp, 
        countAguardManu, 
        setCountAguardManu} = useCount()

    const handleCreate = (e) => {
        e.preventDefault();
        //POST para o backend
        if (statusLeito === 'StatusDiponivel') {
            const newLeitosList = [...listLeitos, {
                id: Math.floor(Math.random()* 10000),
                name: nameLeito,
                style : {
                    colorRight: StatusDisponivel.colorRight,
                    colorLeft: StatusDisponivel.colorLeft,
                    icon: StatusDisponivel.icon
                },
                status: 'Disponível',
            }];
            setCountDispo(countDispo + 1);
            setListLeitos(newLeitosList);
            setNameLeito('');
            setShowPopUpAdd(false);
            setShowPopUpSucessfullyCreated(true);
        }
        if (statusLeito === 'StatusAguardandoManutencao') {
            const newLeitosList = [...listLeitos, {
                id: Math.floor(Math.random()* 10000),
                name: nameLeito,
                style : {
                colorRight: StatusAguardandoManutencao.colorRight,
                colorLeft: StatusAguardandoManutencao.colorLeft,
                icon: StatusAguardandoManutencao.icon
                },
                status: 'Aguardando manutenção'
            }];
            setCountAguardManu(countAguardManu + 1);
            setListLeitos(newLeitosList);
            setNameLeito('');
            setShowPopUpAdd(false);
            setShowPopUpSucessfullyCreated(true);
        }
        if (statusLeito === 'StatusAguardandoLimpeza') {
            const newLeitosList = [...listLeitos, {
                id: Math.floor(Math.random()* 100),
                name: nameLeito,
                style : {
                    colorRight: StatusAguardandoLimpeza.colorRight,
                    colorLeft: StatusAguardandoLimpeza.colorLeft,
                    icon: StatusAguardandoLimpeza.icon
                },
                status: 'Aguardando limpeza'
            }];
            setCountAguardLimp(countAguardLimp + 1);
            setListLeitos(newLeitosList);
            setNameLeito('');
            setShowPopUpAdd(false);
            setShowPopUpSucessfullyCreated(true);
        }
        if (statusLeito === 'StatusEmLimpeza') {
            const newLeitosList = [...listLeitos, {
                id: Math.floor(Math.random()* 100),
                name: nameLeito,
                style : {
                colorRight: StatusEmLimpeza.colorRight,
                colorLeft: StatusEmLimpeza.colorLeft,
                icon: StatusEmLimpeza.icon
                },
                status: 'Em limpeza'
            }];
            setCountEmLimp(countEmLimp + 1);
            setListLeitos(newLeitosList);
            setNameLeito('');
            setShowPopUpAdd(false)
            setShowPopUpSucessfullyCreated(true);
        }
        if (statusLeito === 'StatusEmManutencao') {
            const newLeitosList = [...listLeitos, {
                id: Math.floor(Math.random()* 100),
                name: nameLeito,
                style : {
                colorRight: StatusEmManutencao.colorRight,
                colorLeft: StatusEmManutencao.colorLeft,
                icon: StatusEmManutencao.icon
                },
                status: 'Em manutenção'
            }];
            setCountEmManu(countEmManu + 1);
            setListLeitos(newLeitosList);
            setNameLeito('');
            setShowPopUpAdd(false)
            setShowPopUpSucessfullyCreated(true);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setShowPopUpAdd(false);
        setNameLeito('')
    }

    return (
        <PopUp active={showPopUpAdd}>
            <PopUpWrapp>

                <PopUpTitle> Novo leito</PopUpTitle>

                <PopUpForm>
                    <PopUpField>
                        <PopUpLabel>Identificação do leito</PopUpLabel>
                        <PopUpInput type='text' maxLength={9} value={nameLeito} onChange={(e) => setNameLeito(e.target.value)}></PopUpInput>
                    </PopUpField>

                    <PopUpField>
                        <PopUpLabel>Status inicial</PopUpLabel>
                        <PopUpInputSelect value ={statusLeito} onChange={(e) => setStatusLeito(e.target.value)}>
                            <SelectOption selected value='StatusDiponivel'>Disponível</SelectOption>
                            <SelectOption value = 'StatusAguardandoManutencao'>Aguardando manutenção</SelectOption>
                            <SelectOption value ='StatusAguardandoLimpeza'>Aguardando Limpeza</SelectOption>
                            <SelectOption value ='StatusEmLimpeza'>Em limpeza</SelectOption>
                            <SelectOption value ='StatusEmManutencao'>Em manutenção</SelectOption>
                        </PopUpInputSelect>
                    </PopUpField>

                    <PopUpField>
                        <PopUpLabel>Status inicial</PopUpLabel>
                        <PopUpInputSelect>
                            <SelectOption>Setor 1</SelectOption>
                            <SelectOption>Setor 2</SelectOption>
                            <SelectOption>Setor 3</SelectOption>
                        </PopUpInputSelect>
                    </PopUpField>

                </PopUpForm>
                <PopUpButtons>
                        <PopUpCancel onClick={handleCancel}>Cancelar</PopUpCancel>
                        <PopUpCreate onClick={handleCreate}>Criar</PopUpCreate>
                    </PopUpButtons>
            </PopUpWrapp>
        </PopUp>
    )
}

export default SectorPopUpAdd
