//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {convertFullName} from '../../utils/function';
import Avatar from '../global/avatar';
import {useNavigation} from '@react-navigation/native';

const UserItem: React.FC = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('UserDetail', {userId: item.id})}
      style={styles.container}>
      <View>
        <Text style={{fontSize: 28}}>
          <Avatar name={item?.name} surname={item?.surname} />
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 0.5,
          flex: 1,
          borderColor: 'gray',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 25}}>
          {convertFullName(item.name, item.surname)}
        </Text>

        <Text style={{fontSize: 15, color: 'gray'}}>{item.email}</Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
});

//make this component available to the app
export default UserItem;
