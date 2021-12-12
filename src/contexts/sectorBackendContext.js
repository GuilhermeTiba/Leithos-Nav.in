import React, { useContext } from "react";
import axios from "axios";

const SectorBackContext = React.createContext();

const SectorBackendContext = ({ children }) => {
  const getBedsSection = async () => {
    const response = await axios.get(
      "https://leithos-navin.herokuapp.com/section/beds-per-section",
      {
        params: { answer: 42 },
      }
    );
    console.log(response);
  };

  return (
    <SectorBackContext.Provider value={{ getBedsSection }}>
      {children}
    </SectorBackContext.Provider>
  );
};

export const useSectorBackEnd = () => useContext(SectorBackContext);
export default SectorBackendContext;
