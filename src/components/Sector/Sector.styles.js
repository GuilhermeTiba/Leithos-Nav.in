import styled from 'styled-components/macro';


export const SectorWrapp = styled.div`
    grid-area: Dashboard;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 1rem;
    width: 85%;
`

export const ArteCanto = styled.img`
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
`

export const TitleWrapp = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    z-index: 0;
    margin-top: 2rem;
`

export const Title = styled.div`
    text-align: center;
    letter-spacing: 0px;
    color: #6A52DD;
    opacity: 1;
    font-size: 40px;
    padding-left: 2rem ;
    font-weight: bold;
`;

export const SectorGrid = styled.div`
width: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr; 
    grid-template-rows: 0.5fr 2.5fr 0.5fr; 
    gap: 0.5rem;
    grid-template-areas: 
        "data "
        "dashboardLeitos "
        "legendas";  
`
//DATA

export const Data = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        ". . . . . ."; 
    grid-area: data; 
    `;

    export const DataNumber = styled.div`
        border: none;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #0000004D;
        border-radius: 20px;
        opacity: 0.85;
        padding: 0.8rem 1rem;
        margin: 0.5rem;
        margin-top: 1.5rem;
        height: 75px;
    `;

    export const DataAndIconWrapp = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 35px;
        padding: 5px 0px;
    `;

    export const NumberStats = styled.h1`
        color: #707070;
        font-size: 40px;
        font-weight: 200;
    `;

    export const IconData = styled.div`
        color: #6045E2;
        font-size: 25px;
        padding-bottom: 5px;
    `;

    export const DataTxt = styled.h5`
        text-align: center;
        padding-bottom: 5px;
        margin: 12px;
        color: #707070;
        font-weight: 600;
        font-size: 15px;
    `;



//WRAPP LEITOS E LEGENDA
    export const DashboardWrapp = styled.div`
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #0000004D;
        border-radius: 30px;
        z-index: 0;
        padding: 30px 50px;
        border: none;
        height: 600px;
        max-width: 100%;
        align-content: center;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        opacity: 0.85;

    `;

//DASHBOARD LEITOS
    export const DashboardLeitos = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: stretch;
    grid-area: dashboardLeitos;
    align-content: flex-start;
    height: 70%;
    overflow-x: auto;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

    &::-webkit-scrollbar {
        width: 5px;
        height: 12px;
        align-items: center;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #6A52DD;
        border-radius: 20px;
        width: 5px;
        
    }

    `;


    export const Leitos = styled.div`
        display: flex;
        margin: 1rem;
        margin-bottom: 0.5rem;
        align-self: flex-start;
    `;

    export const Nome = styled.div`
        border: none;
        background: ${({bgText}) => bgText};
        color: #707070;
        border-radius: 18px;
        opacity: 0.6;
        margin-right: 4px;
        max-width: 40px;
        padding: 5px 28px;
        text-align: center;
        line-height: 1.5;
        font-size: 14px;
        font-weight: bold;
        cursor: default;
    `;

    export const StatusIcon = styled.button`
        border: none;
        background: ${({bgIcon}) => bgIcon};
        color: #707070;
        border-radius: 18px;
        opacity: 1;
        cursor: pointer;
        width: 70px;
        font-size: 16px;
        align-items: center;

        &:hover {
            transform: scale(103%);
            cursor: pointer;
        }
    `;

    export const AddLeito = styled.button`
        border: none;
        background: #E3E3EE;
        color: #707070;
        border-radius: 18px;
        opacity: 0.6;
        width: 150px;
        padding: 5px 28px;
        text-align: center;
        font-size: 30px;
        cursor: pointer;
        height: 52px;

        margin-left: 1rem;

        &:hover {
            transform: scale(103%);
            cursor: pointer;
        }
    `;

    export const AddLeitoButtonWrapp = styled.div`
        display: flex;
        margin-bottom: 2rem;
        margin-top: 1rem;
        justify-content: center;
    `;

//LEGENDAS
    export const Legendas = styled.div`
        grid-area: legendas;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: column;
        max-height: 100px;
    `; 

    export const LegColor = styled.div`
        display: flex;
        align-items: center;
    `;

    export const LegendaIcon = styled.div`
        font-size: 14px;
        margin-right: 15px;
        margin-left: 15px;
        background-color: ${({bg}) => bg};
        border: none;
        border-radius: 12px;
        padding: 7px 8px;
        font-size: 12px;
        color:  #707070;
    `;

    export const LegendaTxt = styled.p`
        font-size: 16px;
        text-align: center;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    `;



//POPUPS

export const PopUp = styled.div`
    display: ${({active}) => (active ? 'block' : 'none')};
    z-index: 1;
    position: fixed;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 280px;
    width: 550px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpWrapp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
`;

export const PopUpForm = styled.form`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 60%;
`;

export const PopUpField = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
`;

export const PopUpLabel = styled.label`
    text-align: center;
    font-weight: 500;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    text-align: left;
    margin-bottom: 2px;
`;

export const PopUpInput = styled.input`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 30px;
    outline: none;
    padding-left: 15px;
`;

export const PopUpInputSelect = styled.select`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 38px;
    padding-left: 15px;
`;

export const SelectOption = styled.option`
    height: 30px;
`;


export const PopUpButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`;

export const PopUpCancel = styled.button`
    width: 150px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #6045E2;
    border-radius: 8px;
    opacity: 1;
    color: #6045E2;
    cursor: pointer;
    transition: 0.2ms all ease-in-out;

    &:hover{
        transform: scale(102%);
        transition: 0.2ms all ease-in-out;
    }
`;

export const PopUpCreate = styled.button`
    width: 150px;
    background: #6045E2 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 8px;
    opacity: 1;
    color: white;
    padding: 0.5rem 0.2rem;
    cursor: pointer;
    transition: 0.5ms all ease-in-out;

    &:hover{
        transform: scale(102%);
        transition: 0.2ms all ease-in-out;
    }
`;

