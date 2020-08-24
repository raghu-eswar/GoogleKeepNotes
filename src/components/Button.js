import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function LoginScreen(props) {
  const styles = props.style
    ? StyleSheet.create({
        button: {
          width: props.style.width ? props.style.width : 100,
          height: props.style.height ? props.style.height : 35,
          alignSelf: "center",
          borderColor: props.style.borderColor ? props.style.borderColor : "transparent",
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: props.style.backgroundColor ? props.style.backgroundColor : "transparent",
          borderRadius: props.style.borderRadius? props.style.borderRadius : 0,
        },
        title: {
          color: props.style.color ? props.style.color : "#000000",
          fontSize: props.style.fontSize ? props.style.fontSize : 15,
        },
      })
    : {};

  return (
    <Button
      buttonStyle={styles.button}
      titleStyle={styles.title}
      title={props.title}
      {...props}
    />
  );
}
