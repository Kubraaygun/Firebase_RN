import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import UserItem from '../../components/users/userItem';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState<boolean>(false);

  const getUsers = async () => {
    setPending(true);
    const users = await firestore()
      .collection('Users')
      .where('age', '>=', 18)
      .limit(20)
      .get();
    const data = users.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data);
    setPending(false);
  };

  const handleDeleteUser = async (userId: string) => {
    setPending(true);
    try {
      // Firestore'dan kullanıcıyı sil
      await firestore().collection('Users').doc(userId).delete();
      // Silinen kullanıcıyı users array'inden çıkar
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Silme hatası:', error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Users')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(data);
      });

    return () => unsubscribe(); // Cleanup listener on unmount
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
            ListEmptyComponent={<Text>Henüz Kullanıcı Eklenmedi.</Text>}
            data={users}
            renderItem={({item}) => (
              <UserItem
                handleChange={() => getUsers()}
                handleDelete={() => handleDeleteUser(item.id)} // Silme işlevi
                item={item}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
});

export default Users;
