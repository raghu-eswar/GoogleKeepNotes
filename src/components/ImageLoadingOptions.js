import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import Button from "./Button";
import RBSheet from "react-native-raw-bottom-sheet";

const Title = styled(Text)`
  font-size: 20px;
  align-self: center;
  color: #1a73e8;
  text-transform: capitalize;
`;

const style = StyleSheet.create({
  rbSheetContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '35%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
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
    <RBSheet
        ref={props.refRBSheet}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container: style.rbSheetContainer,
        }}
      >
      <Title>upload image</Title>
      <Button
        title="camera"
        style={style.button}
        onPress={props.loadCamera}
      />
      <Button
        title="gallery"
        style={style.button}
        onPress={props.loadGallery}
      />
      <Button
        title="cancel"
        style={style.cancleButton}
        onPress={props.close}
      />
    </RBSheet>
  );
}
