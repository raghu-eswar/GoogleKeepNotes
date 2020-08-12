import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import { styles } from "../styles/signUp.styles";
import Button from "../components/Button";

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Input
          containerStyle={styles.containerStyle}
          placeholder="Last Name"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <Input
          containerStyle={styles.containerStyle}
          keyboardType="email-address"
          placeholder="Email"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          containerStyle={styles.containerStyle}
          secureTextEntry={true}
          placeholder="Password"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Input
          containerStyle={styles.containerStyle}
          placeholder="Confirm Password"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          underlineColorAndroid="transparent"
          value={confirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />
        <Button title="Submit" style={styles.submitButton} />
      </ScrollView>
    </SafeAreaView>
  );
}
