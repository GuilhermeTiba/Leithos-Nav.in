import React, {useEffect} from 'react'
import { PopUpWrappSCreated, PopUpLabelSCreated, PopUpIconSCreated, PopUpSuccessfullyAvaible } from './Sector.styles'
import {MdPersonAdd} from 'react-icons/md'

const SectorPopUpSuccessfullyAvaible = ({showPopUpSuccessfullyAvaible, setShowPopUpSuccessfullyAvaible}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUpSuccessfullyAvaible(false);
        }, 1200)
        return() => clearTimeout(timer)
    },[showPopUpSuccessfullyAvaible, setShowPopUpSuccessfullyAvaible])
    return (
        <PopUpSuccessfullyAvaible active={showPopUpSuccessfullyAvaible} >
            <PopUpWrappSCreated>
                <PopUpLabelSCreated>Leito disponível!</PopUpLabelSCreated>
                <PopUpIconSCreated>
                    <MdPersonAdd/>
                </PopUpIconSCreated>
            </PopUpWrappSCreated>
        </PopUpSuccessfullyAvaible>
    )
}

export default SectorPopUpSuccessfullyAvaible
