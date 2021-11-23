import React from 'react'
import { BsSearch, BsColumnsGap, BsChevronLeft, BsCircleFill, BsCircle } from "react-icons/bs";
import { FaServer, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


import { 
SideMenu,
SideBar,
Logo,
WrapMenu,
Background,
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
LogoutMenuIcon

} from './style/navBarElements'

import {
ButtonBox,
//ToggleMenuBtn,
BackArrowBtn,
DashboardBtn,
DashboardBtn2,
DashboardBtn3

} from './style/styledButton'

const NavBar = ({active, toggle}) => {

    const HandleClick = () => {
        toggle(!active)
    }

    const HandleOpen = () => {
        toggle(false)
    }

    return (
            <Background>
                <WrapMenu>
                <SideMenu active={active}>
                    <ButtonBox>
                    <BackArrowBtn onClick={HandleClick}>
                        <BsChevronLeft/>
                    </BackArrowBtn>
                    </ButtonBox>
                    <SearchMenu>
                    <SearchMenuInput
                        style={{ color: "#6045E2" }}
                        type="text"
                        placeholder="Pesquisar"
                    />
                    </SearchMenu>
                    <DashboardMenu>
                        <DashboardBtn DashboardBtn>
                            <Link to='/home'>Dashboard </Link>
                        </DashboardBtn>
                        <DashboardBtn2 DashboardBtn>
                            <Link to='/sector'>Setor 1</Link>
                        </DashboardBtn2>
                        <DashboardBtn3 DashboardBtn>
                            <Link to='/'>LogOut </Link>
                        </DashboardBtn3>
                    </DashboardMenu>
                </SideMenu>

                <SideBar active={active} onClick={HandleOpen}>
                    <Logo>
                        <Circle01>
                            <BsCircle/>
                        </Circle01>
                        <Circle02>
                            <BsCircleFill/>
                        </Circle02>
                    </Logo>
                    <DashboardMenu>
                        <SearchMenuIcon onClick={HandleOpen}>
                            <BsSearch/>
                        </SearchMenuIcon>
                        <DashboardIcon>
                            <BsColumnsGap/>
                        </DashboardIcon>
                    </DashboardMenu>
                    <SetoresMenu>
                        <SetoresMenuIcon onClick={HandleOpen}>
                            <FaServer/>
                        </SetoresMenuIcon>
                    </SetoresMenu>
                    <PerfilMenu>
                        <PerfilMenuIcon onClick={HandleOpen}>
                            <FaUser/>
                        </PerfilMenuIcon>
                    </PerfilMenu>
                    <LogoutMenu>
                    <LogoutMenuIcon onClick={HandleOpen}>
                        <FaSignOutAlt/>
                    </LogoutMenuIcon>
                    </LogoutMenu>
                </SideBar>
                </WrapMenu>
            </Background>
    );
}

export default NavBar
