import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { styles } from './src/styles/common.styles';

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
    </Stack.Navigator>
  </NavigationContainer>
  );
}

