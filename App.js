import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import { styles } from './src/commons/styles/styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={LoginScreen}
        options={{title: 'Welcome', 
                  headerStyle: styles.header,
                  headerTitleStyle: styles.headerTitle,}}/>
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{title: 'Sign Up',
                  headerStyle: styles.header,
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: null,}} />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen} 
        options={{title: 'Forgot Password',
                  headerStyle: styles.header,
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: null,}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

