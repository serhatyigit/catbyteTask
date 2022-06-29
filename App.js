import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootPage from './src/pages/RootPage';
import DetailPAge from './src/pages/DetailPage';
import FormPage from './src/pages/FormPage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Users"
          component={RootPage}
          options={{
            headerTitleStyle: {
              color: 'blue',
            },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPAge}
          options={{ title: 'User Detail', headerTintColor: 'blue' }}
        />
        <Stack.Screen
          name="FormPage"
          component={FormPage}
          options={{ title: 'Add User Form', headerTintColor: 'blue' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
