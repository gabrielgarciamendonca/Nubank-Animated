import React from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import { Feather } from '@expo/vector-icons';
import { Animated } from 'react-native';
import { State, PanGestureHandler, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './style';
import Menu from '../components/Menu';

export default function Main() {
  let offSet = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event: PanGestureHandlerStateChangeEvent) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offSet += translationY;
      if (translationY >= 80) {
        opened = true;
      } else {
        translateY.setValue(offSet);
        translateY.setOffset(0);
        offSet = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 310 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offSet = opened ? 310 : 0;
        translateY.setOffset(offSet);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={ translateY }/>

        <PanGestureHandler
          onGestureEvent={ animatedEvent }
          onHandlerStateChange={ onHandlerStateChanged }
        >
          <Card style={
            {
              transform: [
                {
                  translateY: translateY.interpolate(
                    {
                      inputRange: [-350, 0, 310],
                      outputRange: [-50, 0, 310],
                      extrapolate: 'clamp',
                    }
                  ),
                }
              ]
            }
          }>
            <CardHeader>
              <Feather name="dollar-sign" size={ 24 } color="#666"/>
              <Feather name="eye-off" size={ 24 } color="#666"/>
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 3.500,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 20,00 recebida de Gabriel Mendonça hoje às 06:00h.
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs translateY={ translateY }/>
    </Container>
  );
}