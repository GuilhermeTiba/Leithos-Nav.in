import React, { useState } from "react";

import {
  LoginLeft,
  LogInForm,
  LogInFormWrapp,
  FormFields,
  FieldsWrapp,
  InputLogin,
  IconView,
  InputPassword,
  IconButton1,
  IconButton2,
  ButtonWrapp,
  ButtonSignIn,
  LoginWrappTitle,
  LoginTitle,
  LoginTitleAppName,
  LoginLabelForm,
  LoginLeftWrapp,
  LoginLabel,
  InputWrapp,
} from "./LogIn.styles";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../contexts/autenticateContext";
import { useNavigate } from "react-router";

const LeftSide = () => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [activeIcon, setActiveIcon] = useState(false);
  const { loginAuthenticate } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const newLogin = {
      email,
      password,
    };
    try {
      await loginAuthenticate(newLogin);
      navigate("/home");
    } catch (err) {
      console.log(err);
    } finally {
      setName("");
      setPassword("");
    }
  };

  const handleIconPassword = (e) => {
    e.preventDefault();
    setActiveIcon(!activeIcon);
  };

  return (
    <LoginLeft>
      <LoginLeftWrapp>
        <LoginWrappTitle>
          <LoginTitle>Bem-vindo ao</LoginTitle>
          <LoginTitleAppName>leitosmap</LoginTitleAppName>
        </LoginWrappTitle>

        <LogInForm>
          <LoginLabelForm>Acesse sua conta</LoginLabelForm>
          <LogInFormWrapp>
            <FormFields>
              <FieldsWrapp>
                <InputWrapp>
                  <LoginLabel>E-mail</LoginLabel>
                  <InputLogin
                    type="email"
                    name="uname"
                    required
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputWrapp>

                <InputWrapp>
                  <LoginLabel>Senha</LoginLabel>
                  <IconView>
                    <InputPassword
                      type={activeIcon ? "text" : "password"}
                      name="psw"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <IconButton1
                      display={activeIcon}
                      onClick={handleIconPassword}
                    >
                      <AiOutlineEye />
                    </IconButton1>
                    <IconButton2
                      display={activeIcon}
                      onClick={handleIconPassword}
                    >
                      <AiOutlineEyeInvisible />
                    </IconButton2>
                  </IconView>
                </InputWrapp>
              </FieldsWrapp>

              <ButtonWrapp>
                <ButtonSignIn type="submit" onClick={handleSignIn}>
                  Entrar
                </ButtonSignIn>
              </ButtonWrapp>
            </FormFields>
          </LogInFormWrapp>
        </LogInForm>
      </LoginLeftWrapp>
    </LoginLeft>
  );
};

export default LeftSide;
