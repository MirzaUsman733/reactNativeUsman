import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

export default class SocialLinks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Icon name="users" size={30} color="#0d6efd" />
          <Text style={styles.heading}> Your Social Links </Text>
        </View>
        <View>
          <Text style={styles.text}>
            Here you can post your travel blog and promote your travel videos
          </Text>
        </View>
        <View style={styles.linkContainer}>
          <FontAwesome
            name="facebook"
            size={35}
            color="#0d6efd"
            style={styles.link}
          />
          <View style={styles.linkDisplay}>
            <Text style={styles.linkTitle}>Facebook</Text>
            <Text style={styles.linkText}>Limited time paid promotion</Text>
          </View>
        </View>
        <View style={styles.linkContainer}>
          <FontAwesome
            name="instagram"
            size={35}
            color="#0d6efd"
            style={styles.link}
          />
          <View style={styles.linkDisplay}>
            <Text style={styles.linkTitle}>Facebook</Text>
            <Text style={styles.linkText}>Limited time paid promotion</Text>
          </View>
        </View>
        <View style={styles.linkContainer}>
          <FontAwesome
            name="twitter"
            size={35}
            color="#0d6efd"
            style={styles.link}
          />
          <View style={styles.linkDisplay}>
            <Text style={styles.linkTitle}>Facebook</Text>
            <Text style={styles.linkText}>Limited time paid promotion</Text>
          </View>
        </View>
        <View style={styles.linkContainer}>
          <FontAwesome
            name="pinterest"
            size={35}
            color="#0d6efd"
            style={styles.link}
          />
          <View style={styles.linkDisplay}>
            <Text style={styles.linkTitle}>Facebook</Text>
            <Text style={styles.linkText}>Limited time paid promotion</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  title: {
    marginTop: 30,
    flexDirection: 'row',
  },
  heading: {
    marginLeft: 15,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 20,
    fontSize: 18,
  },
    linkContainer: {
      marginVertical: 15,
    minHeight: 80,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  link: {
    backgroundColor: '#E5E5E5',
  },
  linkTitle: {
    fontSize: 20,
  },
    linkDisplay: {
      marginHorizontal: 15,
    },
    linkText: {
        fontSize: 18,
    }
});
