import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Main from './src/screens/Main';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8B10AE'/>
      <Main />
    </>
  );
}
