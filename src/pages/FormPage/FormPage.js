import { Button, TextInput, View, Text } from 'react-native';
import React from 'react';
import styles from './FormPage.styles';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/users';

const FormPage = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ imageURL: '', username: '', age: '' }}
      onSubmit={(values) => {
        dispatch(addUser(values));
        navigation.navigate('Users');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Image URL"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={handleChange('imageURL')}
            onBlur={handleBlur('imageURL')}
            value={values.imageURL}
          />
          <TextInput
            placeholder="Username"
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
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
