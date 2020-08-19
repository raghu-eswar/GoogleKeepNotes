import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, Keyboard, AsyncStorage, Modal } from "react-native";
import Header from "../components/Header";
import Profile from "../components/Profile";
import * as Styled from "../styles/notes.style";
import * as ImagePicker from "expo-image-picker";
import { uploadProfileImage } from "../service/userServices";
import ImageLoadingOptions from "../components/ImageLoadingOptions";

export default function NotesScreen({ navigation }) {
  const [highlightSearch, setHighlightSearch] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showImageLoadingOptions, setShowImageLoadingOptions] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => setUser(JSON.parse(data)));
  }, []);

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
        let filename = result.uri.split("/").pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `${result.type}/${match[1]}` : result.type;
        let formData = new FormData();
        formData.append("file", { uri: result.uri, name: filename, type });
        uploadProfileImage(formData, user.token)
          .then((response) => {
            if (response.status === 200) {
              let imageUrl = response.data.status.imageUrl
              setUser({ ...user, imageUri:  imageUrl});
              setShowImageLoadingOptions(false);
              AsyncStorage.setItem("user", JSON.stringify({ ...user, imageUri:  imageUrl}));
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
        <View style={Styled.styles.content}></View>
      </TouchableWithoutFeedback>
      <Modal animationType="none" transparent={true} visible={showProfile}>
        <TouchableWithoutFeedback onPress={() => setShowProfile(false)}>
          <View style={Styled.styles.madalContainer}></View>
        </TouchableWithoutFeedback>
        <View style={Styled.styles.madalConent}>
          <Profile
            user={user}
            onPress={() => setShowImageLoadingOptions(true)}
          />
        </View>
      </Modal>
      <Modal animationType="slid" transparent={true} visible={showImageLoadingOptions} >
        <ImageLoadingOptions
          setShowImageLoadingOptions={() => setShowImageLoadingOptions(false)}
          loadCamera={() => loadImage("camera")}
          loadGallery={() => loadImage("gallery")}
        />
      </Modal>
    </View>
  );
}
