import Exponent from 'exponent';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens'

EStyleSheet.build(Colors);
class App extends React.Component {
  render() {
    return <HomeScreen />;
  }
}
Exponent.registerRootComponent(App);
