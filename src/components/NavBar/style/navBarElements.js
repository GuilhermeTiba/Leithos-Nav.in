import styled from 'styled-components/macro'

export const Background = styled.div`
        background-color: #ECEAF0;
        position: absolute;
        width: 100%;
        height: 789px;
        margin: -8px 0px 0px -8px;
`
export const WrapMenu = styled.div`
        color: black;
        padding: 0;
        margin: 0;
        height: 75%;
        width: 100px;
        position: relative;
        top: 50px;
        left: 50px;
`

export const SideMenu = styled.div`
        display: ${({active}) => (active ? 'none' : 'block')};
        background-color: #FFFFFF;
        position: fixed;
        width: 206px;
        height: 626px;
        margin: 0px;
        outline: none;
        border-radius: 30px;
        opacity: 0.85;
        box-shadow: 0px 0px 6px #0000004D;

`
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
        border-radius: ${({ active }) => active ? "20px 20px 20px 20px" : " 20px 0px 0px 20px"};
        transition: ${({ active }) => active ? "none" : "transform 100ms ease-in-out"};

        &:hover{
        cursor: pointer;
        }
`

export const Logo = styled.div`
        filter: drop-shadow(1px 2px 3px #00000066);
        
`
export const Circle01 = styled.div`
        position: relative;
        margin: 0px;
        padding: 0px;
        height: 30px;
        width: 30px;
        color: #FFFFFF;
        font-size: 30px;
        top: 15px;
        left: 20px;
        opacity: 1;
        
`
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
                
`

export const SearchMenu = styled.div`
        position: fixed;
        margin: 0;
        padding: 0;
        width: 62px;
        height: 17px;
        top: 150px;
        left: 115px;


`
export const SearchMenuInput = styled.input`
        position: relative;
        margin: 0px;
        padding: 0px;
        width: 100px;
        height: 17px;
        top: 20px;
        left: 10px;
        background-color: transparent;
        border-color: #CBCBD6;
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
        cursor: pointer;
        outline: transparent;

        ::placeholder{
        color: #707070a9;
        }

`
export const SearchMenuIcon = styled.div`
        position: relative;
        margin: 0px;
        padding: 0px;
        height: 20px;
        width: 20px;
        font-size: 25px;
        color: #FFFFFF;
        top: 70px;
        left: 16px;
        opacity: 1;
        filter: drop-shadow(1px 2px 2px #00000066);
        cursor: pointer;
        transition: transform 200ms ease-in-out;

        &:hover{
        background-color: transparent;
        transform: scale(1.25);
        cursor: pointer;
        }
`

export const DashboardMenu = styled.div`


`

export const DashboardIcon = styled.div`
        position: relative;
        margin: 0px;
        padding: 0px;
        color: #FFFFFF;
        height: 20px;
        width: 20px;
        font-size: 25px;
        top: 110px;
        left: 18px;
        filter: drop-shadow(1px 2px 2px #00000066);
        cursor: pointer;
        transition: transform 200ms ease-in-out;

        &:hover{
        background-color: transparent;
        transform: scale(1.25);
        cursor: pointer;
        }
`

export const SetoresMenu = styled.div`

`
export const SetoresMenuIcon = styled.div`
        position: fixed;
        margin: 0px;
        padding: 0px;
        color: #FFFFFF;
        height: 20px;
        width: 20px;
        font-size: 25px;
        top: 290px;
        left: 68px;
        filter: drop-shadow(1px 2px 2px #00000066);
        cursor: pointer;
        transition: transform 200ms ease-in-out;

        &:hover{
        background-color: transparent;
        transform: scale(1.25);
        cursor: pointer;
        }

`
export const PerfilMenu = styled.div`

`
export const PerfilMenuIcon =styled.div`
        position: fixed;
        margin: 0px;
        padding: 0px;
        color: #FFFFFF;
        height: 20px;
        width: 20px;
        font-size: 25px;
        top: 350px;
        left: 70px;
        filter: drop-shadow(1px 2px 2px #00000066);
        cursor: pointer;
        transition: transform 200ms ease-in-out;

        &:hover{
        background-color: transparent;
        transform: scale(1.25);
        cursor: pointer;
        }
`
export const LogoutMenu = styled.div`

`
export const LogoutMenuIcon = styled.div`
        position: fixed;
        margin: 0px;
        padding: 0px;
        color: #FFFFFF;
        height: 20px;
        width: 20px;
        font-size: 25px;
        top: 530px;
        left: 70px;
        filter: drop-shadow(1px 2px 2px #00000066);
        cursor: pointer;
        transition: transform 200ms ease-in-out;

        &:hover{
        background-color: transparent;
        transform: scale(1.25);
        cursor: pointer;
        }
`