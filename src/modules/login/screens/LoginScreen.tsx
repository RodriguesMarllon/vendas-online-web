import React, { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
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
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`usuário: ${username}, senha: ${password}`);
  };

  return (
    <ContainerLoginScreem>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="Usuário" margin="32px 0px 0px" onChange={handleUserName} value={username} />
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
