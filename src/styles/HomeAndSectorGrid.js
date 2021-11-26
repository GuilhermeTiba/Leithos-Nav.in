import styled from "styled-components";

export const HomeContainer = styled.div`
    margin: auto;
    height: 100vh;
    background-color: #ECEAF0;
    overflow: hidden;
    filter: ${({active, active2}) => (active || active2 ? 'blur(8px)' : 'none')};
`;

export const HomeGrid = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 1.7fr;
    grid-template-rows: 1fr;
    gap: 0px 5rem;
    grid-auto-flow: row;
    grid-template-areas:
        "NavBar Dashboard";
`;

export const NavBarSide = styled.div`
    grid-area: NavBar;
`;