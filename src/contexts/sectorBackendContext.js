import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";

const SectorBackContext = React.createContext();

const SectorBackendContext = ({ children }) => {
  const [data, setData] = useState();

  const getBedsSection = async (id) => {
    const response = await axios.get(
      `https://leithos-navin.herokuapp.com/section/beds-per-section/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1aXRpYjIwMDBAZ21haWwuY29tIiwiaWF0IjoxNjM5NTE1NDU4LCJleHAiOjE2Mzk1MTcyNTh9.YnXO7duA2Iu-FKp-IWDXlG2h8Vez7zp0i25naHQUde4",
        },
      }
    );

    setData(response.data.bedsPerSection[0]);
  };

  return (
    <SectorBackContext.Provider value={{ getBedsSection, data }}>
      {children}
    </SectorBackContext.Provider>
  );
};

export const useSectorBackEnd = () => useContext(SectorBackContext);
export default SectorBackendContext;
