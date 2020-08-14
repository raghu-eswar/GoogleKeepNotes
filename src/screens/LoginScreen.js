import React, { useState } from "react";
import { Input } from "react-native-elements";
import Button from "../components/Button";
import { emailValidator, passwordValidator } from "../validations/inputValidations";
import { Container } from "../commons/styledComponents/styled.components";
import * as Styled from "../styles/login.styles";

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
    setUserName(userName);
    if (userNameError) emailValidator(userName, setUserNameError);
  };
  const updatePassword = (password) => {
    setPassword(password);
    if (userNameError) passwordValidator(password, setPasswordError);
  };

  return (
    <Container>
      <Styled.Content behavior="position">
        <Styled.LockIcon name="unlock-alt" size={100} />
        <Input
          containerStyle={Styled.styles.containerStyle}
          keyboardType="email-address"
          placeholder="User Name"
          value={userName}
          errorMessage={userNameError}
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          onChangeText={(userName) => updateUserName(userName)}
          onBlur={() => emailValidator(userName, setUserNameError)}
        />
        <Input
          containerStyle={Styled.styles.containerStyle}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          errorMessage={passwordError}
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          onChangeText={(password) => updatePassword(password)}
          onBlur={() => passwordValidator(password, setPasswordError)}
        />
        <Styled.Buttons>
          <Button title="Log in" style={Styled.styles.loginButton} />
          <Button
            title="Sign Up"
            style={Styled.styles.signUpButton}
            onPress={loadSignUpScreen}
          />
        </Styled.Buttons>
        <Styled.Buttons>
          <Button
            title="Forgot password ?"
            style={Styled.styles.forgotButton}
            onPress={loadForgotPasswordScreen}
          />
        </Styled.Buttons>
      </Styled.Content>
    </Container>
  );
}
