import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';

interface StartPage3Props {
  navigation: NavigationProp<any>;
}

const StartPage3: React.FC<StartPage3Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1469536155880-453e70e42829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhpZ2glMjBlbmQlMjBsZWlzdXJlJTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D',
        }}
        style={styles.image}
      />
      <Text style={styles.text}> Start Page 3 </Text>
      <Text style={styles.txt}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, est
        in.{' '}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Root')}
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
  txt: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    color: 'black',
    opacity: 0.5,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
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
    resizeMode: 'cover',
    borderRadius: 100,
    marginBottom: 20,
  },
});

export default StartPage3;
