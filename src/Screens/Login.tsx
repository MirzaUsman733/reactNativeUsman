import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, Alert} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
interface LoginProps {
  navigation: NavigationProp<any>;
}
const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="user"
          size={20}
          color="black"
          style={{marginRight: 10, marginLeft: 10}}
        />
        <TextInput
          placeholder="Email / Phone Number"
          placeholderTextColor="rgba(0, 0, 0, 0.5);"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon
          name="lock"
          size={20}
          color="black"
          style={{marginRight: 10, marginLeft: 10}}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.5);"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>
        Don't have an account{' '}
        <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
          {' '}
          Sign up{' '}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    padding: 1,
    borderEndEndRadius: 100,
    borderTopEndRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomEndRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  buttonContainer: {
    margin: 10,
    width: '40%',
  },
  button: {
    backgroundColor: '#095a55',
    padding: 12,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    marginTop: 40,
    marginBottom: 10,
    fontSize: 30,
    color: '#095a55',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
  },
  link: {
    color: '#095a55',
    textDecorationLine: 'underline',
  },
  input: {
    color: 'black',
  },
});

export default Login;
