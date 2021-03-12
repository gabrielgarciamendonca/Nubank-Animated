import React from 'react';
import SvgQRCode from 'react-native-qrcode-svg';
import { Feather } from '@expo/vector-icons';


import { Container, Code, Nav, NavItem, NavText, SignOutButtonText, SignOutButton } from './style';
import { Animated } from 'react-native';

// Simple usage, defaults for all but the value
function Simple() {
  return <SvgQRCode value="https://github.com/gabrielgarciamendonca" size={ 60 } color="#8B10AE" backgroundColor="#FFF" />;
}

interface MenuProp {
  translateY: Animated.Value
}

export default function Menu(prop:MenuProp) {
  return (
    <Container
      style={
        {
          opacity: prop.translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
          })
        }
      }
    >
      <Code>
        <Simple />
      </Code>

      <Nav>
        <NavItem>
          <Feather name="help-circle" size={ 20 } color="#FFF"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Feather name="user" size={ 20 } color="#FFF"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Feather name="credit-card" size={ 20 } color="#FFF"/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Feather name="smartphone" size={ 20 } color="#FFF"/>
          <NavText>Configurar app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}