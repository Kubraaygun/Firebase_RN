//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firestore, {doc} from '@react-native-firebase/firestore';

const Users: React.FC = () => {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const users = await firestore().collection('Users').get();
    const data = users.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('veriler', data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList />
      </View>
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
  list: {
    flex: 1,
  },
});

//make this component available to the app
export default Users;
