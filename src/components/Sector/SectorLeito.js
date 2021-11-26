import { Leitos, Nome, StatusIcon } from './Sector.styles'

const Leito = ({style, name, setShowPopUpStatus, showPopUpStatus, setDataLeito, dataLeito, status, id}) => {
    const handlePopUpStatus = (e) => {
        e.preventDefault();
        setDataLeito(LeitoOject)
        setShowPopUpStatus(true);
    }

    const LeitoOject = {
        name: name,
        id: id,
        bgText: style.colorLeft,
        bgIcon: style.colorRight,
        icon: style.icon,
        status: status
    }
    
    
    return (
            <Leitos key={id}>
                <Nome bgText = {style.colorLeft}>{name}</Nome>
                <StatusIcon bgIcon = {style.colorRight} onClick={handlePopUpStatus}> {style.icon} </StatusIcon>
            </Leitos>
    )
}

export default Leito
