import React, {useState} from 'react';
import Leito from '../components/Sector/SectorLeito';
import { StatusAguardandoLimpeza, StatusAguardandoManutencao, StatusDisponivel, StatusEmLimpeza, StatusEmManutencao, StatusOcupado } from '../components/Sector/SectorStatus';

export const LeitosContext = React.createContext();

const ListLeitosContext = ({children}) => {
    const [listLeitos, setListLeitos] = useState([
        <Leito {...StatusOcupado} nomeLeito={'Leito A'}/>,
        <Leito {...StatusDisponivel} nomeLeito={'Leito B'}/>,
        <Leito {...StatusEmLimpeza} nomeLeito={'Leito C'}/>,
        <Leito {...StatusAguardandoManutencao} nomeLeito={'Leito C'}/>,
        <Leito {...StatusAguardandoLimpeza} nomeLeito={'Leito C'}/>,
        <Leito {...StatusEmLimpeza} nomeLeito={'Leito C'}/>,
        <Leito {...StatusAguardandoManutencao} nomeLeito={'Leito C'}/>,
        <Leito {...StatusEmManutencao} nomeLeito={'Leito C'}/>,
    ]);

    const listValues = {
        listLeitos: listLeitos,
        setListLeitos: setListLeitos
    }

    return (
        <LeitosContext.Provider value={listValues}>
            {children}
        </LeitosContext.Provider>
    )
}

export default ListLeitosContext
