import styled from "styled-components/macro";

export const LogInContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  margin: auto;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: white;
  font-family: "Poppins", sans-serif;
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
  width: 5%;
  height: 8%;
`;

export const Logo2 = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 9%;
  height: 7%;
`;

export const LogInWrapp = styled.div`
  display: grid;
  grid-template-areas:
    "login"
    "images";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: white;
`;

//RIGHT SIDE

export const LoginRight = styled.div`
  background-image: url(${({ backgroundDesign }) => backgroundDesign});
  background-position: center;
  background-size: 128vh;
  background-color: black;
  grid-area: "images";
`;

export const RightSideText = styled.h1`
  position: relative;
  color: white;
  top: 70px;
  margin-left: 120px;
  width: 400px;
`;

export const RightSideComputerImage = styled.img`
  position: relative;
  width: 500px;
  height: 500px;
  top: 80px;
  left: 280px;
`;

export const RightSideDashboardImage = styled.img`
  position: relative;
  width: 260px;
  height: 260px;
  right: 560px;
  top: 80px;
`;

export const RightSideDataImage = styled.img`
  position: relative;
  width: 160px;
  height: 160px;
  top: 330px;
  right: 380px;
`;

//LEFT SIDE

export const LoginLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  grid-area: "login";
  margin-left: 8rem;
`;

export const LoginLeftWrapp = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 60%;
  justify-content: center;
`;

export const LogInForm = styled.form`
  background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
  border: none;
  opacity: 0.85;

  display: flex;
  flex-direction: column;
  margin: auto 0px;
`;

export const LogInFormWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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

export const InputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
`;

export const LoginLabel = styled.label`
  text-align: center;
  font-weight: 500;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-align: left;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const FieldsWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-left: 5px;
`;

export const FormLogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const FormLogo = styled.img``;

export const InputLogin = styled.input`
  background: #e9e7e7 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 10px;
  opacity: 1;
  height: 38px;
  outline: none;
  padding-left: 15px;
  font-size: 15px;
  color: #707070;
  width: 80%;
`;

export const InputPassword = styled.input`
  color: #707070;
  font-size: 15px;
  border: none;
  width: 100%;
  outline: none;
  background: #e9e7e7 0% 0% no-repeat padding-box;
`;

export const IconView = styled.div`
  display: flex;
  justify-content: space-between;
  background: #e9e7e7 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 10px;
  opacity: 1;
  height: 40px;
  outline: none;
  padding-left: 15px;
  font-size: 15px;
  width: 80%;
`;

export const IconButton1 = styled.button`
  display: ${({ display }) => (display ? "none" : "block")};
  background-color: transparent;
  color: #c3c3c3;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding-top: 6px;
  padding-right: 8px;
`;

export const IconButton2 = styled.button`
  display: ${({ display }) => (display ? "block" : "none")};
  background-color: transparent;
  color: #c3c3c3;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding-top: 6px;
  padding-right: 8px;
`;

export const ButtonSignIn = styled.button`
  width: 160px;
  background: #6045e2 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 12px;
  opacity: 1;
  color: white;
  padding: 0.7rem 0.2rem;
  cursor: pointer;
  transition: 0.5ms all ease-in-out;
  font-size: 18px;
  margin-top: 3.5rem;

  &:hover {
    transform: scale(102%);
    transition: 0.2ms all ease-in-out;
  }
`;
export const LoginWrappTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  margin: 0;
  font-size: 40px;
  color: #595959;
  font-weight: bold;
`;

export const LoginTitleAppName = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #6045e2;
  font-weight: bold;
`;

export const LoginLabelForm = styled.h3`
  margin-bottom: 1.5rem;
  color: #707070;
  font-size: 22px;
`;
