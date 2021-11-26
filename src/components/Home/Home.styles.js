import styled from "styled-components/macro";

export const ArteCantoInferiorDireito = styled.img`
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const HomeWrapp = styled.div`
    grid-area: Dashboard;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 85%;
    padding: 2rem 1rem;
`;

export const TitleWrapp = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    z-index: 0;
`;


export const Title = styled.h1`
    text-align: center;
    letter-spacing: 0px;
    color: #6A52DD;
    opacity: 1;
    font-size: 40px;
    padding-left: 2rem ;
`;

export const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1.3fr 1fr 1fr;
    grid-template-rows: 1.125fr 0.75fr 1.125fr;
    gap: 1.1rem;
    grid-auto-flow: row;
    grid-template-areas:
    "taxa status tempo tempo"
    "disponibilidade disponibilidade disponibilidade disponibilidade"
    "datas ocupacao ocupacao ocupacao";
    height: calc(100vh - 200px);
`

//DISPONIBILIDADE

export const Disponibilidade = styled.div`
    grid-area: disponibilidade;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 30px;
    opacity: 0.85;
    padding: 1px 1.5rem;
`;

export const SectorAndArrow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SectorWrapp = styled.div`
    display: flex;
    justify-content: center;
    padding-right:1.5rem;
    padding-left: 1.5rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: space-between;

    &::-webkit-scrollbar {
        width: 0px;
        
}
`;

export const SectorData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 5.1rem;
`;

export const DataLeitos = styled.div`
    background-color: transparent;
    border: 3px solid #ADD47B;
    border-radius: 100%;
    padding: 40px 45px;

    color: #7B7272;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NumberLeitos = styled.h4`
    color: #7B7272;
    margin: 0;
`;

export const SectorName = styled.h4`
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 0.85;
    font-size: 15px;
`;

export const ScrollArrow = styled.button`
    color: #7B7272;

`;

//TEMPO

export const Tempo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.1rem;
    grid-auto-flow: row;
    grid-template-areas:
        "tempo1 tempo2"
        "tempo3 tempo4";
    grid-area: tempo;
`;

export const Tempo1 = styled.div`
    grid-area: tempo1;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 20px;
    opacity: 0.85;
    padding: 1px 1.5rem;
    
`;
export const Tempo2 = styled.div`
    grid-area: tempo2;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 20px;
    opacity: 0.85;
    padding: 1px 1.5rem;
    
`;
export const Tempo3 = styled.div`
    grid-area: tempo3;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 20px;
    opacity: 0.85;
    padding: 1px 1.5rem;
    
`;
export const Tempo4 = styled.div`
    grid-area: tempo4;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 20px;
    opacity: 0.85;
    padding: 1px 1.5rem;
    
`;

export const TittleItensTempo = styled.h4`
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 0.85;
    font-size: 12px;
`

export const TempoContent = styled.div`
    display: block;
    position: relative;
`;

export const NumberData = styled.h1`
    color: #6A52DD;
    font-size: 50px;
    text-align: center;
    align-items: center;
    padding-bottom: 0.8rem;
    margin: 0 auto;
    
`;

export const P = styled.h3`
    position: absolute;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 0.85;
    font-size: 15px;

    margin: 0 auto;
    top: 32px;
    right: 48px;
`;

//TAXA

export const Taxa = styled.div`
    grid-area: taxa;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 30px;
    opacity: 0.85;
    padding: 1px 1.5rem;
`;

//STATUS

export const Status = styled.div`
    grid-area: status;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 30px;
    opacity: 0.85;
    padding: 1px 1.5rem;
`;

//OCUPAÇÃO

export const Ocupacao = styled.div`
    grid-area: ocupacao;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 30px;
    opacity: 0.85;
    padding: 5px 1.5rem;
`;

//DATAS

export const Datas = styled.div`
    grid-area: datas;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 30px;
    opacity: 0.85;
    padding: 5px 1.5rem;
`;

export const DatasWrapp = styled.div`
    
`;

export const NavData = styled.nav`
`;

export const UlData = styled.ul`
    padding-left: 0;
    display: flex;
`;

export const LiData = styled.li`
    padding-left: 3px;
    list-style: none;
`;

export const ButtonData = styled.button`
    border: none;
    background-color: transparent;
    text-decoration: none;
    text-align: left;
    letter-spacing: 0px;
    color: #7B7272;
    font-weight: 700;
    opacity: 0.85;
    font-size: 15px;
    text-align: left;
    list-style: none;
    padding: 5px;
    cursor: pointer;

    &:active{
        color: #6045E2;
        font-weight: 700;
        border-bottom: 2px solid #6045E2;
    }
`;

//EM COMUM

export const TittleItens = styled.h3`
    text-align: left;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 0.85;
    font-size: 15px;

`;




