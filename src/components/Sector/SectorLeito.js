import React from 'react'
import { Leitos, Nome, StatusIcon } from './Sector.styles'

const Leito = ({colorLeft, colorRight, icon, id, nomeLeito, setShowPopUpAdd, setShowPopUpStatus, showPopUpStatus}) => {

    const handlePopUpStatus = (e) => {
        e.preventDefault();
        setShowPopUpStatus(true)
    }

    return (
        <Leitos key={id}>
            <Nome bgText = {colorLeft}>{nomeLeito}</Nome>
            <StatusIcon bgIcon = {colorRight} onClick={handlePopUpStatus}> {icon} </StatusIcon>
        </Leitos>
    )
}

export default Leito
