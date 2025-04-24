//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import firestore, {doc} from '@react-native-firebase/firestore';
import UserItem from '../components/users/userItem';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState<boolean>(false);

  const getUser = async () => {
    setPending(true);
    const users = await firestore().collection('Users').get();
    const data = users.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data);
    setPending(true);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        {pending ? (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <FlatList
            data={users}
            renderItem={({item}) => <UserItem item={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
});

//make this component available to the app
export default Users;
