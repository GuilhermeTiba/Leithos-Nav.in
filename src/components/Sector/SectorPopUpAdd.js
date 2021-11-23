import ReactDOM from 'react-dom';
import React, { useState } from 'react'
import {PopUp, PopUpWrapp, PopUpTitle, PopUpForm, PopUpField, PopUpButtons, PopUpCancel, PopUpCreate, PopUpLabel, PopUpInput, PopUpInputSelect, SelectOption} from './Sector.styles'
import Leito from './SectorLeito';
import { StatusAguardandoLimpeza, StatusAguardandoManutencao, StatusDisponivel } from './SectorStatus';

const SectorPopUpAdd = ({showPopUpAdd, setShowPopUpAdd, listLeitos, setListLeitos}) => {
    const [nameLeito, setNameLeito] = useState('');
    const [statusLeito, setStatusLeito] = useState('')

    const handleCreate = (e) => {
        e.preventDefault();
        if (statusLeito === 'StatusDiponivel') {
            const newLeitosList = [...listLeitos, <Leito {...StatusDisponivel} nomeLeito={nameLeito}/>];
            setListLeitos(newLeitosList)
            ReactDOM.render(listLeitos, document.getElementById('dashboardleitos'));
            setNameLeito('')
            setShowPopUpAdd(false)
        }
        if (statusLeito === 'StatusAguardandoManutencao') {
            const newLeitosList = [...listLeitos, <Leito {...StatusAguardandoManutencao} nomeLeito={nameLeito} />];
            setListLeitos(newLeitosList)
            ReactDOM.render(listLeitos, document.getElementById('dashboardleitos'));
            setNameLeito('')
            setShowPopUpAdd(false)
        }
        if (statusLeito === 'StatusAguardandoLimpeza') {
            const newLeitosList = [...listLeitos, <Leito {...StatusAguardandoLimpeza} nomeLeito={nameLeito} />];
            setListLeitos(newLeitosList)
            ReactDOM.render(listLeitos, document.getElementById('dashboardleitos'));
            setNameLeito('')
            setShowPopUpAdd(false)
        }
        console.log(statusLeito)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setShowPopUpAdd(false);
        setNameLeito('')
    }

    return (
        <PopUp active={showPopUpAdd}>
            <PopUpWrapp>

                <PopUpTitle> Formulário de criação de leito</PopUpTitle>

                <PopUpForm>
                    <PopUpField>
                        <PopUpLabel>Identificação do leito</PopUpLabel>
                        <PopUpInput type='text' maxLength={9} value={nameLeito} onChange={(e) => setNameLeito(e.target.value)}></PopUpInput>
                    </PopUpField>

                    <PopUpField>
                        <PopUpLabel>Status inicial</PopUpLabel>
                        <PopUpInputSelect onChange={(e) => setStatusLeito(e.target.value)}>
                            <SelectOption value='StatusDiponivel'>Disponível</SelectOption>
                            <SelectOption value = 'StatusAguardandoManutencao'>Aguardando manutenção</SelectOption>
                            <SelectOption value ='StatusAguardandoLimpeza'>Aguardando Limpeza</SelectOption>
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
