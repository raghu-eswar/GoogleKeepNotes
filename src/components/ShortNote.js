import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ShortNote(props) {
    
  const [isGrid, setIsGrid] = useState(props.gridLayout)
  useEffect(() => setIsGrid(props.gridLayout), [props.gridLayout]);

  const style = StyleSheet.create({
    container: {
      width: isGrid ?"45%": "95%",
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

