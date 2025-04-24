//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const JobItem: React.FC = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container}>
      <View></View>
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 0.5,
          flex: 1,
          borderColor: 'gray',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 25}}>{item.title}</Text>

        <Text style={{fontSize: 15, color: 'gray'}}>{item.sub}</Text>
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
export default JobItem;
