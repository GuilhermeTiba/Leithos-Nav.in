import React from "react";
import {
  PopUpConfirm,
  PopUpLabelDelete,
  PopUpIcon,
  PopUpButtonsDelete,
  PopUpWrappDelete,
  PopUpCancelStatus,
  PopUpCreateStatus,
} from "./Sector.styles";
import { FaTrash } from "react-icons/fa";
import { useCount } from "../../contexts/countContext";
import { useNecessary } from "../../contexts/necessaryInfoContext";

const SectorPopUpDeletar = () => {
  const {
    listLeitos,
    setListLeitos,
    dataLeito,
    setShowPopUpDeletar,
    showPopUpDeletar,
    setShowPopUpSuccesfullyDeleted,
  } = useNecessary();

  const {
    countDispo,
    setCountDispo,
    countOcup,
    setCountOcup,
    countEmLimp,
    setCountEmLimp,
    countEmManu,
    setCountEmManu,
    countAguardLimp,
    setCountAguardLimp,
    countAguardManu,
    setCountAguardManu,
  } = useCount();

  const handleDeletar = (e) => {
    e.preventDefault();
    for (const [index] of listLeitos.entries()) {
      if (dataLeito.id === listLeitos[index].id) {
        const newList = listLeitos.filter((leito) => leito.id !== dataLeito.id);
        setListLeitos(newList);
        if (dataLeito.status === "Disponível") {
          setCountDispo(countDispo - 1);
        }
        if (dataLeito.status === "Ocupado") {
          setCountOcup(countOcup - 1);
        }
        if (dataLeito.status === "Em limpeza") {
          setCountEmLimp(countEmLimp - 1);
        }
        if (dataLeito.status === "Em manutenção") {
          setCountEmManu(countEmManu - 1);
        }
        if (dataLeito.status === "Aguardando manutenção") {
          setCountAguardManu(countAguardManu - 1);
        }
        if (dataLeito.status === "Aguardando limpeza") {
          setCountAguardLimp(countAguardLimp - 1);
        }
        setShowPopUpSuccesfullyDeleted(true);
      }
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowPopUpDeletar(false);
    setShowPopUpSuccesfullyDeleted(false);
  };

  return (
    <PopUpConfirm active={showPopUpDeletar}>
      <PopUpWrappDelete>
        <PopUpLabelDelete>
          Deseja deletar o {dataLeito.name} e suas informações?
        </PopUpLabelDelete>
        <PopUpIcon>
          <FaTrash />
        </PopUpIcon>
        <PopUpButtonsDelete>
          <PopUpCancelStatus onClick={handleCancel}>Cancelar</PopUpCancelStatus>
          <PopUpCreateStatus onClick={handleDeletar}>Deletar</PopUpCreateStatus>
        </PopUpButtonsDelete>
      </PopUpWrappDelete>
    </PopUpConfirm>
  );
};

export default SectorPopUpDeletar;
