import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import firestore, {doc} from '@react-native-firebase/firestore';
import UserItem from '../../components/users/userItem';
import JobItem from '../../components/jobs/jobItem';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [pending, setPending] = useState<boolean>(false);

  const getJobs: React.FC = async () => {
    setPending(true);
    const jobs = await firestore().collection('jobs').get();
    const data = jobs.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setJobs(data);
    setPending(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        {pending ? (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <FlatList
            ListEmptyComponent={<Text>Henüz Kullanıcı Eklenmedi.</Text>}
            data={jobs}
            renderItem={({item}) => <JobItem item={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
});

//make this component available to the app
export default Jobs;
