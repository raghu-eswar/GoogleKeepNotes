import React, { useState } from "react";
import { View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../styles/login.styles";
import Button from "../components/Button";
import { emailValidator, passwordValidator } from '../service/validations'

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loadSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  const loadForgotPasswordScreen = () => {
    navigation.navigate("ForgotPassword");
  };
  const updateUserName = (userName) => {
    setUserName(userName)
    if (userNameError) 
      emailValidator(userName, setUserNameError)
  };
  const updatePassword = (password) => {
    setPassword(password)
    if (userNameError) 
      passwordValidator(password, setPasswordError)
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.content} behavior="position">
        <Icon name="unlock-alt" size={100} style={styles.icon} />
        <Input
          containerStyle={styles.containerStyle}
          keyboardType="email-address"
          placeholder="User Name"
          value={userName}
          errorMessage={userNameError}
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          onChangeText={(userName) => updateUserName(userName)}
          onBlur={() => emailValidator(userName, setUserNameError)}
        />
        <Input
          containerStyle={styles.containerStyle}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          errorMessage={passwordError}
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          onChangeText={(password) => updatePassword(password)}
          onBlur={() => passwordValidator(password, setPasswordError)}
        />
        <View style={styles.buttons}>
          <Button title="Log in" style={styles.loginButton} />
          <Button
            title="Sign Up"
            style={styles.signUpButton}
            onPress={loadSignUpScreen}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title="Forgot password ?"
            style={styles.forgotButton}
            onPress={loadForgotPasswordScreen}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
