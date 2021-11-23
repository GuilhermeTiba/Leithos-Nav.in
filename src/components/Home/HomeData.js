import React from 'react';
import { Datas, DatasWrapp, NavData, UlData, LiData, ButtonData } from './Home.styles';

const DatasComponent = () => {
    return (
        <Datas>
            <DatasWrapp>
                <NavData>
                <UlData>
                    <LiData>
                        <ButtonData>Diário</ButtonData>
                    </LiData>
                    <LiData>
                        <ButtonData>Semanal</ButtonData>
                    </LiData>
                    <LiData>
                        <ButtonData>Mensal</ButtonData>
                    </LiData>
                    <LiData>
                        <ButtonData>Anual</ButtonData>
                    </LiData>
                </UlData>
            </NavData>
            </DatasWrapp>
        </Datas>
    )
}

export default DatasComponent
