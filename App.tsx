import React from 'react';
import { StatusBar } from 'react-native';
import { OnBoard } from './src/screens/OnBoard';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <OnBoard />
    </>
  );
}
