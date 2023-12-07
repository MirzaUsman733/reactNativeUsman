import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

interface StartPage2Props {
  navigation: NavigationProp<any>;
}

const StartPage2: React.FC<StartPage2Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        //   source={require('')}
        // or
        source={{
          uri: 'https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlnaCUyMGVuZCUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
        }} // for remote images
        style={styles.image}
      />
      <Text style={styles.text}> Start Page 2 </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('StartPage3')}
        style={[styles.button, {backgroundColor: '#007BFF'}]}>
        {/* <Text style={styles.buttonText}>Go to Screen 3</Text> */}
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

export default StartPage2;
