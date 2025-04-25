//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {AddCircle, LoginCurve, UserAdd} from 'iconsax-react-native';
import auth from '@react-native-firebase/auth';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState('serhat2@gmail.com');
  const [password, setPassword] = useState('123456');

  const handleRegister = () => {
    setPending(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'İŞLEM BAŞARILI',
          'Kullanıcı başarılı bir şekilde oluşturuldu.',
          [
            {
              text: 'İptal',
              onPress: () => console.log('Cancel'),
              style: 'cancel',
            },
            {
              text: 'Tamam',
              onPress: () => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Giriş Yap'}],
                  }),
                );
              },
            },
          ],
        );
      })
      .catch(error => {
        console.log('Hata', error);
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert(
            'İŞLEM BAŞARILI',
            'Kullanıcı başarılı bir şekilde oluşturuldu.',
            [
              {
                text: 'İptal',
                onPress: () => console.log('Cancel'),
                style: 'cancel',
              },
              {
                text: 'Tamam',
                onPress: () => {
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{name: 'Giriş Yap'}],
                    }),
                  );
                },
              },
            ],
          );
        }

        console.error(error);
      })
      .finally(() => {
        setPending(false);
      });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <UserAdd size={100} color="#15B392" />
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
        disabled={pending}
        onPress={handleRegister}
        style={{
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#3D90D7',
            fontSize: 22,
            marginVertical: 20,
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
export default SignUp;
