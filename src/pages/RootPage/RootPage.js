import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './RootPage.styles';
import UserCard from '../../components/UserCard';

const RootPage = ({ navigation }) => {
  const url = 'https://dummyjson.com/users';
  const { data, error, loading } = useFetch(url);
  const usersData = data.users;

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

  return (
    <View>
      <FlatList
        style={styles.flatlist}
        numColumns={2}
        data={usersData}
        renderItem={renderUsers}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default RootPage;
