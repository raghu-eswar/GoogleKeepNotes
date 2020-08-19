import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import Button from "./Button";

const Container = styled(View)`
  background-color: white;
  width: 70%;
  height: 30%;
  align-self: center;
  position: absolute;
  bottom: 10%;
  justify-content: space-evenly;
  border-radius: 20px;
`;

const Title = styled(Text)`
  font-size: 20px;
  align-self: center;
  color: #1a73e8;
  text-transform: capitalize;
`;

const style = StyleSheet.create({
  button: {
    width: 150,
    borderColor: "#1a73e8",
    backgroundColor: "transparent",
    color: "#1a73e8",
    borderRadius: 50,
  },
  cancleButton: {
    width: 120,
    borderColor: "transparent",
    backgroundColor: "#1a73e8",
    color: "#ffffff",
  },
});

export default function ImageLoadingOptions(props) {
  return (
    <Container>
      <Title>select image source</Title>
      <Button
        title="open camera"
        style={style.button}
        onPress={props.loadCamera}
      />
      <Button
        title="open gallery"
        style={style.button}
        onPress={props.loadGallery}
      />
      <Button
        title="cancle"
        style={style.cancleButton}
        onPress={props.setShowImageLoadingOptions}
      />
    </Container>
  );
}
