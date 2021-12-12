import styled from "styled-components/macro";

export const WrapMenu = styled.div`
  color: black;
  position: relative;
  padding: 0;
  margin: 0;
  height: 75%;
  width: 100px;
  top: 50px;
  left: 50px;
`;

export const SideMenu = styled.div`
  //display: ${({ active }) => (active ? "none" : "block")};
  background-color: #ffffff;
  position: fixed;
  width: 206px;
  height: 626px;
  margin: 0px;
  outline: none;
  border-radius: 20px;
  opacity: 0.85;
  box-shadow: 0px 0px 6px #0000004d;
  transition: ${({ active }) => (active ? "all 0.5s ease" : "all 0.5s ease")};
  width: ${({ active }) => (active ? "61px" : "none")};
`;
export const SideMenuItens = styled.div`
  display: ${({ active }) => (active ? "none" : "block")};
  transition: ${({ active }) =>
    active ? "all 1.0s ease-in-out" : "all 1.0s ease-in-out"};
  width: ${({ active }) => (active ? "100%" : "100%")};
`;

export const SideBar = styled.div`
  background-color: #6a52dd;
  padding: 0px;
  margin: 0px;
  position: fixed;
  width: 61px;
  height: 626px;
  box-sizing: border-box;
  opacity: 1;
  outline: none;
  border-radius: 20px 0px 0px 20px;
  border-radius: ${({ active }) =>
    active ? "20px 20px 20px 20px" : " 20px 0px 0px 20px"};
  transition: ${({ active }) => (active ? "all 1.0s ease" : "all 0.6s ease")};

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  filter: drop-shadow(1px 2px 3px #00000066);
`;
export const Circle01 = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 30px;
  width: 30px;
  color: #ffffff;
  font-size: 30px;
  top: 15px;
  left: 20px;
  opacity: 1;
`;
export const Circle02 = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 20px;
  width: 20px;
  color: #eee;
  font-size: 20px;
  top: 0px;
  left: 12px;
  background: transparent;
  opacity: 0.49;
`;

export const SearchMenu = styled.div`
  position: fixed;
  margin: 0;
  padding: 0;
  width: 62px;
  height: 17px;
  top: 150px;
  left: 110px;
`;
export const SearchMenuInput = styled.input`
  position: relative;
  margin: 0px;
  padding: 0px;
  width: 100px;
  height: 17px;
  top: 20px;
  left: 13px;
  background-color: transparent;
  border-width: 1px;
  border-color: #cbcbd6;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  cursor: pointer;
  outline: transparent;
  font-size: 15px;
  padding-bottom: 5px;

  ::placeholder {
    color: #707070;
  }
`;
export const SearchMenuIcon = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 20px;
  width: 20px;
  font-size: 25px;
  color: #ffffff;
  top: 70px;
  left: 20px;
  opacity: 1;
  filter: drop-shadow(1px 2px 2px #00000066);
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.25);
    cursor: pointer;
  }
`;
export const DashboardMenu = styled.div``;

export const DashboardMenu2 = styled.div`
  display: block;
  position: absolute;
  top: 175px;
  left: 60px;
`;

export const ButtonWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1.35rem;
  padding-right: 3rem;
  padding-left: 0.5rem;

  &:hover {
    background: ${({ activeDrop }) =>
      activeDrop
        ? "none"
        : "transparent linear-gradient(90deg, #6045e291 0%, #ceb9ea45 100%) 0% 0% no-repeat padding-box;"};
    opacity: 1;
  }
`;

export const DashboardIcon = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  color: #ffffff;
  height: 20px;
  width: 20px;
  font-size: 25px;
  top: 110px;
  left: 20px;
  filter: drop-shadow(1px 2px 2px #00000066);
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.25);
    cursor: pointer;
  }
`;

export const SetoresMenu = styled.div``;
export const SetoresMenuIcon = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  color: #ffffff;
  height: 20px;
  width: 20px;
  font-size: 25px;
  top: 150px;
  left: 20px;
  filter: drop-shadow(1px 2px 2px #00000066);
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.25);
    cursor: pointer;
  }
`;
export const PerfilMenu = styled.div``;

export const PerfilMenuIcon = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  color: #ffffff;
  height: 20px;
  width: 20px;
  font-size: 25px;
  top: ${({ activeDrop }) => (activeDrop ? "309px" : "190px")};
  left: 20px;
  filter: drop-shadow(1px 2px 2px #00000066);
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.25);
    cursor: pointer;
  }
`;
export const LogoutMenu = styled.div``;
export const LogoutMenuIcon = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  color: #ffffff;
  height: 20px;
  width: 20px;
  font-size: 25px;
  top: 450px;
  left: 20px;
  filter: drop-shadow(1px 2px 2px #00000066);
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.25);
    cursor: pointer;
  }
`;

//DROP DOWN SECTOR

export const DropDownContainer = styled.nav``;

export const DropDown = styled.ul`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  padding-left: 15px;
  margin: 5px 0px;
`;

export const DropedItem = styled.li`
  text-decoration: none;
  list-style-type: none;
`;

export const DashboardButtonSector = styled.button`
  position: relative;
  margin: 0px;
  color: #707070;
  padding: 10px 5px;
  width: 40px;
  height: 17px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  outline: transparent;
  transition: transform 200ms ease-in-out;
  text-align: left;
  font-size: 15px;
  padding-bottom: 1.8rem;

  &:hover {
    color: #6045e2;
    cursor: pointer;
  }
`;

export const DropTitleWrapp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
