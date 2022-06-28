import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 0.5,
    width: Dimensions.get('window').width / 2.2,
    height: 250,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 2.5,
    height: 225,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
