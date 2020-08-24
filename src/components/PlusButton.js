import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";

export default function PlusButton(props) {
  return (
    <Button
      buttonStyle={style.buttonStyle}
      containerStyle={style.contentStyle}
      icon={<Icon name="plus" size={50} color="black" />}
      {...props}
    />
  );
}

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    padding: 0,
  },
  contentStyle: {
    backgroundColor: "white",
    width: 50,
    borderRadius: 25,
    elevation: 10,
    transform: [{ rotate: "45deg" }],
  },
});
