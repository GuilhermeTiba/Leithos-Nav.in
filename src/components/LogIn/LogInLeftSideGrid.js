import React from 'react';
import { LoginLeft, ImagesWrap, DashboardImage } from './LogIn.styles';
import ilustracao from '../../assets/ilustracao@2x.png';

const LeftSide = () => {
    return (
        <LoginLeft>
                <ImagesWrap>
                    <DashboardImage src={ilustracao}/>
                </ImagesWrap>
        </LoginLeft>
)
}

export default LeftSide
