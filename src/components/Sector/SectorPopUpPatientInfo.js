import React from 'react'
import { useState } from 'react/cjs/react.development';
import { PopUp, PopUpInput, PopUpLabel, PopUpWrapp, PopUpTitle, PopUpStatus, PopUpForm, PopUpField, SexWrapp, PopUpInputSelect, SelectOption, AgeWrapp, PopUpButtons, PopUpCancel, PopUpCreate, SexAgeWrapp  } from './Sector.styles'

const SectorPopUpPatientInfo = ({showPopUpInfoPatient, setShowPopUpInfoPatient, dataLeito, setDataLeito, patientList, setPatientList, setShowPopUpStatus, listLeitos}) => {
    const [namePatient, setNamePatient] = useState("");
    const [sexPatient, setSexPatient] = useState("");
    const [agePatient, setAgePatient] = useState('');
    const [diagnosisPatient, setDiagnosisPatient] = useState("")
    const [addtionalInfoPatient, setAdditionalInfoPatient] = useState("");


    const handleCancel = (e) => {
        e.preventDefault();
        setShowPopUpInfoPatient(false)
    }

    const handleSave = (e) => {
        e.preventDefault();

        const patientObj = ({
            patientName: namePatient,
            patientSexo: sexPatient,
            age: agePatient,
            diagnosis:diagnosisPatient,
            additionalInfo: addtionalInfoPatient
        }
        );
        setPatientList([...patientList, patientObj])

        for (const [index] of listLeitos.entries()) {
            if (dataLeito.id === listLeitos[index].id) {
            console.log('save')
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
        }
        }

        setNamePatient('');
        setAgePatient('');
        setSexPatient('');
        setDiagnosisPatient('');
        setAdditionalInfoPatient('');
        setShowPopUpInfoPatient(false);
        setShowPopUpStatus(false);
        console.log(patientList)
    }

    return (
        <PopUp active3 = {showPopUpInfoPatient}>
            <PopUpWrapp>
                <PopUpTitle>{dataLeito.name}</PopUpTitle>
                <PopUpStatus color = {dataLeito.bgIcon}>{dataLeito.status}</PopUpStatus> 

                <PopUpForm>
                    <PopUpField>
                        <PopUpLabel>Nome do paciente</PopUpLabel>
                        <PopUpInput type="text" value={namePatient} onChange={(e) => setNamePatient(e.target.value)}/>
                    </PopUpField>

                    <PopUpField>
                        <SexAgeWrapp>
                            <SexWrapp>
                                <PopUpLabel>Sexo</PopUpLabel>
                                <PopUpInputSelect value={sexPatient} onChange={(e) => setSexPatient(e.target.value)}>
                                    <SelectOption>Masculino</SelectOption>
                                    <SelectOption>Feminino</SelectOption>
                                </PopUpInputSelect>
                            </SexWrapp>

                            <AgeWrapp>
                                <PopUpLabel>Idade</PopUpLabel>
                                <PopUpInput type='text' value={agePatient} onChange={(e) => setAgePatient(e.target.value)}/>
                            </AgeWrapp>
                        </SexAgeWrapp>
                    </PopUpField>
                        
                    <PopUpField>
                        <PopUpLabel>Diagnóstico</PopUpLabel>
                        <PopUpInput type="text" value={diagnosisPatient} onChange={(e) => setDiagnosisPatient(e.target.value)}/>
                    </PopUpField>

                    <PopUpField>
                        <PopUpLabel>Informações adicionais</PopUpLabel>
                        <PopUpInput type="text" value={addtionalInfoPatient} onChange={(e) => setAdditionalInfoPatient(e.target.value)}/>
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

export default SectorPopUpPatientInfo
