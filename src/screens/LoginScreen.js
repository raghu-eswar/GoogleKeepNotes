import React, { useState } from 'react';
import { TextInput, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../styles/login.styles';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loadSignUpScreen = () => {
    navigation.navigate('SignUp')
  }

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.content} behavior='position'>
          <Icon name="unlock-alt" size={100} style={styles.icon} />
          <TextInput  style={styles.input} 
                      keyboardType='email-address' 
                      placeholder='User Name' 
                      value={userName}
                      onChangeText={(userName) => setUserName(userName)} />
          <TextInput  style={styles.input} 
                      secureTextEntry={true}
                      placeholder='Password'
                      value={password} 
                      onChangeText={(password) => setPassword(password)}/>
          <View style={styles.buttons}>
            <Button title='Log in' style={styles.loginButton}/>
            <Button title='Sign Up' style={styles.signUpButton} onPress={loadSignUpScreen}/>
          </View>
          <View style={styles.buttons}>
            <Button title='Forgot password ?' style={styles.forgotButton}/>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}