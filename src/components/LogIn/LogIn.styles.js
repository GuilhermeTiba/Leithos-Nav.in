import styled from "styled-components/macro";

export const LogInContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    margin: auto;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background-color: #EAE8EE;
    font-family: 'Poppins', sans-serif;
`;

export const TopRightArt = styled.img`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
`;

export const DownLeftArt = styled.img`
    display: block;
    position: absolute;
    bottom: 0;
`;

export const Logo = styled.img`
    display: block;
    position: absolute;
    padding: 2rem;
`;

export const LogInWrapp = styled.div`
    display: grid;  
    grid-template-areas: 
        "imagens"
        "login";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: rgba(234, 232, 238, 1);
`;


export const LoginLeft = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    grid-area: 'imagens';
    margin-left: 100px;
`;

export const LoginRight  = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    grid-area: 'login';
    margin-right: 100px;
`;

export const ImagesWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const DashboardImage = styled.img`
    height: 600px;
    width: 600px;
`;

export const LogInForm = styled.form`
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
    padding: 42px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.1);
    opacity: 0.85;

    display: block;
    top: 94px;
    left: 762px;
    width: 498px;
    height: 581px;
`;

export  const LogInFormWrapp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    width: 100%;
    height: 100%;
`;

export const FormFields = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 250px;
`;

export const FieldsWrapp = styled.div`
    display: ${({open}) => (open ? 'none' : 'flex' )};
    flex-direction: column;
    justify-content: flex-start;
`;

export const FieldsNewPassword = styled.div`
    display: ${({open})=> (open ? 'flex' : 'none' )};
    flex-direction: column;
    justify-content: flex-start;
`;

export const ButtonWrapp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormLogoWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
`;

export const FormLogo = styled.img``;

export const InputLogin = styled.input`
    margin-bottom: 16px;
    text-decoration: none;
    border: none;
    border-bottom: 1px solid rgba(112,112,112, 0.5);
    opacity: 67% ;
    font-size: 16px;
    padding-bottom: 3px;
    outline: 0;
    color: black;

    &::placeholder {
        color: rgba(112,112,112, 0.5);
    }
`;

export const InputPassword = styled.input`
    margin-bottom: 2px;
    text-decoration: none;
    border: none;
    opacity: 67% ;
    font-size: 16px;
    outline: 0;
    color: black;

    &::placeholder {
        color: rgba(112,112,112, 0.5);
    }
`;

export const IconView = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(112,112,112, 0.5);
    margin-bottom: 16px;
`;

export const IconButton1 = styled.button`
    display: ${({display}) => (display ? 'none' : 'block')};
    background-color: transparent;
    color: #C3C3C3;
    border: none;
    cursor: pointer;
`;

export const IconButton2 = styled.button`
    display: ${({display}) => (display ? 'block' : 'none')};
    background-color: transparent;
    color: #C3C3C3;
    border: none;
    cursor: pointer;
`;

export const ButtonForgotPassword = styled.button`
    margin-bottom: 16px;
    border: none;
    background-color: white;
    text-align: left;
    font-size: 13px;
    color:#6045E2;

    &:hover {
        cursor: pointer;
    }

`;

export const ButtonSignIn = styled.button`
    margin-bottom: 16px;
    background: transparent linear-gradient(180deg, #6045E2 0%, #6045E2A8 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000004D;
    border-radius: 10px;
    opacity: 1;
    border: none;
    padding: 12px 60px;
    color: white;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.56px;
    margin-top: 1.5rem;

    &:hover {
        cursor: pointer;
        transform: scale(105%);
        font-weight: bold;
    }
`;

