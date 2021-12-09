import React from 'react';
import {  LoginRight, RightSideText, RightSideComputerImage, RightSideDataImage, RightSideDashboardImage } from './LogIn.styles';
import backgroundDesign from "../../assets/backgroundDesign.png";
import computerImage from "../../assets/computerDesign.png";
import dashboardImage from "../../assets/graphicDesign.png";
import dataImage from "../../assets/dataDesign.png"


const RigthSide = () => {
    return (
        <LoginRight backgroundDesign={backgroundDesign}>
            <RightSideText>Um novo jeito de fazer gestão hospitalar.</RightSideText>
            <RightSideComputerImage src={computerImage}/>
            <RightSideDashboardImage src={dashboardImage}/>
            <RightSideDataImage src={dataImage}/>
        </LoginRight>
    )
}

export default RigthSide
