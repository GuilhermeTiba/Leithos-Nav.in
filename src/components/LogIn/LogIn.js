import React from 'react'
import {
    LogInContainer, 
    Logo, 
    LogInWrapp, 
    TopRightArt,
    DownLeftArt,
} from './LogIn.styles';
import leitosMap from '../../assets/leitosmap.png'
import cantoSuperiorDireito from '../../assets/canto-superior-direito.png'
import cantoInferiorEsquerdo from '../../assets/Grupo-de-rolagem-1.png'
import LeftSide from './LogInLeftSideGrid';
import RigthSide from './LogInRightSideGrid';


const LogIn = () => {
    return (
        <LogInContainer>
            <TopRightArt src={cantoSuperiorDireito}/>
            <DownLeftArt src={cantoInferiorEsquerdo}/>
            <Logo src={leitosMap}/>
            <LogInWrapp>
                <LeftSide/>
                <RigthSide/>
            </LogInWrapp>
        </LogInContainer>
    )
}

export default LogIn