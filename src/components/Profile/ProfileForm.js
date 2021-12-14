import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {
  ProfileFormWrapp,
  ProfilePictureWrapp,
  ProfilePicture,
  ProfileFormArea,
  ProfileInputField,
  ProfileLabel,
  ProfileInput,
  ProfileSelect,
  ProfileSaveButtonWrapp,
  ProfileSaveButton,
  ProfileOption,
  ProfilePasswordButton1,
  ProfilePasswordButton2,
  PasswordWrapp,
  ProfileInputPassword,
  ProfilePersonPicture,
  ProfileCameraPicture,
} from "./Profile.styles";
import { useProfile } from "../../contexts/profileContext";
import { BsCircleFill } from "react-icons/bs";
import { IoCamera } from "react-icons/io5";

const ProfileForm = () => {
  const [activePassWord, setActivePassword] = useState(false);
  const {
    name,
    setName,
    secondName,
    setSecondName,
    charge,
    setCharge,
    sector,
    setSector,
    login,
    setLogin,
    password,
    setPassword,
    userInfo,
    setUserInfo,
  } = useProfile();

  const handleSave = (e) => {
    e.preventDefault();
    if (name || secondName || charge || sector || login || password === "") {
      alert("Preencha todos os campos!");
    } else {
      const user = {
        name: name,
        secondName: secondName,
        charge: charge,
        sector: sector,
        login: login,
        password: password,
      };
      setUserInfo([...userInfo, user]);
      setName("");
      setSecondName("");
      setCharge("");
      setSector("");
      setLogin("");
      setPassword("");
      console.log(userInfo);
    }
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setActivePassword(!activePassWord);
  };
  return (
    <ProfileFormWrapp>
      <ProfilePictureWrapp>
        <ProfilePicture>
          <BsCircleFill />
        </ProfilePicture>
        <ProfilePersonPicture>
          <IoIosPerson />
        </ProfilePersonPicture>
        <ProfileCameraPicture>
          <IoCamera />
        </ProfileCameraPicture>
      </ProfilePictureWrapp>
      <ProfileFormArea>
        <ProfileInputField>
          <ProfileLabel>Nome</ProfileLabel>
          <ProfileInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></ProfileInput>
        </ProfileInputField>

        <ProfileInputField>
          <ProfileLabel>Sobrenome</ProfileLabel>
          <ProfileInput
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          ></ProfileInput>
        </ProfileInputField>

        <ProfileInputField>
          <ProfileLabel>Cargo</ProfileLabel>
          <ProfileSelect
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
          >
            <ProfileOption selected></ProfileOption>
            <ProfileOption value="DOCTOR">Médico</ProfileOption>
            <ProfileOption value="NURSE">Enfermeiro(a)</ProfileOption>
            <ProfileOption value="MAINTENANCE">
              Profissional de manutenção
            </ProfileOption>
            <ProfileOption value="CLEANING">
              Profissional de limpeza
            </ProfileOption>
          </ProfileSelect>
        </ProfileInputField>

        <ProfileInputField>
          <ProfileLabel>Setor</ProfileLabel>
          <ProfileSelect
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            <ProfileOption selected></ProfileOption>
            <ProfileOption value="PEDIATRY">Pediatria</ProfileOption>
            <ProfileOption value="EMERGENCY">Emergência</ProfileOption>
            <ProfileOption value="ORTHOPEDICS">Ortopedia</ProfileOption>
          </ProfileSelect>
        </ProfileInputField>

        <ProfileInputField>
          <ProfileLabel>Login</ProfileLabel>
          <ProfileInput
            type="email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></ProfileInput>
        </ProfileInputField>
      </ProfileFormArea>

      <ProfileInputField>
        <ProfileLabel>Senha</ProfileLabel>
        <PasswordWrapp>
          <ProfileInputPassword
            type={activePassWord ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ProfilePasswordButton1
            display={activePassWord}
            onClick={handlePassword}
          >
            <AiOutlineEye />
          </ProfilePasswordButton1>
          <ProfilePasswordButton2
            display={activePassWord}
            onClick={handlePassword}
          >
            <AiOutlineEyeInvisible />
          </ProfilePasswordButton2>
        </PasswordWrapp>
      </ProfileInputField>

      <ProfileSaveButtonWrapp>
        <ProfileSaveButton onClick={handleSave}>Salvar</ProfileSaveButton>
      </ProfileSaveButtonWrapp>
    </ProfileFormWrapp>
  );
};

export default ProfileForm;
