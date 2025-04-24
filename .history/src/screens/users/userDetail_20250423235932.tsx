//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firestore, {doc} from '@react-native-firebase/firestore';

const UserDetail: React.FC = () => {
  const [user, setUser] = useState({});
  const [pending, setPending] = useState<object>(false);
  const userId = route.params.userId;

  const getUser = async () => {
    setPending(true);
    const users = await firestore().collection('Users').doc(userId).get();
    
    }));
    setUser(data);
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
