import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>; // Replace 'any' with the type of your navigation params
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Go to Login"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
});
export default Home;
