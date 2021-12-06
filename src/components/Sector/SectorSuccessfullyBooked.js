import React, { useEffect } from 'react'
import { PopUpSuccessfully, PopUpWrappSuccessfully,PopUpIconSuccessfully, PopUpLabelSuccessfully } from './Sector.styles';
import {BsFillPersonFill} from 'react-icons/bs'

const SectorSuccessfullyBooked = ({showPopUpSuccessfully, setShowPopUpSuccessfully}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUpSuccessfully(false);
        }, 1200)
        return() => clearTimeout(timer)
    },[showPopUpSuccessfully])

    return (
        <PopUpSuccessfully active={showPopUpSuccessfully}>
            <PopUpWrappSuccessfully>
                <PopUpLabelSuccessfully>Leito reservado com sucesso!</PopUpLabelSuccessfully>
                <PopUpIconSuccessfully>
                    <BsFillPersonFill/>
                </PopUpIconSuccessfully>
            </PopUpWrappSuccessfully>
        </PopUpSuccessfully>
    )
}

export default SectorSuccessfullyBooked
