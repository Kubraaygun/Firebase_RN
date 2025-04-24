//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const AddUser: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>v</Text>
    </View>
  );
};

AddUser.defaultProps = {};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default AddUser;
