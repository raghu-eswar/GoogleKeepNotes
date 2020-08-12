import { StyleSheet } from "react-native";
import styled from 'styled-components/native';
import { View, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const Content = styled(KeyboardAvoidingView) `
  width: 70%;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  margin-Top: 25%;
`

export const LockIcon = styled(Icon) `
  align-self: center;
  color: #fccc54;
`

export const Buttons = styled(View) `
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`

export const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
    width: 250,
    height: 50,
  },
  inputContainerStyle: {
    borderBottomColor: "#fccc54",
  },
  loginButton: {
    borderColor: "#ffffff",
    backgroundColor: "#fccc54",
    color: "#ffffff",
  },
  signUpButton: {
    borderColor: "#fccc54",
    backgroundColor: "#ffffff",
    color: "#fccc54",
  },
  forgotButton: {
    width: 200,
    color: "#fccc54",
    fontSize: 20,
  },
});
