import React, {useEffect} from 'react'
import { PopUpConfirm, PopUpWrappDeleted, PopUpLabelDeleted, PopUpIconTrash } from './Sector.styles'
import {FaTrash} from 'react-icons/fa'

const SectorPopUpSuccessfullyDeleted = ({setShowPopUpSuccesfullyDeleted, showPopUpSuccesfullyDeleted, setShowPopUpDeletar}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUpSuccesfullyDeleted(false);
            setShowPopUpDeletar(false)
        }, 1200)
        return() => clearTimeout(timer)
    }, [setShowPopUpSuccesfullyDeleted, setShowPopUpDeletar, showPopUpSuccesfullyDeleted])
    return (
        <PopUpConfirm active2={showPopUpSuccesfullyDeleted}>
            <PopUpWrappDeleted>
                <PopUpLabelDeleted>Leito deletado.</PopUpLabelDeleted>
                <PopUpIconTrash>
                    <FaTrash/>
                </PopUpIconTrash>
            </PopUpWrappDeleted>
        </PopUpConfirm>
    )
}

export default SectorPopUpSuccessfullyDeleted
