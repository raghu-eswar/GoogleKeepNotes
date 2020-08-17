import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, Keyboard, AsyncStorage, Modal } from "react-native";
import Header from "../components/Header";
import Profile from "../components/Profile";
import * as Styled from "../styles/notes.style";

export default function NotesScreen({ navigation }) {
  const [highlightSearch, setHighlightSearch] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => setUser(JSON.parse(data)));
  }, []);

  return (
    <View style={Styled.styles.container}>
      <Header
        title={user ? user.email.charAt(0).toUpperCase() : ""}
        profileImageUri={user ? user.imageUri : ""}
        setShowProfile={setShowProfile}
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
      <Modal
        animationType="none"
        transparent={true}
        visible={showProfile}
        >
          <TouchableWithoutFeedback onPress={()=> setShowProfile(false)}>
              <View style={Styled.styles.madalContainer}></View>
              
          </TouchableWithoutFeedback>
          <View style={Styled.styles.madalConent}>
            <Profile user={user} />
          </View>
            
        </Modal>
    </View>
  );
}
