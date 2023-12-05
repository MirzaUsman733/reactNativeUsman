import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Tabs/Home';
import Contact from '../Tabs/Contact';
import About from '../Tabs/About';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="About" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
}
