import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Users from '../screens/users';
import UserDetail from '../screens/users/userDetail';
import {AddCircle} from 'iconsax-react-native';

const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        headerRight: () => (
          <View>
            <Add size={25} color="black" variant="Outline" />
          </View>
        ),
      })}>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

export default MainRouter;
