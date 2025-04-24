//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore, {doc} from '@react-native-firebase/firestore';

const UpdateUser: React.FC = ({route}) => {
  const navigation = useNavigation();
  const userInfo = route.params.userInfo;

  const [name, setName] = useState(userInfo.name);
  const [surname, setSurname] = useState(userInfo.surname);
  const [age, setAge] = useState(userInfo.age);
  const [phone, setPhone] = useState(userInfo.phone);
  const [email, setEmail] = useState(userInfo.email);
  const [city, setCity] = useState(userInfo.city);
  const [language, setLanguage] = useState('tr');

  const updateUser = async () => {
    await firestore()
      .collection('Users')
      .doc(userInfo.id)
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
        Alert.alert('İŞLEM BAŞARILI !', 'Kullanıcı Kaydedildi.', [
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
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Bilgileri</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Yaş"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Şehir"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefon"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        onPress={updateUser}
        style={{
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#3D90D7',
            fontWeight: 'bold',
            fontSize: 22,
            borderBottomColor: '#000',
            borderBottomWidth: 0.3,
          }}>
          Güncelle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#3D365C',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 70,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#F8F9FA',
  },
  button: {
    backgroundColor: '#A6AEBF',
  },
});

//make this component available to the app
export default UpdateUser;
