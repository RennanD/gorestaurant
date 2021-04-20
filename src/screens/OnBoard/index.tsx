import React from 'react';

import {
  Container,
  Logo,
  Description,
  GoButton,
  GoButtonText,
  HeroImage,
  Main,
} from './styles';

import logoImg from '../../assets/logo.png';
import heroImg from '../../assets/hero.png';

export function OnBoard(): JSX.Element {
  return (
    <Container>
      <HeroImage source={heroImg} />
      <Main>
        <Logo source={logoImg} />
        <Description>
          Uma {'\n'}verdadeira {'\n'}experiência {'\n'}Italiana.
        </Description>
      </Main>
      <GoButton>
        <GoButtonText>Entrar no Restaurant</GoButtonText>
      </GoButton>
    </Container>
  );
}
