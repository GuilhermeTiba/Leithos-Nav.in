import React, {useEffect} from 'react'
import {PopUpIconSCreated, PopUpLabelSCreated, PopUpSuccessfullyCreated, PopUpWrappSCreated } from './Sector.styles'
import {FaCheck} from 'react-icons/fa'

const SectorPopUpSucessfullyCreated = ({showPopUpSucessfullyCreated, setShowPopUpSucessfullyCreated}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUpSucessfullyCreated(false);
        }, 1200)
        return() => clearTimeout(timer)
    },[showPopUpSucessfullyCreated, setShowPopUpSucessfullyCreated])
    return (
        <PopUpSuccessfullyCreated active={showPopUpSucessfullyCreated}>
            <PopUpWrappSCreated>
                <PopUpLabelSCreated>Leito criado com sucesso!</PopUpLabelSCreated>
                <PopUpIconSCreated>
                    <FaCheck/>
                </PopUpIconSCreated>
            </PopUpWrappSCreated>
        </PopUpSuccessfullyCreated>
    )
}

export default SectorPopUpSucessfullyCreated
