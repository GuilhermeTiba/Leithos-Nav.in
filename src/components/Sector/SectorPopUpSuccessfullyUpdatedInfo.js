import React, {useEffect} from 'react';
import {RiFileEditFill} from 'react-icons/ri';
import { PopUpSuccessfullyUpdatedInfo, PopUpWrappSUpdatedInfo, PopUpLabelSUpdatedInfo, PopUpIconSUpdatedInfo } from './Sector.styles'

const SectorPopUpSuccessfullyUpdatedInfo = ({showPopUpSuccessfullyUpdatedInfo, setShowPopUpSuccessfullyUpdatedInfo}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUpSuccessfullyUpdatedInfo(false);
        }, 1200)
        return() => clearTimeout(timer)
    }, [showPopUpSuccessfullyUpdatedInfo, setShowPopUpSuccessfullyUpdatedInfo])

    return (
        <PopUpSuccessfullyUpdatedInfo active={showPopUpSuccessfullyUpdatedInfo} >
            <PopUpWrappSUpdatedInfo>
                <PopUpLabelSUpdatedInfo>Informações atualizadas!</PopUpLabelSUpdatedInfo>
                <PopUpIconSUpdatedInfo>
                    <RiFileEditFill/>
                </PopUpIconSUpdatedInfo>
            </PopUpWrappSUpdatedInfo>
        </PopUpSuccessfullyUpdatedInfo>
    )
}

export default SectorPopUpSuccessfullyUpdatedInfo
