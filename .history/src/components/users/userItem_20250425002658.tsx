//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {convertFullName} from '../../utils/function';
import Avatar from '../global/avatar';
import {useNavigation} from '@react-navigation/native';
import {Edit, Edit2, Trash} from 'iconsax-react-native';
import firestore from '@react-native-firebase/firestore';

const UserItem: React.FC = ({item}) => {
  const navigation = useNavigation();
  const deleteUser = async () => {
    await firestore()
      .collection('Users')
      .add({
        name: form.name,
        surname: form.surname,
        age: form.age,
        phone: form.phone,
        email: form.email,
        city: form.city,
        job: item,
        language: form.language,
      })
      .then(() => {
        Alert.alert('İŞLEM BAŞARILI', 'Kullanıcı Kaydedildi.', [
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
        ]);
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
          <Edit2 size={20} color="#1DCD9F" variant="Bold" />
        </Pressable>
        <Pressable>
          <Trash size={20} color="#F7374F" variant="Bold" />
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
