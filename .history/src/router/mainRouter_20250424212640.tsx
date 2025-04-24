import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Users from '../screens/users';
import UserDetail from '../screens/users/userDetail';
import {Add, AddCircle, Bag2} from 'iconsax-react-native';
import AddUser from '../screens/users/addUser';
import Jobs from '../screens/jobs';

const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation, route}) => ({
          headerRight: () => (
            <View style={{}}>
              <Pressable onPress={() => navigation.navigate('Kullanıcı Ekle')}>
                <Add size="32" color="#555555" variant="Outline" />
              </Pressable>
            </View>
          ),
        })}
        name="Kullanıcılar"
        component={Users}
      />
      <Stack.Screen name="Kullanıcı Bilgileri" component={UserDetail} />
      <Stack.Screen name="Kullanıcı Ekle" component={AddUser} />
      <Stack.Screen name="Meslekler" component={Jobs} />
    </Stack.Navigator>
  );
};

export default MainRouter;
