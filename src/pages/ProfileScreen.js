import React from "react";
import {
  HomeContainer,
  NavBarSide,
  HomeGrid,
  HomeSide,
} from "../styles/HomeAndSectorGrid";
import NavBar from "../components/NavBar";
import { GlobalStyles } from "../styles/GlobalStyles";
import Profile from "../components/Profile";

const ProfileScreen = ({ active }) => {
  return (
    <>
      <GlobalStyles />
      <HomeContainer>
        <HomeGrid active={active}>
          <NavBarSide>
            <NavBar />
          </NavBarSide>
          <HomeSide>
            <Profile />
          </HomeSide>
        </HomeGrid>
      </HomeContainer>
    </>
  );
};

export default ProfileScreen;
