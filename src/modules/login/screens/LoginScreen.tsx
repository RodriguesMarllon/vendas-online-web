import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreem,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreem>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title="Usuário" />
          <Input title="Senha" />
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreem>
  );
};

export default LoginScreen;
