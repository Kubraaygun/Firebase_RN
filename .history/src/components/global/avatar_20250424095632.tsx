//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getInitials} from '../../utils/function';

// create a component
const Avatar: React.FC = ({name, surname, size = 56}) => {
  return (
    <View style={[styles.container, width:size, height:size]}>
      <Text style={{fontSize: 25}}>{getInitials(name, surname)}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9E3F0',
    borderRadius: 100,
  },
});

//make this component available to the app
export default Avatar;
