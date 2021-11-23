import { HomeContainer, HomeGrid, NavBarSide } from '../components/Home/Home.styles';
import NavBar from '../components/NavBar';
import Sector from '../components/Sector';
import { GlobalStyles } from '../styles/GlobalStyles';
import React, {useState} from 'react';
import SectorPopUpAdd from '../components/Sector/SectorPopUpAdd';
import Leito from '../components/Sector/SectorLeito';
import { StatusAguardandoLimpeza, StatusAguardandoManutencao, StatusDisponivel, StatusEmLimpeza, StatusEmManutencao, StatusOcupado } from '../components/Sector/SectorStatus';
//import SectorPopUpStatus from '../components/Sector/SectorPopUpStatus';

const SectorPage = ({active, toggle}) => {
    const [showPopUpAdd, setShowPopUpAdd] = useState(false);
    const [showPopUpStatus, setShowPopUpStatus] = useState(false);
    const [listLeitos, setListLeitos] = useState([
        <Leito {...StatusOcupado} nomeLeito={'Leito A'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>,
        <Leito {...StatusDisponivel} nomeLeito={'Leito B'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>,
        <Leito {...StatusEmLimpeza} nomeLeito={'Leito C'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>,
        <Leito {...StatusAguardandoManutencao} nomeLeito={'Leito C'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>,
        <Leito {...StatusAguardandoLimpeza} nomeLeito={'Leito C'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>,
        <Leito {...StatusEmLimpeza} nomeLeito={'Leito C'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>,
        <Leito {...StatusAguardandoManutencao} nomeLeito={'Leito C'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>,
        <Leito {...StatusEmManutencao} nomeLeito={'Leito C'} setShowPopUpAdd={setShowPopUpAdd} showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus}/>
    ]);

    return (
        <>
            <SectorPopUpAdd showPopUpAdd={showPopUpAdd} setShowPopUpAdd={setShowPopUpAdd} listLeitos={listLeitos} setListLeitos={setListLeitos}/>
            {/*<SectorPopUpStatus showPopUpStatus={showPopUpAdd} setShowPopUpStatus={setShowPopUpAdd} listLeitos={listLeitos} setListLeitos={setListLeitos}/>*/}
            <GlobalStyles/>
            <HomeContainer active={showPopUpAdd}>
                <HomeGrid active={active}>
                    <NavBarSide>
                        <NavBar/>
                    </NavBarSide>
                    <Sector showPopUpAdd={showPopUpAdd} setShowPopUpAdd={setShowPopUpAdd} listLeitos ={listLeitos} setListLeitos={setListLeitos} setShowPopUpStatus={setShowPopUpStatus} showPopUpStatus={showPopUpStatus}/>
                </HomeGrid>
            </HomeContainer>
        </>
    )
}

export default SectorPage
