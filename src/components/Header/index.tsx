import React from 'react';

import { Container, Top, Logo, Title } from './style';
import logo from '../../assets/Nubank_Logo.png';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={ logo } />
        <Title>Gabriel</Title>
      </Top>
      <AntDesign name="down" size={ 16 } color="#FFF"/>
    </Container>
  )
}