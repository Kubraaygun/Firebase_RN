//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

interface Props {}

const AddUser: React.FC<Props> = props => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const addUser = async () => {};
  return (
    <View style={styles.container}>
      <Text>Kullanici Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value="name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="surname"
        value="surname"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value="name"
        onChangeText={setName}
      />
      <Button title="Kaydet" onPress={addUser} />
    </View>
  );
};

AddUser.defaultProps = {};
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
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default AddUser;
