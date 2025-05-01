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
  const [users, setUsers] = useState<any[]>([]);
  const [pending, setPending] = useState<boolean>(false);

  // Verileri almak için kullanılan fonksiyon
  const getUsers = async () => {
    setPending(true);
    const usersSnapshot = await firestore()
      .collection('Users')
      .where('age', '>=', 18)
      .limit(20)
      .get();
    const data = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data);
    setPending(false);
  };

  // Silme işlemi fonksiyonu
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
    // İlk kullanıcıları getirmek için
    getUsers();

    const unsubscribe = firestore()
      .collection('Users')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(data); // Gerçek zamanlı veri güncellemesi
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
                handleChange={() => getUsers()} // Güncel verileri almak için
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
