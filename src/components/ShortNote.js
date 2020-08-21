import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ShortNote(props) {
  return (
    <View style={style.container}>
      <Text style={style.title} numberOfLines={1}>
        {props.title}
      </Text>
      <Text numberOfLines={4} style={style.note}>
        {props.note}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "45%",
    maxHeight: "20%",
    padding: 8,
    borderWidth: 1,
    borderColor: "lightgray",
    margin: "2%",
  },
  note: {
    alignSelf: "center",
  },
  title: { height: 30, fontWeight: "700", alignSelf: "center" },
});
