import { Container } from '../../App.styled';
import {
  BackgroundContainer,
  StartButton,
  SubText,
  Title,
} from './Welcome.styled';

const Welcome = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Title>Take wheels anywhere</Title>
        <SubText>
          We offer car rental in any city of Ukraine. <br />
          You can choose any car and we will deliver it to you and give you the
          keys for use.
        </SubText>
        <StartButton to="/catalog">Choose a car</StartButton>
      </Container>
    </BackgroundContainer>
  );
};

export default Welcome;
