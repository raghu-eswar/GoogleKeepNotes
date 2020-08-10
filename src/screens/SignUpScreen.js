import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/signUp.styles';
import Button from '../components/Button'

export default function SignUpScreen() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content} >
            <TextInput  style={styles.input} 
                        placeholder='First Name' 
                        value={firstName}
                        onChangeText={(firstName) => setFirstName(firstName)} />
            <TextInput  style={styles.input} 
                        placeholder='Last Name' 
                        value={lastName}
                        onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput  style={styles.input} 
                        keyboardType='email-address' 
                        placeholder='Email' 
                        value={email}
                        onChangeText={(email) => setEmail(email)} />
            <TextInput  style={styles.input} 
                        secureTextEntry={true}
                        placeholder='Password'
                        value={password} 
                        onChangeText={(password) => setPassword(password)}/>
            <TextInput  style={styles.input} 
                        placeholder='Confirm Password' 
                        value={confirmPassword}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />
            <Button title='Submit' style={styles.submitButton}/>
        </ScrollView> 
    </SafeAreaView>
  );
}