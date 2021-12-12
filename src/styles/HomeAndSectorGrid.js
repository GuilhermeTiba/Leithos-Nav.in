import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: auto;
  height: 100vh;
  background-color: #eceaf0;
  overflow: hidden;
  filter: ${({
    active,
    active2,
    active3,
    active4,
    active5,
    active6,
    active7,
    active8,
    active9,
    active10,
    active11,
    active12,
  }) =>
    active5 ||
    active ||
    active2 ||
    active3 ||
    active4 ||
    active6 ||
    active7 ||
    active8 ||
    active9 ||
    active10 ||
    active11 ||
    active12
      ? "blur(8px)"
      : "none"};
`;

export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 0px 5rem;
  grid-auto-flow: row;
  grid-template-areas: "NavBar Dashboard";
`;

export const NavBarSide = styled.div`
  grid-area: NavBar;
  z-index: 1;
`;

export const SectorSide = styled.div`
  grid-area: Dashboard;
  z-index: 1;
`;
export const HomeSide = styled.div`
  grid-area: Dashboard;
  z-index: 1;
`;
