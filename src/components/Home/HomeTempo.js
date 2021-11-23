import React from 'react';
import { Tempo, Tempo1, TittleItensTempo, TempoContent, NumberData, Tempo2, P, Tempo3, Tempo4 } from './Home.styles';

const TempoComponent = () => {
    return (
        <Tempo>
            <Tempo1>
                <TittleItensTempo>Tempo médio de leito vago</TittleItensTempo>
                <TempoContent>
                    <NumberData>3</NumberData> 
                    <P>horas</P>
                </TempoContent>
            </Tempo1>
            <Tempo2>
                <TittleItensTempo>Tempo médio do processo de limpeza</TittleItensTempo>
                <TempoContent>
                    <NumberData>2</NumberData> 
                    <P>horas</P>
                </TempoContent>
            </Tempo2>
            <Tempo3>
                <TittleItensTempo>Tempo médio de ocupação do leito</TittleItensTempo>
                <TempoContent>
                    <NumberData>8</NumberData> 
                    <P>dias</P>
                </TempoContent>
            </Tempo3>
            <Tempo4>
                <TittleItensTempo>Tempo médio do processo de manutenção</TittleItensTempo>
                <TempoContent>
                    <NumberData>1</NumberData> 
                    <P>dia</P>
                </TempoContent>
            </Tempo4>
        </Tempo>
    )
}

export default TempoComponent
