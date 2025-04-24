//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [pending, setPending] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

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

      <TouchableOpacity
        onPress={handleNextStep}
        style={{
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#3D90D7',

            fontSize: 22,
            borderBottomColor: '#000',
            borderBottomWidth: 0.3,
          }}>
          Giriş Yap
        </Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', margin: 20}}>
        Henüz bir hesabınız yok
      </Text>
      <TouchableOpacity
        onPress={handleNextStep}
        style={{
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#3D90D7',

            fontSize: 22,
            borderBottomColor: '#000',
            borderBottomWidth: 0.3,
          }}>
          Kayıt Ol
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
export default SignIn;
