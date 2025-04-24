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
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Avatar name={user?.name} surname={user?.surname} />
            <View>
              <Avatar name={user?.name} surname={user?.surname} />
            </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default UserDetail;
