//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType';
import {convertFullName} from '../../utils/function';
type Props = RouteType<'userItem'>;
// create a component
const UserItem: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{item.age}</Text>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Text>{convertFullName(item.name, item.surname)}</Text>
      </View>
    </View>
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
