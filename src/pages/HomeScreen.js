import React from "react";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import {
  HomeContainer,
  NavBarSide,
  HomeGrid,
  HomeSide,
} from "../styles/HomeAndSectorGrid";
import { GlobalStyles } from "../styles/GlobalStyles";

const HomeScreen = ({ active }) => {
  return (
    <>
      <GlobalStyles />
      <HomeContainer>
        <HomeGrid active={active}>
          <NavBarSide>
            <NavBar />
          </NavBarSide>
          <HomeSide>
            <Home />
          </HomeSide>
        </HomeGrid>
      </HomeContainer>
    </>
  );
};

export default HomeScreen;
