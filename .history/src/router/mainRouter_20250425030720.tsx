import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Pressable, Alert} from 'react-native';
import Users from '../screens/users';
import UserDetail from '../screens/users/userDetail';
import {AddCircle, Logout} from 'iconsax-react-native';
import AddUser from '../screens/users/addUser';
import Jobs from '../screens/jobs';
import UpdateUser from '../screens/users/updateUser';
import SignIn from '../screens/auth/signIn';
import SignUp from '../screens/auth/signUp';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('Çıkış Yapıldı'));
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTintColor: '#3D90D7', // geri ok rengi
          headerTitleStyle: {color: 'black'}, // başlık rengi
        }}
        name="Giriş Yap"
        component={SignIn}
      />

      <Stack.Screen
        options={{
          headerTintColor: '#3D90D7', // geri ok rengi
          headerTitleStyle: {color: 'black'}, // başlık rengi
        }}
        name="Kayıt Ol"
        component={SignUp}
      />
      <Stack.Screen
        options={({navigation, route}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row', paddingRight: 20, gap: 5}}>
              <Pressable
                style={{padding: 0}}
                onPress={() => navigation.navigate('Kullanıcı Ekle')}>
                <AddCircle size="32" color="#37d67a" variant="Bold" />
              </Pressable>
              <Pressable style={{padding: 0}} onPress={() => signOut()}>
                <Logout size="32" color="#FF0B55" variant="Bold" />
              </Pressable>
            </View>
          ),
        })}
        name="Kullanıcılar"
        component={Users}
      />
      <Stack.Screen
        options={{
          headerTintColor: '#3D90D7', // geri ok rengi
          headerTitleStyle: {color: 'black'}, // başlık rengi
        }}
        name="Kullanıcı Bilgileri"
        component={UserDetail}
      />
      <Stack.Screen
        options={{
          headerTintColor: '#3D90D7', // geri ok rengi
          headerTitleStyle: {color: 'black'}, // başlık rengi
        }}
        name="Kullanıcı Ekle"
        component={AddUser}
      />
      <Stack.Screen
        options={{
          headerTintColor: '#3D90D7', // geri ok rengi
          headerTitleStyle: {color: 'black'}, // başlık rengi
        }}
        name="Meslekler"
        component={Jobs}
      />

      <Stack.Screen
        options={{
          headerTintColor: '#3D90D7', // geri ok rengi
          headerTitleStyle: {color: 'black'}, // başlık rengi
        }}
        name="Kullanıcı Güncelle"
        component={UpdateUser}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
