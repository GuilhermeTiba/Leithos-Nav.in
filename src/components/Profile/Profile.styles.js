import styled from "styled-components/macro";

export const ProfileWrapp = styled.div`
  grid-area: Dashboard;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 85%;
`;

export const ProfileTitleWrapp = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  z-index: 0;
  margin-top: 2rem;
`;

export const ProfileTitle = styled.h1`
  text-align: center;
  letter-spacing: 0px;
  color: #6a52dd;
  opacity: 1;
  font-size: 40px;
  padding-left: 2rem;
  font-weight: bold;
`;

export const ProfileSectorGrid = styled.div`
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
`;

export const ProfileDashboardWrapp = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000004d;
  border-radius: 30px;
  z-index: 0;
  padding: 12px 160px;
  border: none;
  height: 580px;
  max-width: 100%;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  opacity: 0.85;
  padding-bottom: 4rem;
`;

//FORM PROFILE

export const ProfileFormWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  justify-content: flex-start;
  height: 100%;
`;

export const ProfilePictureWrapp = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2rem 0;
`;

export const ProfilePicture = styled.div`
  color: #dedede;
  font-size: 110px;
  z-index: 1;
`;

export const ProfilePersonPicture = styled.div`
  position: relative;
  right: 94px;
  top: 10px;
  font-size: 80px;
  z-index: 2;
  color: #0000004d;
`;

export const ProfileCameraPicture = styled.div`
  color: #6f58dc;
  position: relative;
  right: 148px;
  top: 40px;
  font-size: 28px;
  z-index: 3;
  cursor: pointer;
`;

export const ProfileFormArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
`;

export const ProfileInputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 45%;
  margin-bottom: 2rem;
`;

export const ProfileLabel = styled.label`
  text-align: center;
  font-weight: 500;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-align: left;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const ProfileInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #c7bebe;
  border-radius: 10px;
  opacity: 1;
  height: 33px;
  outline: none;
  padding-left: 15px;
  font-size: 15px;
  color: #707070;
`;

export const ProfileSelect = styled.select`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #c7bebe;
  border-radius: 10px;
  opacity: 1;
  height: 38px;
  padding-left: 15px;
  outline: none;
  color: #707070;
  font-size: 15px;
`;

export const ProfileOption = styled.option`
  color: #707070;
`;

export const ProfileSaveButtonWrapp = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ProfileSaveButton = styled.button`
  width: 170px;
  background: #6045e2 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 18px;
  opacity: 1;
  color: white;
  padding: 0.8rem 0.2rem;
  cursor: pointer;
  transition: 0.5ms all ease-in-out;
  font-size: 18px;

  &:hover {
    transform: scale(102%);
    transition: 0.2ms all ease-in-out;
  }
`;

export const PasswordWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #c7bebe;
  border-radius: 10px;
  opacity: 1;
  height: 37px;
  outline: none;
  padding-left: 15px;
`;

export const ProfileInputPassword = styled.input`
  color: #707070;
  font-size: 15px;
  border: none;
  width: 100%;
  outline: none;
`;

export const ProfilePasswordButton1 = styled.div`
  display: ${({ display }) => (display ? "none" : "block")};
  background-color: transparent;
  color: #c3c3c3;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding-top: 8px;
  padding-right: 5px;
`;

export const ProfilePasswordButton2 = styled.div`
  display: ${({ display }) => (display ? "block" : "none")};
  background-color: transparent;
  color: #c3c3c3;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding-top: 8px;
  padding-right: 5px;
`;
