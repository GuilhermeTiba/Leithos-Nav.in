import { useNecessary } from "../../contexts/necessaryInfoContext";
import { usePatientInfo } from "../../contexts/patientInfoContext";
import {
  PopUpTextArea,
  PopUpInput,
  PopUpLabel,
  PopUpWrappPatientInfo,
  PopUpStatusPatientInfo,
  PopUpFormPatientInfo,
  PopUpFieldPatientInfo,
  SexWrapp,
  PopUpInputSelect,
  SelectOption,
  AgeWrapp,
  PopUpButtonsPatientInfo,
  PopUpCancelPatientInfo,
  PopUpCreatePatientInfo,
  SexAgeWrapp,
  PopUpPatientInfo,
  PopUpTitlePatientInfo,
} from "./Sector.styles";
import { StatusOcupado } from "./SectorStatus";

const SectorPopUpPatientInfo = () => {
  const {
    showPopUpInfoPatient,
    setShowPopUpInfoPatient,
    dataLeito,
    patientList,
    setPatientList,
    setShowPopUpStatus,
    listLeitos,
    setShowPopUpSuccessfully,
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

  const handleCancel = (e) => {
    e.preventDefault();
    setNamePatient("");
    setAgePatient("");
    setSexPatient("");
    setDiagnosisPatient("");
    setAdditionalInfoPatient("");
    setShowPopUpInfoPatient(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const patientObj = {
      patientName: namePatient,
      patientSexo: sexPatient,
      age: agePatient,
      diagnosis: diagnosisPatient,
      additionalInfo: addtionalInfoPatient,
      id: dataLeito.id,
    };
    setPatientList([...patientList, patientObj]);

    for (const [index] of listLeitos.entries()) {
      if (dataLeito.id === listLeitos[index].id) {
        listLeitos[index] = {
          id: listLeitos[index].id,
          name: listLeitos[index].name,
          style: {
            colorRight: StatusOcupado.colorRight,
            colorLeft: StatusOcupado.colorLeft,
            icon: StatusOcupado.icon,
          },
          status: "Ocupado",
        };
      }
    }

    setNamePatient("");
    setAgePatient("");
    setSexPatient("");
    setDiagnosisPatient("");
    setAdditionalInfoPatient("");
    setShowPopUpInfoPatient(false);
    setShowPopUpStatus(false);
    setShowPopUpSuccessfully(true);
    console.log(listLeitos);
    console.log(patientList);
  };

  return (
    <PopUpPatientInfo active={showPopUpInfoPatient}>
      <PopUpWrappPatientInfo>
        <PopUpFieldPatientInfo>
          <PopUpTitlePatientInfo>{dataLeito.name}</PopUpTitlePatientInfo>
          <PopUpStatusPatientInfo color={dataLeito.bgIcon}>
            {dataLeito.status}
          </PopUpStatusPatientInfo>
        </PopUpFieldPatientInfo>
        <PopUpFormPatientInfo>
          <PopUpFieldPatientInfo>
            <PopUpLabel>Nome do paciente</PopUpLabel>
            <PopUpInput
              type="text"
              value={namePatient}
              onChange={(e) => setNamePatient(e.target.value)}
            />
          </PopUpFieldPatientInfo>

          <PopUpFieldPatientInfo>
            <SexAgeWrapp>
              <SexWrapp>
                <PopUpLabel>Sexo</PopUpLabel>
                <PopUpInputSelect
                  calue={sexPatient}
                  onChange={(e) => setSexPatient(e.target.value)}
                >
                  <SelectOption selected></SelectOption>
                  <SelectOption value={"Masculino"}>Masculino</SelectOption>
                  <SelectOption value={"Feminino"}>Feminino</SelectOption>
                </PopUpInputSelect>
              </SexWrapp>

              <AgeWrapp>
                <PopUpLabel>Idade</PopUpLabel>
                <PopUpInput
                  type="text"
                  value={agePatient}
                  onChange={(e) => setAgePatient(e.target.value)}
                />
              </AgeWrapp>
            </SexAgeWrapp>
          </PopUpFieldPatientInfo>

          <PopUpFieldPatientInfo>
            <PopUpLabel>Diagnóstico</PopUpLabel>
            <PopUpInputSelect
              value={diagnosisPatient}
              onChange={(e) => setDiagnosisPatient(e.target.value)}
            >
              <SelectOption selected></SelectOption>
              <SelectOption value={"NEUROLOGY"}>Neurologia</SelectOption>
              <SelectOption value={"CARDIOLOGY"}>Cardiologia</SelectOption>
              <SelectOption value={"PNEUMOLOGY"}>Pneumologia</SelectOption>
              <SelectOption value={"ONCOLOGY"}>Oncologia</SelectOption>
              <SelectOption value={"ORTHOPEDICS"}>Ortopedia</SelectOption>
              <SelectOption value={"NEPHROLOGY"}>Nefrologia</SelectOption>
              <SelectOption value={"ENDOCRINOLOGY"}>
                Endocrinologia
              </SelectOption>
              <SelectOption value={"PALLIATIVE_CARE"}>
                Cuidados Paliativos
              </SelectOption>
              <SelectOption value={"INFECTOLOGY"}>Infectologia</SelectOption>
              <SelectOption value={"GENICOLOGY"}>Genicologia</SelectOption>
              <SelectOption value={"COVID"}>Covid</SelectOption>
              <SelectOption value={"OTHER"}>Outros</SelectOption>
            </PopUpInputSelect>
          </PopUpFieldPatientInfo>

          <PopUpFieldPatientInfo>
            <PopUpLabel>Informações adicionais</PopUpLabel>
            <PopUpTextArea
              rows="8"
              cols="50"
              type="text"
              value={addtionalInfoPatient}
              onChange={(e) => setAdditionalInfoPatient(e.target.value)}
            />
          </PopUpFieldPatientInfo>
        </PopUpFormPatientInfo>
        <PopUpButtonsPatientInfo>
          <PopUpCancelPatientInfo onClick={handleCancel}>
            Cancelar
          </PopUpCancelPatientInfo>
          <PopUpCreatePatientInfo onClick={handleSave}>
            Salvar
          </PopUpCreatePatientInfo>
        </PopUpButtonsPatientInfo>
      </PopUpWrappPatientInfo>
    </PopUpPatientInfo>
  );
};

export default SectorPopUpPatientInfo;