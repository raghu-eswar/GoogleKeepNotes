import React, { useState } from "react";
import { AsyncStorage } from 'react-native';  
import { Input } from "react-native-elements";
import Button from "../components/Button";
import { emailValidator, passwordValidator } from "../validations/inputValidations";
import { Container } from "../commons/styledComponents/styled.components";
import * as Styled from "../styles/login.styles";
import { logIn } from '../service/userServices';

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
    if (userNameError) (emailValidator(userName))? setUserNameError(""):setUserNameError("invalied User Name");
  };
  const updatePassword = (password) => {
    setPassword(password);
    if (passwordError) (passwordValidator(password))? setPasswordError(""):setPasswordError("invalied Password");
  };

  const validateUser = () => {
    if(emailValidator(userName) &&  passwordValidator(password)) {
      logIn({ email: userName,
              password: password,}
            ).then(response=> {if(response.status === 200) AsyncStorage.setItem("user", JSON.stringify({token: response.data.id,
                                                                                                        firstName: response.data.firstName,
                                                                                                        lastName: response.data.lastName,
                                                                                                        email: response.data.email,
                                                                                                        imageUri: response.data.imageUrl}))
                                navigation.navigate("Home")})
            .catch(error=> {if(error.response.data.error.code === "LOGIN_FAILED") setPasswordError("invalied username or password")})
    }
  }

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
          onBlur={() => {if(!emailValidator(userName)) setUserNameError("invalied User Name")}}
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
          onBlur={() => {if(!passwordValidator(password)) setPasswordError("invalied Password")}}
        />
        <Styled.Buttons>
          <Button title="Log in" style={Styled.styles.loginButton} onPress={validateUser}/>
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
