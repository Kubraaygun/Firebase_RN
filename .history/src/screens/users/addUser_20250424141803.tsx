//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AddUser: React.FC = () => {
  const [name, setName] = useState('Ali');
  const [surname, setSurname] = useState('Kara');
  const [age, setAge] = useState('34');
  const [phone, setPhone] = useState('0500000000');
  const [email, setEmail] = useState('ali@gmail.com');
  const [city, setCity] = useState('Izmir');
  const [job, setJob] = useState('Teacher');
  const [language, setLanguage] = useState('tr');

  const addUser = async () => {
    await firestore()
      .collection('Users')
      .add({
        name: name,
        surname: surname,
        age: age,
        phone: phone,
        email: email,
        city: city,
        language: language,
      })
      .then(() => {
        console.log('User added!');
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanici Ekle</Text>
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

      <Button title="Kaydet" onPress={addUser} />
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#d9e3f0',
  },
});

//make this component available to the app
export default AddUser;
