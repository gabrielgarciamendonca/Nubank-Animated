import React from 'react';

import { Container, TabsContainer, TabItem, TabText } from './style';
import { AntDesign } from '@expo/vector-icons';
import { Animated } from 'react-native';

interface TabsProp {
  translateY: Animated.Value
}

export default function Tabs(prop: TabsProp) {
  return (
    <Container
      style={
        {
          transform: [{
            translateY: prop.translateY.interpolate({
              inputRange: [0, 310],
              outputRange: [0, 40],
              extrapolate: 'clamp',
            })
          }],
          opacity: prop.translateY.interpolate({
            inputRange: [0, 310],
            outputRange: [1, 0.3],
            extrapolate: 'clamp',
          })
        }
      }
    >
      <TabsContainer>
        <TabItem>
          <AntDesign name="adduser" size={ 22 } color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <AntDesign name="wechat" size={ 22 } color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <AntDesign name="arrowup" size={ 22 } color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <AntDesign name="arrowdown" size={ 22 } color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <AntDesign name="closecircle" size={ 22 } color="#FFF" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  )
}