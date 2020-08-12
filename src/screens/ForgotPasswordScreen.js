import React, { useState } from "react";
import { Text, View, SafeAreaView, KeyboardAvoidingView,
} from "react-native";
import { Input } from "react-native-elements";
import { styles } from "../styles/forgotPassword.styles";
import Button from "../components/Button";
import { emailValidator } from '../service/validations'

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const updateEmail = (email) => {
    setEmail(email)
    if (emailError) 
      emailValidator(email, setEmailError)
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.content} behavior="position">
        <Text style={styles.message}>Please enter your registered email </Text>
        <Input
          containerStyle={styles.containerStyle}
          keyboardType="email-address"
          placeholder="Email"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={email}
          errorMessage={emailError}
          onChangeText={(email) => updateEmail(email)}
        />
        <View style={styles.buttons}>
          <Button title="Confirm" style={styles.confirmButton} onPress={() => emailValidator(email, setEmailError)}/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
