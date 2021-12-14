import React from "react";
import { useState } from "react";
import { useContext } from "react";

const ProfileComponentContext = React.createContext();

const ProfileContext = ({ children }) => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [charge, setCharge] = useState("");
  const [sector, setSector] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");

  const [userInfo, setUserInfo] = useState([]);
  return (
    <ProfileComponentContext.Provider
      value={{
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
        picture,
        setPicture,
      }}
    >
      {children}
    </ProfileComponentContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileComponentContext);
export default ProfileContext;
