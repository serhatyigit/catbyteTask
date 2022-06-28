import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './DetailPage.styles';

const DetailPAge = ({ route }) => {
  const { picture, firstName, lastName, age, company } = route.params.props;

  console.log(company);

  return (
    <View style={styles.container}>
      <Image source={{ uri: picture }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>{`Name : ${firstName}`}</Text>
        <Text style={styles.text}>{`Last Name : ${lastName}`}</Text>
        <Text style={styles.text}>{`Age : ${age}`}</Text>
        <Text style={styles.text}>{`Company Adress:`}</Text>
        <Text style={styles.text}>{company.address.address}</Text>
        <Text style={styles.text}>{company.address.postalCode}</Text>
        <Text style={styles.text}>{company.address.state}</Text>
      </View>
    </View>
  );
};

export default DetailPAge;
