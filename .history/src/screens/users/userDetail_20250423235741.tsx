//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const UserDetail: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState<boolean>(false);
  const userId = route.params.userId;

  const getUser = async () => {
    setPending(true);
    const users = await firestore().collection('Users').get();
    const data = users.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data);
    setPending(false);
  };

  useEffect(() => {
    getUser();
  }, []);
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
