import styled from "styled-components/macro";

export const ToggleMenuBtn = styled.div`
  margin: 0;
`;
export const ButtonBox = styled.div``;
export const BackArrowBtn = styled.button`
  color: #cbcbd6;
  font-size: 20px;
  position: relative;
  margin-right: 30px;
  left: 155px;
  top: 25px;
  border: 0px;
  background-color: transparent;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.5);
    background-color: transparent;
    cursor: pointer;
  }
`;

export const DashboardBtnDash = styled.div`
  position: relative;
  margin: 0px;
  color: #707070;
  padding: 10px 5px;
  width: 80px;
  height: 17px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  outline: transparent;
  transition: transform 200ms ease-in-out;
  text-align: left;
  font-size: 15px;
  text-decoration: none;
  background: ${({ active }) =>
    active
      ? "transparent linear-gradient(90deg, #6045e291 0%, #ceb9ea45 100%) 0% 0% no-repeat padding-box; width: 132%;"
      : "none"};

  padding-left: 0.8rem;

  &:hover {
    color: #6045e2;
    cursor: pointer;
  }
`;
export const DashboardBtnSector = styled.div`
  position: relative;
  margin: 0px;
  color: #707070;
  padding: 10px 5px;
  width: 50px;
  height: 17px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  outline: transparent;
  transition: transform 200ms ease-in-out;
  text-align: left;
  font-size: 15px;
  padding-left: 0.8rem;

  &:hover {
    color: #6045e2;
    cursor: pointer;
  }
`;

export const DashboardBtnProfile = styled.div`
  position: relative;
  margin: 0px;
  color: #707070;
  padding: 10px 5px;
  width: 80px;
  height: 17px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  outline: transparent;
  transition: transform 200ms ease-in-out;
  text-align: left;
  font-size: 15px;
  padding-left: 0.8rem;

  &:hover {
    color: #6045e2;
    cursor: pointer;
  }
`;
