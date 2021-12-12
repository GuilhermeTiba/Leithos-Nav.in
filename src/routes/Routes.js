import React from "react";
import HomeScreen from "../pages/HomeScreen";
import LogInScreen from "../pages/LogInScreen";
import { Routes, Route } from "react-router-dom";
import ProfileScreen from "../pages/ProfileScreen";
import SectorScreenPediatry from "../pages/SectorScreenPediatry";
import SectorScreenOrthopedics from "../pages/SectorScreenOrthopedics";
import SectorScreenEmergence from "../pages/SectorScreen";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LogInScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/sector-emergence" element={<SectorScreenEmergence />} />
      <Route path="/sector-pediatry" element={<SectorScreenPediatry />} />
      <Route path="/sector-orthopedics" element={<SectorScreenOrthopedics />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
};

export default RoutesComponent;
