import React from "react";
import { View, StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlusButton from "../components/PlusButton";

export default function BottomMenu(props) {
  return (
    <View style={[style.bottomMenu, { display: props.display ? "flex" : "none" }]}>
      <View style={style.iconContainer}>
        <FontAwesome size={25} name="check-square-o"></FontAwesome>
        <FontAwesome size={25} name="paint-brush"></FontAwesome>
        <FontAwesome size={25} name="microphone"></FontAwesome>
        <FontAwesome size={25} name="image"></FontAwesome>
      </View>
      <View style={style.plusButtonContainer}>
        <PlusButton onPress={props.addNote} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  bottomMenu: {
    flex: 0.09,
    borderTopWidth: 1,
    borderTopColor: "#D3D3D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  plusButtonContainer: {
    padding: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 40,
    borderTopColor: "lightgray",
    borderBottomColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "lightgray",
    right: "30%",
    bottom: "7.3%",
    width: "16%",
    transform: [{ rotate: "-134deg" }],
  },
});
