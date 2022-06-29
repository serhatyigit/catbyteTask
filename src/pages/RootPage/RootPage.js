import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './RootPage.styles';
import UserCard from '../../components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../store/users';

const RootPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const url = 'https://dummyjson.com/users';
  const { data, error, loading } = useFetch(url);
  const usersData = useSelector((state) => state);

  useEffect(() => {
    if (data.users) {
      dispatch(setUsers(data.users));
    }
  }, [data]);

  const onPressUser = (props) => {
    navigation.navigate('DetailPage', { props });
  };

  const renderUsers = ({ item }) => (
    <UserCard
      onPress={() =>
        onPressUser({
          picture: item.image,
          firstName: item.firstName,
          lastName: item.lastName,
          age: item.age,
          company: item.company,
        })
      }
      username={item.username}
      age={item.age}
      picture={item.image}
    />
  );

  const keyExtractor = (item) => item.id;

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  const openForm = () => {
    navigation.navigate('FormPage');
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        numColumns={2}
        data={usersData}
        renderItem={renderUsers}
        keyExtractor={keyExtractor}
      />
      <View>
        <TouchableOpacity onPress={openForm}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RootPage;
