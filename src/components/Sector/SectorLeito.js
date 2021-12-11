import { useNecessary } from '../../contexts/necessaryInfoContext'
import { Leitos, Nome, StatusIcon} from './Sector.styles'

const Leito = ({style, name, status, id}) => {
    const {
        setShowPopUpStatus,
        listLeitos,
        setShowPopUpOccupied,
        setDataLeito,
    } = useNecessary();

    const LeitoOject = {
        name: name,
        id: id,
        bgText: style.colorLeft,
        bgIcon: style.colorRight,
        icon: style.icon,
        status: status
    }

    const handlePopUpStatus = (e) => {
        e.preventDefault();
        setDataLeito(LeitoOject);
        for (const [index] of listLeitos.entries()) {
            if (listLeitos[index].id === LeitoOject.id) {
                if (listLeitos[index].status === 'Ocupado') {
                    setShowPopUpOccupied(true);
                    return
                }else{
                    setShowPopUpStatus(true);
                    return
                }
            }
        }
    }
    
    return (
            <Leitos key={id}>
                <Nome bgText = {style.colorLeft}>{name}</Nome>
                <StatusIcon bgIcon = {style.colorRight} onClick={handlePopUpStatus}> {style.icon} </StatusIcon>
            </Leitos>
    )
}

export default Leito
