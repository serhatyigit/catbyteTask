import { Button, TextInput, View, Text } from 'react-native';
import React from 'react';
import styles from './FormPage.styles';
import { Formik } from 'formik';

const FormPage = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ imageURL: '', name: '', age: '' }}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate('Users');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Image URL"
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={handleChange('imageURL')}
            onBlur={handleBlur('imageURL')}
            value={values.imageURL}
          />
          <TextInput
            placeholder="Name"
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <TextInput
            placeholder="Age"
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}
          />
          <Button onPress={handleSubmit} title="Add User" />
        </View>
      )}
    </Formik>
  );
};

export default FormPage;
