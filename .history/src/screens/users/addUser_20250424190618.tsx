//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AddUser: React.FC = () => {
  const [pending, setPending] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [job, setJob] = useState('');
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
        Alert.alert('ISLEM BASARILI');
      })

      .finally(() => {
        setPending(false);
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
        placeholder="Şehir"
        value={job}
        onChangeText={setJob}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon"
        value={phone}
        onChangeText={setPhone}
      />

      <Button disabled={pending} title="Kaydet" onPress={addUser} />
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
