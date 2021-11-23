import React from 'react'
import Home from '../components/Home'
import NavBar from '../components/NavBar';
import { HomeContainer, HomeGrid, NavBarSide } from '../components/Home/Home.styles';
import { GlobalStyles } from '../styles/GlobalStyles';

const HomePage = ({active, toggle}) => {
    return (
        <>
            <GlobalStyles/>
            <HomeContainer>
                <HomeGrid active={active}>
                    <NavBarSide>
                        <NavBar/>
                    </NavBarSide>
                    <Home/>
                </HomeGrid>
            </HomeContainer>
        </> 
    )
}

export default HomePage
