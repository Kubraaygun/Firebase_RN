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
import {LoginCurve, UserAdd} from 'iconsax-react-native';
import auth from '@react-native-firebase/auth';
import {getApp} from '@react-native-firebase/app';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState('serhat@gmail.com');
  const [password, setPassword] = useState('123456');

  const handleLogin = () => {
    auth(getApp())
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Giriş Başarılı');
      })
      .catch(error => {
        console.log('Hata', error);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
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
        <LoginCurve size={100} color="#15B392" />
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
        onPress={handleLogin}
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
        onPress={handleLogin}
        style={{
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
    paddingTop: 80,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#F8F9FA',
  },
  button: {
    backgroundColor: '#A6AEBF',
  },
});

//make this component available to the app
export default SignIn;
