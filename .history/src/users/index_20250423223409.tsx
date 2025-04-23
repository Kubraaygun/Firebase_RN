//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import firestore, {doc} from '@react-native-firebase/firestore';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const users = await firestore().collection('Users').get();
    const data = users.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList data={users} renderItem={({item}) => <UserItem />} />
      </View>
    </SafeAreaView>
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
