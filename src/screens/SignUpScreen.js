import React, { useState } from "react";
import { Input } from "react-native-elements";
import Button from "../components/Button";
import { emailValidator, passwordValidator, nameValidator } from "../validations/inputValidations";
import { Container } from "../commons/styledComponents/styled.components";
import * as Styled from "../styles/signUp.styles";
import { signUp } from '../service/userServices';

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
    if (firstNameError) (nameValidator(firstName))? setFirstNameError(""):setFirstNameError("invalied First Name");
  };

  const updateLastName = (lastName) => {
    setLastName(lastName);
    if (lastNameError) (nameValidator(lastName))? setLastNameError(""):setLastNameError("invalied Last Name");
  };
  const updateEmail = (email) => {
    setEmail(email);
    if (emailError) (emailValidator(email))? setEmailError(""):setEmailError("invalied email");
  };
  const updatePassword = (password) => {
    setPassword(password);
    if (passwordError) (passwordValidator(password))? setPasswordError(""):setPasswordError("invalied Password");
  };
  const updateConfirmPassword = (password) => {
    setConfirmPassword(password);
    if (passwordMismatchError) verifyPassword();
  };
  const verifyPassword = () => {
    if (password !== confirmPassword) {
      setPasswordMismatchError("password not matching");
      return false;
    }
    else {
      setPasswordMismatchError("");
      return true;
    }
  };
  const submit = () => {
    if(nameValidator(lastName, setLastNameError) && nameValidator(lastName, setLastNameError) &&
        emailValidator(email, setEmailError) &&  passwordValidator(password, setPasswordError) &&  verifyPassword()) {
          signUp({firstName: firstName,
                  lastName: lastName,
                  service: "advance",
                  email: email,
                  password: password}
                  ).then(response => console.log(response.data.data.success))
                  .catch((error)=>console.log(error.response.data.error.details.messages.email[0]))
        } 
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
          onBlur={() => {if(!nameValidator(firstName)) setFirstNameError("invalied First Name")}}
        />
        <Input
          containerStyle={Styled.styles.containerStyle}
          placeholder="Last Name"
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={lastName}
          errorMessage={lastNameError}
          onChangeText={(lastName) => updateLastName(lastName)}
          onBlur={() => {if(!nameValidator(lastName)) setLastNameError("invalied Last Name")}}
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
          onBlur={() => {if(!emailValidator(email)) setEmailError("invalied email")}}
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
          onBlur={() => {if(!passwordValidator(password)) setPasswordError("invalied Password")}}
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
          <Button title="Submit" style={Styled.styles.submitButton} onPress={submit}/>
        </Styled.Buttons>
      </Styled.Content>
    </Container>
  );
}
