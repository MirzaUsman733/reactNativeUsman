import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';

interface StartPage1Props {
  navigation: NavigationProp<any>;
}

const StartPage1: React.FC<StartPage1Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        //   source={require('')}
        // or
        source={{
          uri: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbCUyMHBsYW58ZW58MHx8MHx8fDA%3D',
        }} // for remote images
        style={styles.image}
      />
      <Text style={styles.text}> Start Page 1 </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('StartPage2')}
        style={[styles.button, {backgroundColor: '#007BFF'}]}>
        <Icon name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
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
  button: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF', // Set your Bootstrap primary color here as well
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 50,
    width: 50,
    borderEndEndRadius: 50,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomEndRadius: 50,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // Optional: resizeMode property to control how the image is resized
    borderEndEndRadius: 100,
    borderTopEndRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomEndRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: 20,
  },
});

export default StartPage1;
