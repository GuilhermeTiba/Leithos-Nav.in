import React, {useState} from 'react';
import {
    LoginRight, 
    LogInForm, 
    LogInFormWrapp,
    FormLogoWrap,
    FormLogo,
    FormFields,
    FieldsWrapp,
    InputLogin,
    IconView,
    InputPassword,
    IconButton1,
    IconButton2,
    ButtonWrapp,
    ButtonSignIn
} from './LogIn.styles';

import logoForm from '../../assets/logo.png'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const RigthSide = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    //const [active, toggle] = useState(false);
    const [activeIcon, setActiveIcon] = useState(false);
    const [list, setList] = useState([]);

    const HandleSignIn = (e) => {
        e.preventDefault();
        const newRegister = {
            id: Math.floor(Math.random()*1000000),
            name: name,
            senha: password
        }

        setList([...list, newRegister])
        setName('');
        setPassword('');
        console.log(list)
    }

    const HandleIconPassword = (e) => {
        e.preventDefault();
        setActiveIcon(!activeIcon);
    }

    return (
        <LoginRight>
                    <LogInForm>
                        <LogInFormWrapp>
                            <FormLogoWrap>
                                <FormLogo src = {logoForm} alt="Leitos"/>
                            </FormLogoWrap>
                            <FormFields >
                                
                                <FieldsWrapp>
                                    <InputLogin type="text" placeholder="Login" name="uname" required value={name} onChange={(e) => setName(e.target.value)}/>
                                    <IconView>
                                        <InputPassword type={activeIcon ? 'text': 'password'} placeholder={"Senha"} name="psw" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                        <IconButton1 display={activeIcon} onClick={HandleIconPassword}><AiOutlineEye/></IconButton1>
                                        <IconButton2 display={activeIcon} onClick={HandleIconPassword}><AiOutlineEyeInvisible/></IconButton2>
                                    </IconView>
                                </FieldsWrapp>

                                <ButtonWrapp>
                                    <ButtonSignIn type="submit" onClick={HandleSignIn}>Entrar</ButtonSignIn>
                                </ButtonWrapp>

                            </FormFields>
                        </LogInFormWrapp>
                    </LogInForm>
                </LoginRight>
    )
}

export default RigthSide
