import axios from 'axios';
import React, { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import SVGHome from '../../../shared/icons/SVGHome';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreem,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert(`Fez login${result.data.accessToken}`);
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha inválido!');
      });
  };

  return (
    <ContainerLoginScreem>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="Usuário" margin="32px 0px 0px" onChange={handleEmail} value={email} />
          <Input
            type="password"
            title="Senha"
            margin="32px 0px 0px"
            onChange={handleUserPassword}
            value={password}
          />
          <Button type="primary" margin="64px 0px 16px 0px " onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreem>
  );
};

export default LoginScreen;
