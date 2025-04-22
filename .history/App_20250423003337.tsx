//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import MainRouter from './src/router/mainRouter';

// create a component
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
