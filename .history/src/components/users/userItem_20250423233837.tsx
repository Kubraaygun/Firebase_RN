//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {convertFullName} from '../../utils/function';
import Avatar from '../global/avatar';

const UserItem: React.FC = ({item}) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Text style={{fontSize: 30}}>
          <Avatar />
        </Text>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <Text style={{fontSize: 30}}>
          {convertFullName(item.name, item.surname)}
        </Text>

        <Text style={{fontSize: 16, color: 'gray'}}>{item.email}</Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});

//make this component available to the app
export default UserItem;
