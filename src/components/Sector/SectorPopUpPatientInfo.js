import React from 'react'
import { useState } from 'react/cjs/react.development';
//import { useCount } from '../../contexts/countContext';
import { PopUpInput, PopUpLabel, PopUpWrappPatientInfo, PopUpStatusPatientInfo, PopUpFormPatientInfo, PopUpFieldPatientInfo, SexWrapp, PopUpInputSelect, SelectOption, AgeWrapp, PopUpButtonsPatientInfo, PopUpCancel, PopUpCreate, SexAgeWrapp, PopUpPatientInfo, PopUpTitlePatientInfo, PopUpAddIndoPatientInfo  } from './Sector.styles'
import { StatusOcupado } from './SectorStatus';
//import { StatusOcupado } from './SectorStatus';

const SectorPopUpPatientInfo = ({showPopUpInfoPatient, setShowPopUpInfoPatient, dataLeito, setDataLeito, patientList, setPatientList, setShowPopUpStatus, listLeitos, setShowPopUpSuccessfully}) => {
    const [namePatient, setNamePatient] = useState("");
    const [sexPatient, setSexPatient] = useState("");
    const [agePatient, setAgePatient] = useState('');
    const [diagnosisPatient, setDiagnosisPatient] = useState("")
    const [addtionalInfoPatient, setAdditionalInfoPatient] = useState("");
    const [toggle, setToggle] = useState(false);

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
            listLeitos[index] = 
            {
                id: listLeitos[index].id,
                name: listLeitos[index].name,
                style : {
                    colorRight: StatusOcupado.colorRight,
                    colorLeft: StatusOcupado.colorLeft,
                    icon: StatusOcupado.icon
                },
                status: 'Ocupado'
            }}}

        setNamePatient('');
        setAgePatient('');
        setSexPatient('');
        setDiagnosisPatient('');
        setAdditionalInfoPatient('');
        setShowPopUpInfoPatient(false);
        setShowPopUpStatus(false);
        setShowPopUpSuccessfully(true);
        console.log(patientList)
    }

    return (
        <PopUpPatientInfo active = {showPopUpInfoPatient}>
            <PopUpWrappPatientInfo toggle={toggle}>
                <PopUpFieldPatientInfo>
                    <PopUpTitlePatientInfo>{dataLeito.name}</PopUpTitlePatientInfo>
                    <PopUpStatusPatientInfo color = {dataLeito.bgIcon}>{dataLeito.status}</PopUpStatusPatientInfo> 
                </PopUpFieldPatientInfo>
                <PopUpFormPatientInfo>
                    <PopUpFieldPatientInfo>
                        <PopUpLabel>Nome do paciente</PopUpLabel>
                        <PopUpInput type="text" value={namePatient} onChange={(e) => setNamePatient(e.target.value)}/>
                    </PopUpFieldPatientInfo>

                    <PopUpFieldPatientInfo>
                        <SexAgeWrapp>
                            <SexWrapp>
                                <PopUpLabel>Sexo</PopUpLabel>
                                <PopUpInputSelect onChange={(e) => setSexPatient(e.target.value)}>
                                    <SelectOption value={'Masculino'}>Masculino</SelectOption>
                                    <SelectOption value={'Feminino'}>Feminino</SelectOption>
                                </PopUpInputSelect>
                            </SexWrapp>

                            <AgeWrapp>
                                <PopUpLabel>Idade</PopUpLabel>
                                <PopUpInput type='text' value={agePatient} onChange={(e) => setAgePatient(e.target.value)}/>
                            </AgeWrapp>
                        </SexAgeWrapp>
                    </PopUpFieldPatientInfo>
                        
                    <PopUpFieldPatientInfo>
                        <PopUpLabel>Diagnóstico</PopUpLabel>
                        <PopUpInputSelect onChange={(e) => setDiagnosisPatient(e.target.value)}>
                            <SelectOption value={'NEUROLOGY'}>Neurologia</SelectOption>
                            <SelectOption value={'CARDIOLOGY'}>Cardiologia</SelectOption>
                            <SelectOption value={'PNEUMOLOGY'}>Pneumologia</SelectOption>
                            <SelectOption value={'ONCOLOGY'}>Oncologia</SelectOption>
                            <SelectOption value={'ORTHOPEDICS'}>Ortopedia</SelectOption>
                            <SelectOption value={'NEPHROLOGY'}>Nefrologia</SelectOption>
                            <SelectOption value={'ENDOCRINOLOGY'}>Endocrinologia</SelectOption>
                            <SelectOption value={'PALLIATIVE_CARE'}>Cuidados Paliativos</SelectOption>
                            <SelectOption value={'INFECTOLOGY'}>Infectologia</SelectOption>
                            <SelectOption value={'GENICOLOGY'}>Genicologia</SelectOption>
                            <SelectOption value={'COVID'}>Covid</SelectOption>
                            <SelectOption value={'OTHER'}>Outros</SelectOption>
                        </PopUpInputSelect>
                    </PopUpFieldPatientInfo>

                    <PopUpFieldPatientInfo>
                        <PopUpLabel>Informações adicionais</PopUpLabel>
                        <PopUpAddIndoPatientInfo type="text" value={addtionalInfoPatient} onChange={(e) => setAdditionalInfoPatient(e.target.value)}/>
                    </PopUpFieldPatientInfo>

                </PopUpFormPatientInfo >
                <PopUpButtonsPatientInfo>
                    <PopUpCancel onClick={handleCancel}>Cancelar</PopUpCancel>
                    <PopUpCreate onClick={handleSave}>Salvar</PopUpCreate>
                </PopUpButtonsPatientInfo>
            </PopUpWrappPatientInfo>


            {/* <PopUpWrappPatientInfo toggle={toggle}>
                <PopUpFieldPatientInfo>
                    <PopUpTitlePatientInfo>{dataLeito.name}</PopUpTitlePatientInfo>
                    <PopUpStatusPatientInfo color = {dataLeito.bgIcon}>{dataLeito.status}</PopUpStatusPatientInfo> 
                </PopUpFieldPatientInfo>
                <PopUpFormPatientInfo>
                    <PopUpFieldPatientInfo>
                        <PopUpLabel>Nome do paciente</PopUpLabel>
                        <PopUpInput type="text" value={namePatient} onChange={(e) => setNamePatient(e.target.value)}/>
                    </PopUpFieldPatientInfo>

                    <PopUpFieldPatientInfo>
                        <SexAgeWrapp>
                            <SexWrapp>
                                <PopUpLabel>Sexo</PopUpLabel>
                                <PopUpInputSelect onChange={(e) => setSexPatient(e.target.value)}>
                                    <SelectOption value={'Masculino'}>Masculino</SelectOption>
                                    <SelectOption value={'Feminino'}>Feminino</SelectOption>
                                </PopUpInputSelect>
                            </SexWrapp>

                            <AgeWrapp>
                                <PopUpLabel>Idade</PopUpLabel>
                                <PopUpInput type='text' value={agePatient} onChange={(e) => setAgePatient(e.target.value)}/>
                            </AgeWrapp>
                        </SexAgeWrapp>
                    </PopUpFieldPatientInfo>
                        
                    <PopUpFieldPatientInfo>
                        <PopUpLabel>Diagnóstico</PopUpLabel>
                        <PopUpInputSelect onChange={(e) => setDiagnosisPatient(e.target.value)}>
                            <SelectOption value={'NEUROLOGY'}>Neurologia</SelectOption>
                            <SelectOption value={'CARDIOLOGY'}>Cardiologia</SelectOption>
                            <SelectOption value={'PNEUMOLOGY'}>Pneumologia</SelectOption>
                            <SelectOption value={'ONCOLOGY'}>Oncologia</SelectOption>
                            <SelectOption value={'ORTHOPEDICS'}>Ortopedia</SelectOption>
                            <SelectOption value={'NEPHROLOGY'}>Nefrologia</SelectOption>
                            <SelectOption value={'ENDOCRINOLOGY'}>Endocrinologia</SelectOption>
                            <SelectOption value={'PALLIATIVE_CARE'}>Cuidados Paliativos</SelectOption>
                            <SelectOption value={'INFECTOLOGY'}>Infectologia</SelectOption>
                            <SelectOption value={'GENICOLOGY'}>Genicologia</SelectOption>
                            <SelectOption value={'COVID'}>Covid</SelectOption>
                            <SelectOption value={'OTHER'}>Outros</SelectOption>
                        </PopUpInputSelect>
                    </PopUpFieldPatientInfo>

                    <PopUpFieldPatientInfo>
                        <PopUpLabel>Informações adicionais</PopUpLabel>
                        <PopUpAddIndoPatientInfo type="text" value={addtionalInfoPatient} onChange={(e) => setAdditionalInfoPatient(e.target.value)}/>
                    </PopUpFieldPatientInfo>

                </PopUpFormPatientInfo>
                <PopUpButtonsPatientInfo>
                    <PopUpCancel onClick={handleCancel}>Cancelar</PopUpCancel>
                    <PopUpCreate onClick={handleSave}>Salvar</PopUpCreate>
                </PopUpButtonsPatientInfo>
            </PopUpWrappPatientInfo> */}
        </PopUpPatientInfo>
    )
}

export default SectorPopUpPatientInfo
