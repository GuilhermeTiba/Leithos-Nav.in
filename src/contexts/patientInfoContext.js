import React, {useContext, useState} from 'react'

const infoPatientContext = React.createContext()

const PatientInfoContext = ({children}) => {
    const [namePatient, setNamePatient] = useState("");
    const [sexPatient, setSexPatient] = useState("");
    const [agePatient, setAgePatient] = useState('');
    const [diagnosisPatient, setDiagnosisPatient] = useState("")
    const [addtionalInfoPatient, setAdditionalInfoPatient] = useState("");

    return (
        <infoPatientContext.Provider value={{
            namePatient,
            setNamePatient,
            sexPatient,
            setSexPatient,
            setAgePatient,
            agePatient,
            diagnosisPatient,
            setDiagnosisPatient,
            addtionalInfoPatient,
            setAdditionalInfoPatient
        }}>
            {children}
        </infoPatientContext.Provider>
    )
}
export const usePatientInfo = () => useContext(infoPatientContext)
export default PatientInfoContext
