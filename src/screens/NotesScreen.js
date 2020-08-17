import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, Keyboard, AsyncStorage } from "react-native";
import Header from "../components/Header";
import * as Styled from "../styles/notes.style";

export default function NotesScreen({ navigation }) {
  const [highlightSearch, setHighlightSearch] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => setUser(JSON.parse(data)));
  }, []);

  return (
    <View style={Styled.styles.container}>
      <Header
        title={user ? user.email.charAt(0).toUpperCase() : ""}
        profileImageUri={user ? user.imageUri : ""}
        openDrawer={navigation.openDrawer}
        setHighlightSearch={setHighlightSearch}
        highlightSearch={highlightSearch}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setHighlightSearch(false);
        }}
      >
        <View style={Styled.styles.content}></View>
      </TouchableWithoutFeedback>
    </View>
  );
}
