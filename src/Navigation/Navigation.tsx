import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Tabs/Home';
import Contact from '../Tabs/Contact';
import About from '../Tabs/About';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import StartPage1 from '../Screens/StartPage1';
import StartPage2 from '../Screens/StartPage2';
import StartPage3 from '../Screens/StartPage3';
import SocialLinks from '../Screens/SocialLinks';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Root() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {fontSize: 20},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="phone" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="book" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StartPage1"
            component={StartPage1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StartPage2"
            component={StartPage2}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="StartPage3"
            component={StartPage3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: ''}}
          />
          <Stack.Screen
            name="SocialLinks"
            component={SocialLinks}
            options={{title: ''}}
          />
          <Stack.Screen name="Login" component={Login} options={{title: ''}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
