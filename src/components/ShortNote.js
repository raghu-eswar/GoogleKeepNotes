import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ShortNote(props) {
  return (
    <TouchableOpacity style={style.container} onPress={()=> props.openActiveNote(props.note)}>
      <View>
        <Text style={style.title} numberOfLines={1}>
          {props.note.title}
        </Text>
        <Text numberOfLines={4} style={style.note}>
          {props.note.description}
        </Text>
      </View>
    </TouchableOpacity>
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
    borderRadius: 10,
  },
  note: {
    alignSelf: "flex-start",
  },
  title: { height: 30, fontWeight: "700", alignSelf: "flex-start" },
});
