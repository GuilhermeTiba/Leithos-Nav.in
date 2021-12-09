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
    margin-bottom: 1rem;
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
        height: 70px;
        width: 160px;
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
        font-size: 35px;
        font-weight: 200;
        padding-left: 5px;
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
        padding: 10px 160px;
        border: none;
        height: 580px;
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
        align-self: flex-start;
        margin-bottom: 1px;
    `;

    export const Nome = styled.div`
        border: none;
        background: ${({bgText}) => bgText};
        color: #707070;
        border-radius: 13px;
        opacity: 0.6;
        margin-right: 4px;
        min-width: 50px;
        max-width: 51px;
        min-height: 18px;
        max-height: 18px;
        padding: 12px 18px;
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
        border-radius: 13px;
        opacity: 1;
        cursor: pointer;
        width: 50px;
        font-size: 14px;
        text-align: center;
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
        border-radius: 15px;
        opacity: 0.6;
        width: 142px;
        padding: 5px 10px;
        text-align: center;
        font-size: 30px;
        cursor: pointer;
        margin-top: 0.8rem;
        font-size: 30px;

        margin-left: 1rem;

        &:hover {
            transform: scale(103%);
            cursor: pointer;
        }
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
    display: ${({active, active2}) => (active || active2 ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: ${({active2}) => (active2 ? '525px' : '400px')};
    width: ${({active2}) => (active2 ? '450px' : '550px')};;
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
    width: 70%;
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
    margin-bottom: 8px;
    font-size: 14px;
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
    outline: none;
`;

export const SelectOption = styled.option`
    height: 30px;
`;


export const PopUpButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
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

// Status PopUp

export const PopUpStatus = styled.div`
    background-color: ${({color}) => (color)};
    border: none;
    padding: 4px 20px;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    min-width: 150px;
`;

export const PopUpButton = styled.button`
    text-align: center;
    letter-spacing: 0px;
    color: #6045E2;
    opacity: 1;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #6045E2;
    border-radius: 8px;
    opacity: 1;
    margin-bottom: 0.3rem;
    font-size: 15px;
    transition: 5ms all ease-in-out;
    padding: 4px;
    font-weight: 500;

    &:hover{
        transition: 5ms all ease-in-out;
        cursor: pointer;
        transform: scale(102%);
    }

    &:active {
        background-color: #6045E2;
        color: white;
    }

    &:focus{
        background-color: #6045E2;
        color: white;
        transition: 5ms all ease-in-out;
        cursor: pointer;
    }
`;

//PATIENT INFO POPUP

export const SexAgeWrapp = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SexWrapp = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 60px;
`;

export const AgeWrapp = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
`;

//POPUP DELETEAR

export const PopUpWrappDelete = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    margin-top: 0.3rem;
`;

export const PopUpConfirm = styled.div`
    display: ${({active, active2}) => (active || active2 ? 'block': 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 200px;
    width: 400px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpIcon = styled.div`
    font-size: 35px;
    padding-top: 1rem;
`;

export const PopUpButtonsDelete = styled.div`
    display: flex;
    padding: 1rem 0rem;
    justify-content: space-between;
    width: 80%;
    margin-top: 0.5rem;
`;

export const PopUpLabelDelete = styled.h1`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
    margin-bottom: 1rem;
`;


//POPUP SUCCESSFULLY BOOKED

export const PopUpSuccessfully = styled.div`
    display: ${({active}) => (active ? 'block': 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 200px;
    width: 400px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpWrappSuccessfully = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpIconSuccessfully = styled.div`
    color: #72AE25;
    font-size: 50px;
    background-color:#D8EAC0;
    border-radius: 50px;
    padding: 1rem;
    width: 65px;
`;

export const PopUpLabelSuccessfully = styled.h1`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
`
//POPUP VACATE

export const PopUpVacate = styled.div`
    display: ${({active}) => (active ? 'block': 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 200px;
    width: 400px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpButtonsVacate = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PopUpButtonsVacateApply = styled.div`
    display: flex;
    padding: 1rem 0rem;
    justify-content: space-between;
    width: 70%;
`;

export const PopUpWrappVacate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpFieldVacate = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 1rem;
`;

export const PopUpLabelVacate = styled.h1`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
    margin-bottom: 1rem;
`

export const PopUpCancelVacate = styled.button`
    width: 130px;
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

export const PopUpCreateVacate = styled.button`
    width: 130px;
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

//POPUP SUCCESFULLY CREATED

export const PopUpSuccessfullyCreated = styled.div`
    display: ${({active}) => (active ? 'block': 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 200px;
    width: 400px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpWrappSCreated = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpLabelSCreated = styled.div`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
`;

export const PopUpIconSCreated = styled.div`
    color: #72AE25;
    font-size: 50px;
    background-color:#D8EAC0;
    border-radius: 50px;
    padding: 1rem;
    width: 65px;
`;

//POPUP PATIENT INFO

export const PopUpPatientInfo = styled.div`
    display: ${({active, active2}) => (active || active2 ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 590px;
    width: 500px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpWrappPatientInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    vertical-align: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpStatusPatientInfo = styled.div`
    background-color: ${({color}) => (color)};
    border: none;
    padding: 4px 20px;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    min-width: 150px;
    text-align: center;
`;

export const PopUpTitlePatientInfo = styled.h1`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
`;

export const PopUpFormPatientInfo = styled.form`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 75%;
`;

export const PopUpFieldPatientInfo = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    
`;

export const PopUpButtonsPatientInfo = styled.div`
    display: flex;
    padding: 1rem 0rem;
    justify-content: space-between;
    width: 70%;
`;

export const PopUpAddIndoPatientInfo = styled.input`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 120px;
    outline: none;
    padding-left: 15px;
`;

//POPUP SUCCESFULLY DELETED

export const PopUpWrappDeleted = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpLabelDeleted = styled.div`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
`;

export const PopUpIconTrash = styled.div`
    margin-top: 2.2rem;
    color: #F8838A;
    font-size: 30px;
    background-color:#ECC6C9;
    border-radius: 50px;
    padding: 1.2rem 1.5rem;
`;

//POPUP OCCUPIED

export const PopUpOccupied = styled.div`
    display: ${({active}) => (active ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 300px;
    width: 400px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpWrappOccupied = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpStatusOccupied = styled.div`
    background-color: ${({color}) => (color)};
    border: none;
    padding: 4px 20px;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    width: 40%;
`;

export const PopUpFieldOccupied = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 1rem;
`;

export const PopUpFieldOccupiedStatus = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
`;

export const PopUpButtonsOccupied = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

export const PopUpTitleOccupied = styled.h1`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
    margin-bottom: 8px;
`;

//POPUP SUCCESSFULLY AVAIBLE

export const PopUpSuccessfullyAvaible = styled.div`
    display: ${({active}) => (active ? 'block': 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 200px;
    width: 400px;
    text-align: center;
    padding: 1.2rem 0;
`;

//POPUP VIEW AND CHANGE INFO

export const PopUpLabelInfo = styled.label`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 34px;
    outline: none;
    padding-left: 15px;
    display: ${({toggle}) => (toggle ? 'none' : 'flex')};
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0px;
    color: #707070;
    text-align: left;
    font-size: 14px;
`;  

export const PopUpLabelInfoAddInfo = styled.label`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 34px;
    outline: none;
    padding-left: 15px;
    display: ${({toggle}) => (toggle ? 'none' : 'flex')};
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0px;
    color: #707070;
    text-align: left;
    font-size: 14px;
    height: 120px;
`;

export const PopUpInputInfo = styled.input`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 34px;
    outline: none;
    padding-left: 15px;
    display: ${({toggle}) => (toggle ? 'flex' : 'none')};
`;

export const PopUpInputSelectInfo = styled.select`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 36px;
    padding-left: 15px;
    display: ${({toggle}) => (toggle ? 'flex' : 'none')};
    outline: none;
`;

export const PopUpAddIndoPatientInfoInfo = styled.input`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7BEBE;
    border-radius: 10px;
    opacity: 1;
    height: 120px;
    outline: none;
    padding-left: 15px;
    display: ${({toggle}) => (toggle ? 'flex' : 'none')};
`;

export const PopUpPatientInfoPencilWrapp = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PopUpIconPencil = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    padding-top: 1.5rem;
    padding-right: 1.8rem;
    font-size: 22px;
    color: #7B7272;
    cursor: pointer;

    &:hover{
        transform: scale(105%);
    }
`;

export const PopUpButtonsPatientInfoView = styled.div`
    display: ${({toggle}) => (toggle ? 'none' : 'flex')};
    padding: 1rem 0rem;
    justify-content: center;
    width: 70%;
    height: 31px;
`;

export const PopUpButtonsPatientInfoView2 = styled.div`
    display: ${({toggle}) => (toggle ? 'flex' : 'none')};
    padding: 1rem 0rem;
    justify-content: space-between;
    width: 70%;
`;

//POP UP SUCCESFULLY UPDATED INFO

export const PopUpSuccessfullyUpdatedInfo = styled.div`
    display: ${({active}) => (active ? 'block': 'none')};
    z-index: 1;
    position: absolute;
    background-color: white;
    box-shadow: 0px 3px 50px #0000001A;
    border: none;
    border-radius: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 200px;
    width: 400px;
    text-align: center;
    padding: 1.2rem 0;
`;

export const PopUpWrappSUpdatedInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const PopUpLabelSUpdatedInfo = styled.label`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #7B7272;
    opacity: 1;
`;

export const PopUpIconSUpdatedInfo = styled.div`
    color: #57BAF6;
    font-size: 50px;
    background-color:#CDEBFC;
    border-radius: 50px;
    padding: 1rem;
    width: 65px;
`;