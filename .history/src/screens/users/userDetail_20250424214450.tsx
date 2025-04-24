//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import firestore, {doc} from '@react-native-firebase/firestore';
import Avatar from '../../components/global/avatar';

const UserDetail: React.FC = ({navigation, route}) => {
  const [user, setUser] = useState<object>({});
  const [pending, setPending] = useState<boolean>(false);
  const userId = route.params.userId;

  const getUser = async () => {
    setPending(true);
    const user = await firestore().collection('Users').doc(userId).get();
    setUser(user.data());
    setPending(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {pending ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar name={user?.name} surname={user?.surname} size={100} />

            <Text style={{fontSize: 20, color: 'black', marginTop: 10}}>
              {user?.email}
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 30,
              paddingVertical: 70,
              borderTopWidth: 0.4,
              padding: 20,
              gap: 15,
            }}>
            <Text style={{fontSize: 14, color: 'gray'}}>Ad</Text>
            <Text style={{fontSize: 20, color: 'black'}}>{user?.name}</Text>

            <Text style={{fontSize: 14, color: 'gray'}}>Soyad</Text>
            <Text style={{fontSize: 20, color: 'black'}}>{user?.surname}</Text>

            <Text style={{fontSize: 14, color: 'gray'}}>Yaş</Text>
            <Text style={{fontSize: 20, color: 'black'}}>{user?.age}</Text>

            <Text style={{fontSize: 14, color: 'gray'}}>Şehir</Text>
            <Text style={{fontSize: 20, color: 'black'}}>{user?.city}</Text>

            <Text style={{fontSize: 14, color: 'gray'}}>Telefon</Text>
            <Text style={{fontSize: 20, color: 'black'}}>{user?.phone}</Text>

            <Text style={{fontSize: 14, color: 'gray'}}>Dil</Text>
            <Text style={{fontSize: 20, color: 'black'}}>{user?.language}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default UserDetail;
