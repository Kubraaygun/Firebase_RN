//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const JobItem: React.FC = ({item}) => {
  const navigation = useNavigation();
  const addUser = async ({item, form}) => {
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
      });
  };
  return (
    <Pressable style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 0.5,
          flex: 1,
          borderColor: 'gray',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 25}}>{item.title}</Text>

        <Text style={{fontSize: 15, color: 'gray'}}>{item.sub}</Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
});

//make this component available to the app
export default JobItem;
