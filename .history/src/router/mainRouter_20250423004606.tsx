import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Users from '../users';

const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
};

export default MainRouter;
