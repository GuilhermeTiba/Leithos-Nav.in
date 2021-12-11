import React, { useEffect } from 'react'
import { PopUpSuccessfully, PopUpWrappSuccessfully,PopUpIconSuccessfully, PopUpLabelSuccessfully } from './Sector.styles';
import {BsFillPersonFill} from 'react-icons/bs'
import { useNecessary } from '../../contexts/necessaryInfoContext';

const SectorSuccessfullyBooked = () => {
    const {showPopUpSuccessfully, setShowPopUpSuccessfully} = useNecessary();
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUpSuccessfully(false);
        }, 1200)
        return() => clearTimeout(timer)
    },[showPopUpSuccessfully, setShowPopUpSuccessfully])

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
