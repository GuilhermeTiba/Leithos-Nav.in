import { HomeContainer, HomeGrid, NavBarSide } from '../styles/HomeAndSectorGrid.js';
import NavBar from '../components/NavBar';
import Sector from '../components/Sector';
import { GlobalStyles } from '../styles/GlobalStyles';
import SectorPopUpAdd from '../components/Sector/SectorPopUpAdd';
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
import { useNecessary } from '../contexts/necessaryInfoContext.js';

const SectorPage = ({active}) => {
    const {
        showPopUpAdd,
        showPopUpStatus,
        showPopUpDeletar,
        showPopUpSuccessfully, 
        showPopUpVacate,
        showPopUpSucessfullyCreated,
        showPopUpSuccesfullyDeleted,
        showPopUpOccupied, 
        showPopUpSuccessfullyAvaible,
        showPopUpViewInfoPatient, 
        showPopUpSuccessfullyUpdatedInfo
    } = useNecessary()

    return (
        <>
            <SectorPopUpAdd/>
            <SectorPopUpStatus/>
            <SectorPopUpPatientInfo/>
            <SectorPopUpDeletar/>
            <SectorSuccessfullyBooked/>
            <SectorPopUpVacate/>
            <SectorPopUpSucessfullyCreated/>
            <SectorPopUpSuccessfullyDeleted/>
            <SectorPopUpOccupied/>
            <SectorPopUpSuccessfullyAvaible/>
            <SectorPopUpSuccessfullyUpdatedInfo/>
            <SectorPopUpViewInfoPatient/>

            <GlobalStyles/>
            <HomeContainer active={showPopUpAdd} active2={showPopUpStatus} active4={showPopUpDeletar} active5={showPopUpSuccessfully} active6={showPopUpVacate} active7={showPopUpSucessfullyCreated} active8={showPopUpOccupied} active9={showPopUpSuccesfullyDeleted} active10={showPopUpSuccessfullyAvaible} active11={showPopUpViewInfoPatient} active12={showPopUpSuccessfullyUpdatedInfo}>
                <HomeGrid active={active}>
                    <NavBarSide>
                        <NavBar/>
                    </NavBarSide>
                    <Sector/>
                </HomeGrid>
            </HomeContainer>
        </>
    )
}

export default SectorPage
