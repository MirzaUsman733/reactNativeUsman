import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface LoginProps {}

export class Login extends Component<LoginProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Login </Text>
      </View>
    );
  }
}

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

export default Login;
