import React from 'react';
import {
  StyleSheet,
  Text, View,
} from 'react-native';


function App(): JSX.Element {

 

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          usman
        </Text>
      </View>
    </>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
});
export default App;
