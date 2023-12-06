// SplashScreen.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to My App!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default SplashScreen;
