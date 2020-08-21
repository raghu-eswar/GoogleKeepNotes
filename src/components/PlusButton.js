import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";

export default function PlusButton(props) {

  return (
    <Button
      type="outline"
      buttonStyle={style.buttonStyle}
      containerStyle={style.containerStyle}
      icon={<Icon name="plus" size={50} color="black" />}
      {...props}
    />
  );
}

const style = StyleSheet.create({
    buttonStyle:{
        backgroundColor: "transparent",
        padding: 0,
      },
      containerStyle:{
        position: "absolute",
        right: 30,
        bottom: 120,
        width: 50,
        borderRadius: 50,
      },
  });
