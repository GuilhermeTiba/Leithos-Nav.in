import {ImBlocked} from 'react-icons/im'
import {MdEventAvailable} from 'react-icons/md';
import {FaBroom} from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs';


export const StatusOcupado = {
    id: 1,
    colorLeft: '#ECC6C9',
    colorRight: '#F8838A',
    icon: <ImBlocked/>,
};


export const StatusDisponivel = {
    id: 2,
    colorLeft: '#D5EAB9',
    colorRight: '#ADD47B',
    icon: <MdEventAvailable/>,
};

export const StatusAguardandoLimpeza = {
    id: 3,
    colorLeft: '#C9DCEC',
    colorRight: '#A4C6E3',
    icon: <FaBroom/>,
};

export const StatusEmLimpeza = {
    id: 4,
    colorLeft: '#EACEB9',
    colorRight: '#ECA976',
    icon: <FaBroom/>,
};

export const StatusAguardandoManutencao = {
    id: 5,
    colorLeft: '#EAE7B9',
    colorRight: '#E8E17C',
    icon: <BsFillGearFill/>,
};

export const StatusEmManutencao = {
    id: 6,
    colorLeft: '#B9EAE7',
    colorRight: '#88E2DD',
    icon: <BsFillGearFill/>,
};  