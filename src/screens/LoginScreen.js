import React, { useState } from "react";
import {
  TextInput,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../styles/login.styles";
import Button from "../components/Button";

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loadSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  const loadForgotPasswordScreen = () => {
    navigation.navigate("ForgotPassword");
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
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          onChangeText={(userName) => setUserName(userName)}
        />
        <Input
          containerStyle={styles.containerStyle}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          onChangeText={(password) => setPassword(password)}
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
