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
    <View style={styles.input}>
      <Text>Kullanici Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value="name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.surname}
        placeholder="Ad"
        value="name"
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default AddUser;
