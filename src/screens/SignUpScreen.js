import React, { useState } from "react";
import { Input } from "react-native-elements";
import Button from "../components/Button";
import { emailValidator, passwordValidator, nameValidator } from "../service/validations";
import { Container } from "../commons/styledComponents/styled.components";
import * as Styled from "../styles/signUp.styles";

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
    setFirstName(firstName);
    if (firstNameError) nameValidator(firstName, setFirstNameError);
  };

  const updateLastName = (lastName) => {
    setLastName(lastName);
    if (lastNameError) nameValidator(lastName, setLastNameError);
  };
  const updateEmail = (email) => {
    setEmail(email);
    if (emailError) emailValidator(email, setEmailError);
  };
  const updatePassword = (password) => {
    setPassword(password);
    if (passwordError) passwordValidator(password, setPasswordError);
  };
  const updateConfirmPassword = (password) => {
    setConfirmPassword(password);
    if (passwordMismatchError) verifyPassword();
  };
  const verifyPassword = () => {
    if (password !== confirmPassword) setPasswordMismatchError("password not matching");
    else setPasswordMismatchError("");
  };

  return (
    <Container>
      <Styled.Content>
        <Input
          containerStyle={Styled.styles.containerStyle}
          placeholder="First Name"
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={firstName}
          errorMessage={firstNameError}
          onChangeText={(firstName) => updateFirstName(firstName)}
          onBlur={() => nameValidator(firstName, setFirstNameError)}
        />
        <Input
          containerStyle={Styled.styles.containerStyle}
          placeholder="Last Name"
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={lastName}
          errorMessage={lastNameError}
          onChangeText={(lastName) => updateLastName(lastName)}
          onBlur={() => nameValidator(lastName, setLastNameError)}
        />
        <Input
          containerStyle={Styled.styles.containerStyle}
          keyboardType="email-address"
          placeholder="Email"
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={email}
          errorMessage={emailError}
          onChangeText={(email) => updateEmail(email)}
          onBlur={() => emailValidator(email, setEmailError)}
        />
        <Input
          containerStyle={Styled.styles.containerStyle}
          secureTextEntry={true}
          placeholder="Password"
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={password}
          errorMessage={passwordError}
          onChangeText={(password) => updatePassword(password)}
          onBlur={() => passwordValidator(password, setPasswordError)}
        />
        <Input
          containerStyle={Styled.styles.containerStyle}
          placeholder="Confirm Password"
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={confirmPassword}
          errorMessage={passwordMismatchError}
          onChangeText={(confirmPassword) => updateConfirmPassword(confirmPassword)}
          onBlur={() => verifyPassword()}
        />
        <Styled.Buttons>
          <Button title="Submit" style={Styled.styles.submitButton} />
        </Styled.Buttons>
      </Styled.Content>
    </Container>
  );
}
