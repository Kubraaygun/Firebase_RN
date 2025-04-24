//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getInitials} from '../../utils/function';

// create a component
const Avatar: React.FC = ({name, surname}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 325}}>{getInitials(name, surname)}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9E3F0',
    width: 65,
    height: 65,
    borderRadius: 100,
  },
});

//make this component available to the app
export default Avatar;
