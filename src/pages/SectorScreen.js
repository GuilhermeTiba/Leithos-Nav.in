import { HomeContainer, HomeGrid, NavBarSide } from '../styles/HomeAndSectorGrid.js';
import NavBar from '../components/NavBar';
import Sector from '../components/Sector';
import { GlobalStyles } from '../styles/GlobalStyles';
import React, {useState} from 'react';
import SectorPopUpAdd from '../components/Sector/SectorPopUpAdd';
import { StatusDisponivel} from '../components/Sector/SectorStatus';
import SectorPopUpStatus from '../components/Sector/SectorPopUpStatus';

const SectorPage = ({active, toggle}) => {
    const [showPopUpAdd, setShowPopUpAdd] = useState(false);
    const [showPopUpStatus, setShowPopUpStatus] = useState(false);
    const [dataLeito, setDataLeito] = useState('');
    
    const [listLeitos, setListLeitos] = useState([
        {
            id: Math.floor(Math.random()*10000),
            name: 'Leito A',
            style : {
                colorRight: StatusDisponivel.colorRight,
                colorLeft: StatusDisponivel.colorLeft,
                icon: StatusDisponivel.icon
            },
            status: 'Disponível'
        }
    ]);

    return (
        <>
            <SectorPopUpAdd showPopUpAdd={showPopUpAdd} setShowPopUpAdd={setShowPopUpAdd} listLeitos={listLeitos} setListLeitos={setListLeitos} setShowPopUpStatus={setShowPopUpStatus} dataLeito={dataLeito} setDataLeito={setDataLeito}/>
            <SectorPopUpStatus showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus} listLeitos={listLeitos} setListLeitos={setListLeitos} dataLeito={dataLeito} setDataLeito={setDataLeito}/>
            <GlobalStyles/>
            <HomeContainer active={showPopUpAdd} active2={showPopUpStatus}>
                <HomeGrid active={active}>
                    <NavBarSide>
                        <NavBar/>
                    </NavBarSide>
                    <Sector showPopUpAdd={showPopUpAdd} setShowPopUpAdd={setShowPopUpAdd} listLeitos ={listLeitos} setListLeitos={setListLeitos} setShowPopUpStatus={setShowPopUpStatus} showPopUpStatus={showPopUpStatus} dataLeito={dataLeito} setDataLeito={setDataLeito}/>
                </HomeGrid>
            </HomeContainer>
        </>
    )
}

export default SectorPage
