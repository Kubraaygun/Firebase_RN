//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Users: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Users;
