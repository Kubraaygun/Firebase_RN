//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {CommonActions, useNavigation} from '@react-navigation/native';

const JobItem: React.FC = ({item, form}) => {
  const navigation = useNavigation();
  const addUser = async () => {
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
            onPress: () =>{
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'Kullanıcılar'}],
                }),
              ),
          }},
        ]);
      })
      .catch(error => console.log(error));
  };
  return (
    <Pressable onPress={() => addUser()} style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 0.5,
          flex: 1,
          borderColor: 'gray',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 25}}>{item.title}</Text>

        <Text style={{fontSize: 15, color: 'gray'}}>{item.sub}</Text>
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
export default JobItem;
