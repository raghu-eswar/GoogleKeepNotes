import React from "react";
import { View, Text, Modal } from "react-native";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import * as Progress from "expo-progress";

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
`;
export const LoaderTitle = styled(Text)`
  position: absolute;
  top: 50%;
  align-self: center;
  font-size: 30px;
  color: #fccc54;
`;
const style = StyleSheet.create({
  processBar: {
    position: "absolute",
    top: "60%",
  },
});

export default function Loader(props) {
  return (
    <Modal animationType="none" transparent={true} visible={props.visible}>
      <Container></Container>
      <LoaderTitle>Loading ...</LoaderTitle>
      <Progress.Bar isIndeterminate color="#fccc54" style={style.processBar} />
    </Modal>
  );
}
