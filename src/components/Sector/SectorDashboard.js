import React, { useEffect } from 'react';
import { DashboardWrapp, DashboardLeitos, Legendas, LegColor, AddLeito, LegendaIcon, LegendaTxt} from './Sector.styles';
import { StatusAguardandoLimpeza, StatusDisponivel, StatusEmLimpeza, StatusEmManutencao, StatusOcupado, StatusAguardandoManutencao } from './SectorStatus';
import {MdEventAvailable} from 'react-icons/md';
import {FaBroom} from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs';
import {ImBlocked} from 'react-icons/im'
import Leito from './SectorLeito';

const SectorDashboard = ({setShowPopUpAdd, listLeitos, showPopUpStatus, setShowPopUpStatus, dataLeito, setDataLeito}) => {

    useEffect( () => {
        //ReactDOM.render(listLeitos, document.getElementById('dashboardleitos'));
        console.log(listLeitos)
    }, [listLeitos]);

    const handlePopUp = (e) => {
        e.preventDefault();
        setShowPopUpAdd(true);
    }

    return (
        <>
            <DashboardWrapp>
                <DashboardLeitos id='dashboardleitos'>
                    {listLeitos.map(leito => {
                        return (
                            <Leito key ={leito.id} {...leito}
                            setShowPopUpAdd={setShowPopUpAdd} 
                            setShowPopUpStatus={setShowPopUpStatus} 
                            showPopUpStatus={showPopUpStatus} 
                            dataLeito={dataLeito} setDataLeito={setDataLeito} />
                        )
                    })}
                    
                    <AddLeito onClick={handlePopUp}>+</AddLeito>
                    
                </DashboardLeitos>
                <Legendas>
                    <LegColor>
                        <LegendaIcon bg = {StatusDisponivel.colorRight}><MdEventAvailable /></LegendaIcon>
                        <LegendaTxt>Disponível</LegendaTxt>
                    </LegColor>
                    <LegColor>
                        <LegendaIcon  bg = {StatusOcupado.colorRight}><ImBlocked/></LegendaIcon>
                        <LegendaTxt>Ocupado</LegendaTxt>
                    </LegColor>
                    <LegColor>
                        <LegendaIcon bg = {StatusAguardandoLimpeza.colorRight}><FaBroom /></LegendaIcon>
                        <LegendaTxt>Aguardando limpeza</LegendaTxt>
                    </LegColor>
                    <LegColor>
                        <LegendaIcon bg = {StatusEmLimpeza.colorRight}><FaBroom /></LegendaIcon>
                        <LegendaTxt>Em limpeza</LegendaTxt>
                    </LegColor>
                    <LegColor>
                        <LegendaIcon bg = {StatusAguardandoManutencao.colorRight}><BsFillGearFill /></LegendaIcon>
                        <LegendaTxt>Aguardando manutenção</LegendaTxt>
                    </LegColor>
                    <LegColor>
                        <LegendaIcon bg = {StatusEmManutencao.colorRight}><BsFillGearFill /></LegendaIcon>
                        <LegendaTxt>Em manutenção</LegendaTxt>
                    </LegColor>
                </Legendas>
            </DashboardWrapp>    
        </>
        )
}

export default SectorDashboard
