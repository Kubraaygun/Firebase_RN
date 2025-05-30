//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {RouteType} from '../routes/RouteType';
type Props = RouteType<'userDetail'>;

// create a component
const UserDetail: React.FC<Props> = ({navigation, route}) => {
  const userId = route.params.userId;
  return (
    <View style={styles.container}>
      <Text>{userId}</Text>
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
export default UserDetail;
