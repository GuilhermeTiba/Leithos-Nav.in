import React, {useContext, useState} from 'react'
import { StatusDisponivel } from '../components/Sector/SectorStatus';

const NecessaryContext = React.createContext();

const NecessaryInfoContext = ({children}) => {
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
        <NecessaryContext.Provider value={{
            showPopUpAdd, setShowPopUpAdd, showPopUpStatus, setShowPopUpStatus, showPopUpInfoPatient, setShowPopUpInfoPatient,
            showPopUpDeletar, setShowPopUpDeletar, showPopUpSuccessfully, setShowPopUpSuccessfully, showPopUpVacate, setShowPopUpVacate,
            showPopUpSucessfullyCreated, setShowPopUpSucessfullyCreated, showPopUpSuccesfullyDeleted, setShowPopUpSuccesfullyDeleted,
            showPopUpOccupied, setShowPopUpOccupied, showPopUpSuccessfullyAvaible, setShowPopUpSuccessfullyAvaible,
            showPopUpViewInfoPatient, setShowPopUpViewInfoPatient, showPopUpSuccessfullyUpdatedInfo, setShowPopUpSuccessfullyUpdatedInfo,
            dataLeito, setDataLeito, patientList, setPatientList, listLeitos, setListLeitos
        }}>
            {children}
        </NecessaryContext.Provider>
    )
}

export const useNecessary = () => useContext(NecessaryContext)
export default NecessaryInfoContext
