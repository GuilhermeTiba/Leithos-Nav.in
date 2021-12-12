import React from 'react'
import {LogInContainer, Logo, LogInWrapp} from './LogIn.styles';
import leitosMap from '../../assets/leitosmap.png'
import LeftSide from './LogInLeftSideGrid';
import RigthSide from './LogInRightSideGrid';


const LogIn = () => {
    return (
        <LogInContainer>
            <Logo src={leitosMap}/>
            <LogInWrapp>
                <LeftSide/>
                <RigthSide/>
            </LogInWrapp>
        </LogInContainer>
    )
}

export default LogIn