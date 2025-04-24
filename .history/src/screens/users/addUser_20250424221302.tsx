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
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const AddUser: React.FC = () => {
  const navigation = useNavigation();
  const [pending, setPending] = useState(false);
  const [name, setName] = useState('kubra');
  const [surname, setSurname] = useState('aygun');
  const [age, setAge] = useState('34');
  const [phone, setPhone] = useState('0555555');
  const [email, setEmail] = useState('test@gmail');
  const [city, setCity] = useState('asd');
  const [job, setJob] = useState('asd');
  const [language, setLanguage] = useState('tr');

  const addUser = async () => {
    setPending(true);
    await firestore()
      .collection('Users')
      .add({
        name: name,
        surname: surname,
        age: age,
        phone: phone,
        email: email,
        city: city,
        job: job,
        language: language,
      })
      .then(() => {
        Alert.alert(
          'ISLEM BASARILI',
          'Kullanici basarili bir sekilde kaydedildi',
          [
            {
              text: 'İptal',
              onPress: () => console.log('Cancel'),
              style: 'cancel',
            },
            {
              text: 'Tamam',
              onPress: () => navigation.goBack(),
            },
          ],
        );
      })

      .finally(() => {
        setPending(false);
      });
  };

  const handleNextStep = () => {
    const form = {
      name,
      surname,
      email,
      age,
      city,
      phone,
      language,
    };
    navigation.navigate('Meslekler', {form: form});
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
        placeholder="Meslek"
        value={job}
        onChangeText={setJob}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        disabled={pending}
        onPress={handleNextStep}
        style={{
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 22}}>
          Kaydet
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
export default AddUser;
