//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const UserItem: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>
        {item.name}
        {item.surnaem}
      </Text>
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
export default UserItem;
