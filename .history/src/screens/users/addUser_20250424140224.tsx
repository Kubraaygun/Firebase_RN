//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const AddUser: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const addUser = async () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanici Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value=""
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad"
        value=""
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value=""
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Yaş"
        value=""
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Şehir"
        value=""
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value=""
        onChangeText={setName}
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
