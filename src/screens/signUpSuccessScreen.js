import React from "react";
import Button from "../components/Button";
import { Container } from "../commons/styledComponents/styled.components";
import * as Styled from "../styles/signUpSuccess.styles";

export default function ForgotPasswordScreen({ navigation }) {

  return (
    <Container>
      <Styled.Content behavior="position">
        <Styled.Message style={Styled.styles.message}>
            registered sucessfully ! ..
        </Styled.Message>
        <Styled.Buttons>
          <Button
            title="Log In"
            style={Styled.styles.loginButton}
            onPress={()=> navigation.navigate("index")}
          />
        </Styled.Buttons>
      </Styled.Content>
    </Container>
  );
}
