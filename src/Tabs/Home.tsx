import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Go to Login"
      />
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate('SocialLinks')}
          color="green"
          title="Go to Social Links"
        />
      </View>
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
  btn: {
    marginTop: 10,
  },
});
export default Home;
