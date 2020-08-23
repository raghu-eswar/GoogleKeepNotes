import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";

export default function PlusButton(props) {
  return (
    <View style={style.containerStyle}>
      <Button
        buttonStyle={style.buttonStyle}
        containerStyle={style.contentStyle}
        icon={<Icon name="plus" size={50} color="black" />}
        {...props}
      />
    </View>
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
  containerStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 40,
    borderTopColor: "lightgray",
    borderBottomColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "lightgray",
    left: "80%",
    bottom: "59%",
    width: "16%",
    transform: [{ rotate: "-134deg" }],
  },
});
