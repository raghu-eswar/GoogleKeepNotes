import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "react-native-elements";
import { styles } from "../styles/forgotPassword.styles";
import Button from "../components/Button";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.content} behavior="position">
        <Text style={styles.message}>Please enter your registered email </Text>
        <Input
          containerStyle={styles.containerStyle}
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          onChangeText={(email) => setEmail(email)}
        />
        <View style={styles.buttons}>
          <Button title="Confirm" style={styles.confirmButton} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
