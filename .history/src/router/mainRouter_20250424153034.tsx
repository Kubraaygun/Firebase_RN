import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Users from '../screens/users';
import UserDetail from '../screens/users/userDetail';
import {Add, AddCircle, Bag2} from 'iconsax-react-native';
import AddUser from '../screens/users/addUser';

const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation, route}) => ({
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Pressable onPress={() => navigation.navigate('AddUser')}>
                <Add size="32" color="#555555" variant="Outline" />
              </Pressable>
              <Pressable style={{marginHorizontal: 10}}>
                <Bag2 size="35" color="#555555" variant="Outline" />
              </Pressable>
            </View>
          ),
        })}
        name="Kullanicilar"
        component={Users}
      />
      <Stack.Screen name="Kullanici Detayi" component={UserDetail} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  );
};

export default MainRouter;
