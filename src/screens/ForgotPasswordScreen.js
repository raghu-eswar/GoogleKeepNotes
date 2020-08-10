import React, { useState } from 'react';
import { Text, TextInput, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { styles } from '../styles/forgotPassword.styles';
import Button from '../components/Button';

export default function ForgotPasswordScreen() {

const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.content} behavior='position'>
         <Text style={styles.message}>Please enter your registered email </Text>
          <TextInput  style={styles.input} 
                      keyboardType='email-address'
                      placeholder='Email'
                      value={email}
                      onChangeText={(email) => setEmail(email)}/>
          <View style={styles.buttons}>
            <Button title='Confirm' style={styles.confirmButton}/>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}