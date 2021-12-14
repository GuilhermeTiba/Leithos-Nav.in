import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsColumnsGap } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import {
  SideMenu,
  SideBar,
  Logo,
  WrapMenu,
  SearchMenu,
  SearchMenuInput,
  DashboardMenu,
  Circle01,
  Circle02,
  SearchMenuIcon,
  DashboardIcon,
  SetoresMenu,
  SetoresMenuIcon,
  PerfilMenu,
  PerfilMenuIcon,
  LogoutMenu,
  LogoutMenuIcon,
  SideMenuItens,
  ButtonWrapp,
  DashboardMenu2,
} from "../NavBar/navBarElements";

import {
  ButtonBox, //ToggleMenuBtn,
  BackArrowBtn,
  DashboardBtnDash,
  DashboardBtnProfile,
} from "../NavBar/styledButton";
import { Link } from "react-router-dom";
import NavBarSectorDropDown from "./NavBarSectorDropDown";

export default function Nav() {
  const [active, toggle] = useState(false);
  const [activeDrop, toggleDrop] = useState(false);

  const HandleClick = () => {
    toggle(!active);
  };

  const HandleOpen = () => {
    toggle(false);
  };

  return (
    <WrapMenu>
      <SideMenu active={active}>
        <SideMenuItens active={active}>
          <ButtonBox>
            <BackArrowBtn onClick={HandleClick}>
              <MdOutlineArrowBackIos />
            </BackArrowBtn>
          </ButtonBox>
          <SearchMenu>
            <SearchMenuInput
              style={{ color: "#6045E2" }}
              type="text"
              placeholder="Pesquisar"
            />
          </SearchMenu>
          <DashboardMenu2>
            <ButtonWrapp>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <DashboardBtnDash>Dashboard</DashboardBtnDash>
              </Link>
            </ButtonWrapp>

            <ButtonWrapp activeDrop={activeDrop}>
              <NavBarSectorDropDown
                activeDrop={activeDrop}
                toggleDrop={toggleDrop}
              />
            </ButtonWrapp>

            <ButtonWrapp>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <DashboardBtnProfile>Perfil</DashboardBtnProfile>
              </Link>
            </ButtonWrapp>
          </DashboardMenu2>
        </SideMenuItens>
      </SideMenu>

      <SideBar active={active} onClick={HandleOpen}>
        <Logo active={active} onClick={HandleOpen}>
          <Circle01>
            <RiCheckboxBlankCircleLine />
          </Circle01>
          <Circle02>
            <RiCheckboxBlankCircleFill />
          </Circle02>
        </Logo>
        <DashboardMenu>
          <SearchMenuIcon onClick={HandleOpen}>
            <BiSearch />
          </SearchMenuIcon>
          <DashboardIcon>
            <BsColumnsGap />
          </DashboardIcon>
        </DashboardMenu>
        <SetoresMenu>
          <SetoresMenuIcon onClick={HandleOpen}>
            <FaServer />
          </SetoresMenuIcon>
        </SetoresMenu>
        <PerfilMenu>
          <PerfilMenuIcon onClick={HandleOpen} activeDrop={activeDrop}>
            <FaUser />
          </PerfilMenuIcon>
        </PerfilMenu>
        <LogoutMenu>
          <LogoutMenuIcon onClick={HandleOpen}>
            <FaSignOutAlt />
          </LogoutMenuIcon>
        </LogoutMenu>
      </SideBar>
    </WrapMenu>
  );
}
