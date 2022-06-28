import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './UserCard.styles';

const UserCard = ({ onPress, username, age, picture }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <ImageBackground source={{ uri: picture }} style={styles.image}>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{username}</Text>
            <Text style={styles.text}>,</Text>
            <Text style={styles.text}>{age}</Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default UserCard;
