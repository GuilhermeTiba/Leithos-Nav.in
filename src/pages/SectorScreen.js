import { HomeContainer, HomeGrid, NavBarSide } from '../styles/HomeAndSectorGrid.js';
import NavBar from '../components/NavBar';
import Sector from '../components/Sector';
import { GlobalStyles } from '../styles/GlobalStyles';
import React, {useState} from 'react';
import SectorPopUpAdd from '../components/Sector/SectorPopUpAdd';
import { StatusDisponivel} from '../components/Sector/SectorStatus';
import SectorPopUpStatus from '../components/Sector/SectorPopUpStatus';
import SectorPopUpPatientInfo from '../components/Sector/SectorPopUpPatientInfo.js';
import SectorPopUpDeletar from '../components/Sector/SectorPopUpDeletar.js';
import SectorSuccessfullyBooked from '../components/Sector/SectorSuccessfullyBooked.js';
import SectorPopUpVacate from '../components/Sector/SectorPopUpVacate.js';
import SectorPopUpSucessfullyCreated from '../components/Sector/SectorPopUpSucessfullyCreated.js';
import SectorPopUpSuccessfullyDeleted from '../components/Sector/SectorPopUpSuccessfullyDeleted.js';
import SectorPopUpOccupied from '../components/Sector/SectorPopUpOccupied.js';
import SectorPopUpSuccessfullyAvaible from '../components/Sector/SectorPopUpSuccessfullyAvaible.js';
import SectorPopUpViewInfoPatient from '../components/Sector/SectorPopUpViewInfoPatient.js';
import SectorPopUpSuccessfullyUpdatedInfo from '../components/Sector/SectorPopUpSuccessfullyUpdatedInfo.js';

const SectorPage = ({active, toggle}) => {
    const [showPopUpAdd, setShowPopUpAdd] = useState(false);
    const [showPopUpStatus, setShowPopUpStatus] = useState(false);
    const [showPopUpInfoPatient, setShowPopUpInfoPatient] = useState(false);
    const [showPopUpDeletar, setShowPopUpDeletar] = useState(false);
    const [showPopUpSuccessfully, setShowPopUpSuccessfully] = useState(false);
    const [showPopUpVacate, setShowPopUpVacate] = useState(false);
    const [showPopUpSucessfullyCreated, setShowPopUpSucessfullyCreated] = useState(false);
    const [showPopUpSuccesfullyDeleted, setShowPopUpSuccesfullyDeleted] = useState(false);
    const [showPopUpOccupied, setShowPopUpOccupied] = useState(false);
    const [showPopUpSuccessfullyAvaible, setShowPopUpSuccessfullyAvaible] = useState(false);
    const [showPopUpViewInfoPatient, setShowPopUpViewInfoPatient] = useState(false);
    const [showPopUpSuccessfullyUpdatedInfo, setShowPopUpSuccessfullyUpdatedInfo] = useState(false);

    const [dataLeito, setDataLeito] = useState('');
    const [patientList, setPatientList] = useState([])
    const [listLeitos, setListLeitos] = useState([
        {
            id: Math.floor(Math.random()*10000),
            name: 'Leito A',
            style : {
                colorRight: StatusDisponivel.colorRight,
                colorLeft: StatusDisponivel.colorLeft,
                icon: StatusDisponivel.icon
            },
            status: 'Disponível',
        }
    ]);

    return (
        <>
            <SectorPopUpAdd 
            showPopUpAdd={showPopUpAdd}
            setShowPopUpAdd={setShowPopUpAdd} 
            listLeitos={listLeitos} 
            setListLeitos={setListLeitos} 
            setShowPopUpStatus={setShowPopUpStatus} 
            dataLeito={dataLeito} 
            setDataLeito={setDataLeito}
            setShowPopUpSucessfullyCreated={setShowPopUpSucessfullyCreated}
            />
            <SectorPopUpStatus showPopUpStatus={showPopUpStatus} setShowPopUpStatus={setShowPopUpStatus} listLeitos={listLeitos} setListLeitos={setListLeitos} dataLeito={dataLeito} setDataLeito={setDataLeito} showPopUpInfoPatient={showPopUpInfoPatient} setShowPopUpInfoPatient={setShowPopUpInfoPatient} showPopUpDeletar={showPopUpDeletar} setShowPopUpDeletar={setShowPopUpDeletar}/>
            <SectorPopUpPatientInfo showPopUpInfoPatient={showPopUpInfoPatient} setShowPopUpInfoPatient={setShowPopUpInfoPatient} dataLeito={dataLeito} setDataLeito={setDataLeito} patientList={patientList} setPatientList={setPatientList} setShowPopUpStatus={setShowPopUpStatus} listLeitos={listLeitos} setListLeitos={setListLeitos} setShowPopUpSuccessfully={setShowPopUpSuccessfully}/>
            <SectorPopUpDeletar listLeitos={listLeitos} setListLeitos={setListLeitos} dataLeito={dataLeito} setShowPopUpStatus={setShowPopUpStatus} showPopUpDeletar={showPopUpDeletar} setShowPopUpDeletar={setShowPopUpDeletar} setShowPopUpSuccesfullyDeleted={setShowPopUpSuccesfullyDeleted}/>
            <SectorSuccessfullyBooked showPopUpSuccessfully={showPopUpSuccessfully} setShowPopUpSuccessfully={setShowPopUpSuccessfully}/>
            <SectorPopUpVacate showPopUpVacate={showPopUpVacate} setShowPopUpVacate={setShowPopUpVacate} dataLeito={dataLeito} setDataLeito={setDataLeito} listLeitos={listLeitos} setShowPopUpSuccessfullyAvaible={setShowPopUpSuccessfullyAvaible} patientList={patientList} setPatientList = {setPatientList}/>
            <SectorPopUpSucessfullyCreated showPopUpSucessfullyCreated={showPopUpSucessfullyCreated} setShowPopUpSucessfullyCreated={setShowPopUpSucessfullyCreated} />
            <SectorPopUpSuccessfullyDeleted showPopUpSuccesfullyDeleted={showPopUpSuccesfullyDeleted} setShowPopUpSuccesfullyDeleted={setShowPopUpSuccesfullyDeleted} setShowPopUpDeletar={setShowPopUpDeletar}/>
            <SectorPopUpOccupied showPopUpOccupied={showPopUpOccupied} setShowPopUpOccupied={setShowPopUpOccupied} dataLeito={dataLeito} showPopUpVacate={showPopUpVacate} setShowPopUpVacate={setShowPopUpVacate} setShowPopUpSuccesfullyDeleted={setShowPopUpSuccesfullyDeleted} listLeitos={listLeitos} setListLeitos={setListLeitos} setShowPopUpInfoPatient={setShowPopUpInfoPatient} showPopUpViewInfoPatient={showPopUpViewInfoPatient} setShowPopUpViewInfoPatient={setShowPopUpViewInfoPatient} patientList={patientList} setPatientList = {setPatientList}/>
            <SectorPopUpSuccessfullyAvaible showPopUpSuccessfullyAvaible={showPopUpSuccessfullyAvaible} setShowPopUpSuccessfullyAvaible={setShowPopUpSuccessfullyAvaible}/>
            <SectorPopUpViewInfoPatient patientList={patientList} setPatientList={setPatientList} listLeitos={listLeitos} dataLeito={dataLeito} showPopUpViewInfoPatient={showPopUpViewInfoPatient} setShowPopUpViewInfoPatient={setShowPopUpViewInfoPatient} setShowPopUpOccupied={setShowPopUpOccupied} setShowPopUpSuccessfullyUpdatedInfo={setShowPopUpSuccessfullyUpdatedInfo}/>
            <SectorPopUpSuccessfullyUpdatedInfo showPopUpSuccessfullyUpdatedInfo = {showPopUpSuccessfullyUpdatedInfo} setShowPopUpSuccessfullyUpdatedInfo={setShowPopUpSuccessfullyUpdatedInfo}/>

            <GlobalStyles/>
            <HomeContainer active={showPopUpAdd} active2={showPopUpStatus} active4={showPopUpDeletar} active5={showPopUpSuccessfully} active6={showPopUpVacate} active7={showPopUpSucessfullyCreated} active8={showPopUpOccupied} active9={showPopUpSuccesfullyDeleted} active10={showPopUpSuccessfullyAvaible} active11={showPopUpViewInfoPatient} active12={showPopUpSuccessfullyUpdatedInfo}>
                <HomeGrid active={active}>
                    <NavBarSide>
                        <NavBar/>
                    </NavBarSide>
                    <Sector 
                    showPopUpAdd={showPopUpAdd}
                    setShowPopUpAdd={setShowPopUpAdd} 
                    listLeitos ={listLeitos} 
                    setListLeitos={setListLeitos} 
                    setShowPopUpStatus={setShowPopUpStatus} 
                    showPopUpStatus={showPopUpStatus} 
                    dataLeito={dataLeito} setDataLeito={setDataLeito} 
                    patientLis={patientList}
                    showPopUpOccupied={showPopUpOccupied} setShowPopUpOccupied={setShowPopUpOccupied}
                    />
                </HomeGrid>
            </HomeContainer>
        </>
    )
}

export default SectorPage
