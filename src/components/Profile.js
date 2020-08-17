import React from "react";
import { View, Text} from "react-native";
import ProfileImage from "./ProfileImage";
import styled from 'styled-components/native';

const Container = styled(View) `
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  padding-bottom: 3%;
`
const TestField = styled(Text) `
  font-size: ${props=> props.fontSize};
  margin: 2px;
`

export default function Profile(props) {
  return (
    <Container>
      <ProfileImage title={props.user.email.charAt(0).toUpperCase()} profileImageUri={props.user.imageUri} size='xlarge'/>
    <TestField fontSize={"20px"}>{`${props.user.firstName} ${props.user.lastName}`}</TestField>
    <TestField fontSize={"15px"}>{props.user.email}</TestField>
    </Container>
  );
}
