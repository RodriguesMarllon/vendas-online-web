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
  return (
    <ContainerLoginScreem>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="Usuário" />
          <Input title="Senha" />
          <Button type="primary" margin="64px 0px 16px 0px ">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreem>
  );
};

export default LoginScreen;
