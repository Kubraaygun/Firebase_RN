import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Users from '../screens/users';
import UserDetail from '../screens/users/userDetail';
import {Add, AddCircle, Bag2} from 'iconsax-react-native';

const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Pressable>
              <Add size="32" color="#555555" variant="Outline" />
              <Bag2 size="35" color="#d9e3f0" variant="Outline" />
            </Pressable>
          </View>
        ),
      })}>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

export default MainRouter;
