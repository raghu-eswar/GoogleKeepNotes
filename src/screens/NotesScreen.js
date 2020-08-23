import React, { useState, useEffect, useRef } from "react";
import { View, TouchableWithoutFeedback, Keyboard, AsyncStorage, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Loader from "../components/Loader";
import Note from "../components/Note";
import ImageLoadingOptions from "../components/ImageLoadingOptions";
import ShortNote from "../components/ShortNote";
import { uploadProfileImage } from "../service/userServices";
import { getNotesList } from "../service/notesServices";
import * as Styled from "../styles/notes.style";

export default function NotesScreen({ navigation }) {
  const [highlightSearch, setHighlightSearch] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [displayLoader, setdisplayLoader] = useState(false);
  const [notes, setNotes] = useState([]);
  const refRBSheet = useRef();
  const noteSheet = useRef();

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => {
      let user = JSON.parse(data);
      setUser(user);
      updateNotes(user.token);
    });
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const updateNotes = (token) => {
    getNotesList(token)
      .then((response) => setNotes(response.data.data.data))
      .catch((error) => console.log(error));
  };

  const loadImage = async (option) => {
    try {
      let result;
      const imagePickerOptions = {
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [2, 2],
        quality: 1,
      };
      if (option === "camera")
        result = await ImagePicker.launchCameraAsync(imagePickerOptions);
      if (option === "gallery")
        result = await ImagePicker.launchImageLibraryAsync(imagePickerOptions);
      if (!result.cancelled) {
        refRBSheet.current.close();
        setdisplayLoader(true);
        let filename = result.uri.split("/").pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `${result.type}/${match[1]}` : result.type;
        let formData = new FormData();
        formData.append("file", { uri: result.uri, name: filename, type });
        uploadProfileImage(formData, user.token)
          .then((response) => {
            if (response.status === 200) {
              let imageUrl = response.data.status.imageUrl;
              setUser({ ...user, imageUri: imageUrl });
              setdisplayLoader(false);
              AsyncStorage.setItem(
                "user",
                JSON.stringify({ ...user, imageUri: imageUrl })
              );
            }
          })
          .catch((error) => console.log(error));
      }
    } catch (e) {
      console.log(e);
    }
  };

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
        <View style={Styled.styles.scrollViewStyle}>
          <ScrollView
            style={Styled.styles.scrollViewStyle}
            contentContainerStyle={ Styled.styles.scrollViewContentContainerStyle }>
            <View style={Styled.styles.content}>
              {notes.map((note) => (
                <ShortNote title={note.title} note={note.description} />
              ))}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="none" transparent={true} visible={showProfile}>
        <TouchableWithoutFeedback onPress={() => setShowProfile(false)}>
          <View style={Styled.styles.madalContainer}></View>
        </TouchableWithoutFeedback>
        <View style={Styled.styles.madalConent}>
          <Profile user={user} onPress={() => refRBSheet.current.open()} />
        </View>
      </Modal>
      <ImageLoadingOptions
        refRBSheet={refRBSheet}
        close={() => refRBSheet.current.close()}
        loadCamera={() => loadImage("camera")}
        loadGallery={() => loadImage("gallery")}
      />
      <Loader visible={displayLoader} />
      <Note
        noteSheet={noteSheet}
        note=""
        noteTitle=""
        token={user ? user.token : ""}
        addNote={addNote}
        close={() => noteSheet.current.close()}
      />
    </View>
  );
}
