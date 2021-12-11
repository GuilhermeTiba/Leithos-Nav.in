import { useCount } from '../../contexts/countContext';
import { useNecessary } from '../../contexts/necessaryInfoContext';
import {PopUp, PopUpWrapp, PopUpTitle, PopUpForm, PopUpField, PopUpButtons, PopUpCancel, PopUpCreate, PopUpLabel, PopUpStatus, PopUpButton} from './Sector.styles'
import { StatusAguardandoLimpeza, StatusAguardandoManutencao, StatusDisponivel, StatusEmLimpeza, StatusEmManutencao} from './SectorStatus';

const SectorPopUpStatus = () => {

    const {
    showPopUpStatus, 
    listLeitos, 
    setShowPopUpStatus, 
    dataLeito, 
    setDataLeito, 
    setShowPopUpInfoPatient, 
    patientInfo,
    setShowPopUpDeletar
    } = useNecessary();

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
        }}
        console.log(patientInfo);
        setShowPopUpStatus(false);
    }

    const handleUpdateOcupado = (e) => {
        e.preventDefault();
        setShowPopUpInfoPatient(true);
    }

    const handleUpdateDisponivel = (e) => {
        e.preventDefault();
        const changedLeitoObj = {
            name: dataLeito.name,
            id: dataLeito.id,
            bgText: StatusDisponivel.colorLeft,
            bgIcon: StatusDisponivel.colorRight,
            icon: StatusDisponivel.icon,
            status: 'Disponível'
        }
        setDataLeito(changedLeitoObj);
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

    const handleDeletar = (e) => {
        e.preventDefault();
        setShowPopUpStatus(false);
        setShowPopUpDeletar(true);
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
                    
                    <PopUpField>
                        {dataLeito.status === 'Ocupado' ?
                            <>
                            <PopUpLabel>Atualizar status:</PopUpLabel>
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
                            <PopUpButton onClick={handleUpdateOcupado}>Reservar leito</PopUpButton>
                            <PopUpLabel>Atualizar status:</PopUpLabel>
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
                            <PopUpLabel>Atualizar status:</PopUpLabel>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Em manutenção' ? 
                            <>
                            <PopUpLabel>Atualizar status:</PopUpLabel>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardLimp}>Aguardando limpeza</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Em limpeza' ? 
                            <>
                            <PopUpLabel>Atualizar status:</PopUpLabel>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                            </>
                            :
                            <></>
                        }
                        {dataLeito.status === 'Aguardando limpeza' ? 
                            <>
                            
                            <PopUpLabel>Atualizar status:</PopUpLabel>
                            <PopUpButton onClick={handleUpdateEmLimp}>Leito em limpeza</PopUpButton>
                            <PopUpButton onClick={handleUpdateEmManu}>Leito em manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateAguardManu}>Aguardando manutenção</PopUpButton>
                            <PopUpButton onClick={handleUpdateDisponivel}>Disponível</PopUpButton>
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
