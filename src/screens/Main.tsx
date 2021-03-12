import React from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import { Feather } from '@expo/vector-icons';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './style';
import Menu from '../components/Menu';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
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
      </Content>

      <Tabs />
    </Container>
  );
}