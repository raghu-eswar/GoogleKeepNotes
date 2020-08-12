import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import { styles } from "../styles/signUp.styles";
import Button from "../components/Button";
import { emailValidator, passwordValidator, nameValidator } from '../service/validations'

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");

  const updateFirstName = (firstName) => {
    setFirstName(firstName)
    if (firstNameError) 
      nameValidator(firstName, setFirstNameError)
  };
  
  const updateLastName = (lastName) => {
    setLastName(lastName)
    if (lastNameError) 
      nameValidator(lastName, setLastNameError)
  };
  const updateEmail = (email) => {
    setEmail(email)
    if (emailError) 
      emailValidator(email, setEmailError)
  };
  const updatePassword = (password) => {
    setPassword(password)
    if (passwordError) 
      passwordValidator(password, setPasswordError)
  };
  const updateConfirmPassword = (password) => {
    setConfirmPassword(password)
    if (passwordMismatchError) 
      verifyPassword()
  };
  const verifyPassword = () => {
    if (password !== confirmPassword) setPasswordMismatchError('password not matching')
    else setPasswordMismatchError('')
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Input
          containerStyle={styles.containerStyle}
          placeholder="First Name"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={firstName}
          errorMessage={firstNameError}
          onChangeText={(firstName) => updateFirstName(firstName)}
          onBlur={() => nameValidator(firstName, setFirstNameError)}
        />
        <Input
          containerStyle={styles.containerStyle}
          placeholder="Last Name"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={lastName}
          errorMessage={lastNameError}
          onChangeText={(lastName) => updateLastName(lastName)}
          onBlur={() => nameValidator(lastName, setLastNameError)}
        />
        <Input
          containerStyle={styles.containerStyle}
          keyboardType="email-address"
          placeholder="Email"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={email}
          errorMessage={emailError}
          onChangeText={(email) => updateEmail(email)}
          onBlur={() => emailValidator(email, setEmailError)}
        />
        <Input
          containerStyle={styles.containerStyle}
          secureTextEntry={true}
          placeholder="Password"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={password}
          errorMessage={passwordError}
          onChangeText={(password) => updatePassword(password)}
          onBlur={() => passwordValidator(password, setPasswordError)}
        />
        <Input
          containerStyle={styles.containerStyle}
          placeholder="Confirm Password"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={confirmPassword}
          errorMessage={passwordMismatchError}
          onChangeText={(confirmPassword) => updateConfirmPassword(confirmPassword)}
          onBlur={() => verifyPassword()}
        />
         <View style={styles.buttons}>
          <Button title="Submit" style={styles.submitButton} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
