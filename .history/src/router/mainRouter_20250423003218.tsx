import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const MainRouter: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>MainRouter</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MainRouter;
