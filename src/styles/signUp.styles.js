import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ScrollView, View } from "react-native";

export const Content = styled(ScrollView)`
  width: 100%;
  height: 60%;
  margin-top: 20%;
`;

export const Buttons = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`;

export const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
    width: 250,
    height: 50,
    alignSelf: "center",
  },
  inputContainerStyle: {
    borderBottomColor: "#fccc54",
  },
  submitButton: {
    width: 125,
    height: 40,
    borderColor: "#ffffff",
    backgroundColor: "#fccc54",
    color: "#ffffff",
    fontSize: 18,
  },
});
