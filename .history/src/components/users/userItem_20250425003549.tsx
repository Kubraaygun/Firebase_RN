//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import {convertFullName} from '../../utils/function';
import Avatar from '../global/avatar';
import {useNavigation} from '@react-navigation/native';
import {Edit, Edit2, Trash} from 'iconsax-react-native';
import firestore from '@react-native-firebase/firestore';

const UserItem: React.FC = ({item, deleteUser}) => {
  const navigation = useNavigation();
  const deleteUser = async () => {
    await firestore()
      .collection('Users')
      .doc(item.id)
      .then(() => {
        Alert.alert(
          'İŞLEM BAŞARILI',
          'Kullanıcı başarılı bir şekilde silindi.',
          [
            {
              text: 'İptal',
              onPress: () => console.log('Cancel'),
              style: 'cancel',
            },
            {
              text: 'Tamam',
              onPress: () =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Kullanıcılar'}],
                  }),
                ),
            },
          ],
        );
      });
  };
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Kullanıcı Bilgileri', {userId: item.id})
      }
      style={styles.container}>
      <View>
        <View>
          <Avatar name={item?.name} surname={item?.surname} />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 0.5,
          flex: 1,
          borderColor: 'gray',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 25}}>
          {convertFullName(item.name, item.surname)}
        </Text>

        <Text style={{fontSize: 15, color: 'gray'}}>{item.email}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          minWidth: 70,
          justifyContent: 'space-around',
        }}>
        <Pressable
          onPress={() =>
            navigation.navigate('Kullanıcı Güncelle', {userInfo: item})
          }>
          <Edit2 size={22} color="#15B392" />
        </Pressable>
        <Pressable onPress={() => deleteUser()}>
          <Trash size={22} color="#FF0B55" />
        </Pressable>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
});

//make this component available to the app
export default UserItem;
