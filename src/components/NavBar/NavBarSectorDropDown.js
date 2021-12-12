import React from "react";
import {
  DashboardButtonSector,
  DropDownContainer,
  DropDown,
  DropedItem,
  DropTitleWrapp,
} from "./navBarElements";
import { DashboardBtnSector } from "./styledButton";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const NavBarSectorDropDown = ({ activeDrop, toggleDrop }) => {
  const handleClick = (e) => {
    e.preventDefault();
    toggleDrop(!activeDrop);
  };
  return (
    <DropDownContainer>
      <DropTitleWrapp>
        <DashboardButtonSector onClick={handleClick}>
          Setores
        </DashboardButtonSector>
        <BsChevronDown
          onClick={handleClick}
          style={{ color: "#707070", cursor: "pointer" }}
        />
      </DropTitleWrapp>
      <DropDown active={activeDrop}>
        <DropedItem>
          <Link to="/sector-emergence" style={{ textDecoration: "none" }}>
            <DashboardBtnSector>Emergência</DashboardBtnSector>
          </Link>
        </DropedItem>
        <DropedItem>
          <Link to="/sector-pediatry" style={{ textDecoration: "none" }}>
            <DashboardBtnSector> Pediatria</DashboardBtnSector>
          </Link>
        </DropedItem>
        <DropedItem>
          <Link to="/sector-orthopedics" style={{ textDecoration: "none" }}>
            <DashboardBtnSector>Ortopedia</DashboardBtnSector>
          </Link>
        </DropedItem>
      </DropDown>
    </DropDownContainer>
  );
};

export default NavBarSectorDropDown;
