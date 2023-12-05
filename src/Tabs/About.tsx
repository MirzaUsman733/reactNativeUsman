import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AboutProps {}

export class About extends Component<AboutProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> About </Text>
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

export default About;
