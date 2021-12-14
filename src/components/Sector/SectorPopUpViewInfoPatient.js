import React, { useState } from "react";
import {
  PopUpLabelAddInfoText,
  PopUpLabelInfoAddInfo,
  PopUpIconPencil,
  PopUpLabelInfo,
  PopUpInputInfo,
  PopUpLabel,
  PopUpWrappPatientInfo,
  PopUpStatusPatientInfo,
  PopUpFormPatientInfo,
  PopUpFieldPatientInfo,
  SexWrapp,
  PopUpInputSelectInfo,
  SelectOption,
  AgeWrapp,
  PopUpCancel,
  SexAgeWrapp,
  PopUpPatientInfo,
  PopUpTitlePatientInfo,
  PopUpAddIndoPatientInfoInfo,
  PopUpButtonsPatientInfoView,
  PopUpButtonsPatientInfoView2,
  PopUpCreatePatientInfo,
  PopUpCancelPatientInfo,
} from "./Sector.styles";
import { FiEdit } from "react-icons/fi";
import { usePatientInfo } from "../../contexts/patientInfoContext";
import { useNecessary } from "../../contexts/necessaryInfoContext";

const SectorPopUpViewInfoPatient = () => {
  const [toggle, setToggle] = useState(false);
  const {
    setPatientList,
    patientList,
    dataLeito,
    showPopUpViewInfoPatient,
    setShowPopUpViewInfoPatient,
    setShowPopUpOccupied,
    setShowPopUpSuccessfullyUpdatedInfo,
  } = useNecessary();

  const {
    namePatient,
    setNamePatient,
    sexPatient,
    setSexPatient,
    setAgePatient,
    agePatient,
    diagnosisPatient,
    setDiagnosisPatient,
    addtionalInfoPatient,
    setAdditionalInfoPatient,
  } = usePatientInfo();

  const handleCancel = () => {
    setShowPopUpViewInfoPatient(false);
    setShowPopUpOccupied(true);
  };

  const handleClickPencil = () => {
    setToggle(!toggle);
  };

  const handleSave = (e) => {
    e.preventDefault();
    for (const [index] of patientList.entries()) {
      if (patientList[index].id === dataLeito.id) {
        const updateInfoPatient = {
          patientName: namePatient,
          patientSexo: sexPatient,
          age: agePatient,
          diagnosis: diagnosisPatient,
          additionalInfo: addtionalInfoPatient,
          id: dataLeito.id,
        };
        const newListPatient = [...patientList];
        newListPatient[index] = updateInfoPatient;
        setPatientList(newListPatient);
      }
    }
    setNamePatient("");
    setAgePatient("");
    setSexPatient("");
    setDiagnosisPatient("");
    setAdditionalInfoPatient("");
    console.log(patientList);
    setShowPopUpViewInfoPatient(false);
    setToggle(false);
    setShowPopUpSuccessfullyUpdatedInfo(true);
  };

  return (
    <>
      {patientList.map((patient) => {
        if (patient.id === dataLeito.id) {
          return (
            <PopUpPatientInfo active2={showPopUpViewInfoPatient}>
              <PopUpWrappPatientInfo>
                <PopUpFieldPatientInfo>
                  <PopUpTitlePatientInfo>
                    {dataLeito.name}
                  </PopUpTitlePatientInfo>
                  <PopUpStatusPatientInfo color={dataLeito.bgIcon}>
                    {dataLeito.status}
                  </PopUpStatusPatientInfo>
                </PopUpFieldPatientInfo>
                <PopUpIconPencil onClick={handleClickPencil}>
                  <FiEdit />
                </PopUpIconPencil>
                <PopUpFormPatientInfo>
                  <PopUpFieldPatientInfo>
                    <PopUpLabel>Nome do paciente</PopUpLabel>
                    <PopUpLabelInfo toggle={toggle}>
                      {patient.patientName}
                    </PopUpLabelInfo>
                    <PopUpInputInfo
                      toggle={toggle}
                      type="text"
                      value={namePatient}
                      onChange={(e) => setNamePatient(e.target.value)}
                    />
                  </PopUpFieldPatientInfo>

                  <PopUpFieldPatientInfo>
                    <SexAgeWrapp>
                      <SexWrapp>
                        <PopUpLabel>Sexo</PopUpLabel>
                        <PopUpLabelInfo toggle={toggle}>
                          {patient.patientSexo}
                        </PopUpLabelInfo>
                        <PopUpInputSelectInfo
                          toggle={toggle}
                          value={sexPatient}
                          onChange={(e) => setSexPatient(e.target.value)}
                        >
                          <SelectOption selected></SelectOption>
                          <SelectOption value={"Masculino"}>
                            Masculino
                          </SelectOption>
                          <SelectOption value={"Feminino"}>
                            Feminino
                          </SelectOption>
                        </PopUpInputSelectInfo>
                      </SexWrapp>

                      <AgeWrapp>
                        <PopUpLabel>Idade</PopUpLabel>
                        <PopUpLabelInfo toggle={toggle}>
                          {patient.age}
                        </PopUpLabelInfo>
                        <PopUpInputInfo
                          toggle={toggle}
                          type="text"
                          value={agePatient}
                          onChange={(e) => setAgePatient(e.target.value)}
                        />
                      </AgeWrapp>
                    </SexAgeWrapp>
                  </PopUpFieldPatientInfo>

                  <PopUpFieldPatientInfo>
                    <PopUpLabel>Diagnóstico</PopUpLabel>
                    <PopUpLabelInfo toggle={toggle}>
                      {patient.diagnosis}
                    </PopUpLabelInfo>
                    <PopUpInputSelectInfo
                      toggle={toggle}
                      value={diagnosisPatient}
                      onChange={(e) => setDiagnosisPatient(e.target.value)}
                    >
                      <SelectOption selected></SelectOption>
                      <SelectOption value={"NEUROLOGY"}>
                        Neurologia
                      </SelectOption>
                      <SelectOption value={"CARDIOLOGY"}>
                        Cardiologia
                      </SelectOption>
                      <SelectOption value={"PNEUMOLOGY"}>
                        Pneumologia
                      </SelectOption>
                      <SelectOption value={"ONCOLOGY"}>Oncologia</SelectOption>
                      <SelectOption value={"ORTHOPEDICS"}>
                        Ortopedia
                      </SelectOption>
                      <SelectOption value={"NEPHROLOGY"}>
                        Nefrologia
                      </SelectOption>
                      <SelectOption value={"ENDOCRINOLOGY"}>
                        Endocrinologia
                      </SelectOption>
                      <SelectOption value={"PALLIATIVE_CARE"}>
                        Cuidados Paliativos
                      </SelectOption>
                      <SelectOption value={"INFECTOLOGY"}>
                        Infectologia
                      </SelectOption>
                      <SelectOption value={"GENICOLOGY"}>
                        Genicologia
                      </SelectOption>
                      <SelectOption value={"COVID"}>Covid</SelectOption>
                      <SelectOption value={"OTHER"}>Outros</SelectOption>
                    </PopUpInputSelectInfo>
                  </PopUpFieldPatientInfo>

                  <PopUpFieldPatientInfo>
                    <PopUpLabel>Informações adicionais</PopUpLabel>
                    <PopUpLabelInfoAddInfo toggle={toggle}>
                      <PopUpLabelAddInfoText>
                        {patient.additionalInfo}
                      </PopUpLabelAddInfoText>
                    </PopUpLabelInfoAddInfo>
                    <PopUpAddIndoPatientInfoInfo
                      rows="8"
                      cols="50"
                      toggle={toggle}
                      type="text"
                      value={addtionalInfoPatient}
                      onChange={(e) => setAdditionalInfoPatient(e.target.value)}
                    />
                  </PopUpFieldPatientInfo>
                </PopUpFormPatientInfo>
                <PopUpButtonsPatientInfoView toggle={toggle}>
                  <PopUpCancel onClick={handleCancel}>Cancelar</PopUpCancel>
                </PopUpButtonsPatientInfoView>

                <PopUpButtonsPatientInfoView2 toggle={toggle}>
                  <PopUpCancelPatientInfo onClick={handleClickPencil}>
                    Cancelar
                  </PopUpCancelPatientInfo>
                  <PopUpCreatePatientInfo onClick={handleSave}>
                    Salvar
                  </PopUpCreatePatientInfo>
                </PopUpButtonsPatientInfoView2>
              </PopUpWrappPatientInfo>
            </PopUpPatientInfo>
          );
        }
        return null;
      })}
    </>
  );
};

export default SectorPopUpViewInfoPatient;
