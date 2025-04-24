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
import {UserAdd} from 'iconsax-react-native';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState('');
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <UserAdd size={100} color="green" />
      </View>
      <Text style={{marginVertical: 5, fontSize: 14, color: 'gray'}}>
        E-mail
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail Bilgisi"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{marginVertical: 5, fontSize: 14, color: 'gray'}}>
        Şifre
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Şifre bilgisi"
        value={password}
        onChangeText={setPassword}
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
        Henüz bir hesabınız yok mu ?
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
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#F8F9FA',
  },
  button: {
    backgroundColor: '#A6AEBF',
  },
});

//make this component available to the app
export default SignIn;
