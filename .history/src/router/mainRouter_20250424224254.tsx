import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Users from '../screens/users';
import UserDetail from '../screens/users/userDetail';
import {Add, AddCircle, Bag2, ColorSwatch} from 'iconsax-react-native';
import AddUser from '../screens/users/addUser';
import Jobs from '../screens/jobs';

const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation, route}) => ({
          headerRight: () => (
            <Pressable
              style={{}}
              onPress={() => navigation.navigate('Kullanıcı Ekle')}>
              <AddCircle size="32" color="#37d67a" variant="Bold" />
            </Pressable>
          ),
        })}
        name="Kullanıcılar"
        component={Users}
      />
      <Stack.Screen
        options={{
          headerTintColor: '#A6D6D6', // geri ok rengi
          headerTitleStyle: {color: 'black'}, // başlık rengi
        }}
        name="Kullanıcı Bilgileri"
        component={UserDetail}
      />
      <Stack.Screen name="Kullanıcı Ekle" component={AddUser} />
      <Stack.Screen name="Meslekler" component={Jobs} />
    </Stack.Navigator>
  );
};

export default MainRouter;
