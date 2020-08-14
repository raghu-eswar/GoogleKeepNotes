import React, { useState } from "react";
import { Input } from "react-native-elements";
import Button from "../components/Button";
import { emailValidator } from "../validations/inputValidations";
import { Container } from "../commons/styledComponents/styled.components";
import * as Styled from "../styles/forgotPassword.styles";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const updateEmail = (email) => {
    setEmail(email);
    if (emailError) emailValidator(email, setEmailError);
  };

  return (
    <Container>
      <Styled.Content behavior="position">
        <Styled.Message style={Styled.styles.message}>
          Please enter your registered email
        </Styled.Message>
        <Input
          containerStyle={Styled.styles.containerStyle}
          keyboardType="email-address"
          placeholder="Email"
          inputContainerStyle={Styled.styles.inputContainerStyle}
          placeholderTextColor="#fccc54"
          value={email}
          errorMessage={emailError}
          onChangeText={(email) => updateEmail(email)}
        />
        <Styled.Buttons>
          <Button
            title="Confirm"
            style={Styled.styles.confirmButton}
            onPress={() => emailValidator(email, setEmailError)}
          />
        </Styled.Buttons>
      </Styled.Content>
    </Container>
  );
}
