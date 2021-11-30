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
import { useAuth } from '../../contexts/autenticateContext';
import { useNavigate } from 'react-router';

const RigthSide = () => {
    const [email, setName] = useState('');
    const [password, setPassword] = useState('')
    const [activeIcon, setActiveIcon] = useState(false);
    const {loginAuthenticate} = useAuth();
    const navigate = useNavigate()

    const handleSignIn = async (e) => {
        e.preventDefault();
        const newLogin ={
            email,
            password
        }
        try {
            await loginAuthenticate(newLogin);
            navigate('/home')
        }catch(err) {
            console.log(err)
        }finally {
            setName('');
            setPassword('');
        }
    }

    const handleIconPassword = (e) => {
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
                                    <InputLogin type="text" placeholder="Login" name="uname" required value={email} onChange={(e) => setName(e.target.value)}/>
                                    <IconView>
                                        <InputPassword type={activeIcon ? 'text': 'password'} placeholder={"Senha"} name="psw" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                        <IconButton1 display={activeIcon} onClick={handleIconPassword}><AiOutlineEye/></IconButton1>
                                        <IconButton2 display={activeIcon} onClick={handleIconPassword}><AiOutlineEyeInvisible/></IconButton2>
                                    </IconView>
                                </FieldsWrapp>

                                <ButtonWrapp>
                                    <ButtonSignIn type="submit" onClick={handleSignIn}>Entrar</ButtonSignIn>
                                </ButtonWrapp>

                            </FormFields>
                        </LogInFormWrapp>
                    </LogInForm>
                </LoginRight>
    )
}

export default RigthSide
