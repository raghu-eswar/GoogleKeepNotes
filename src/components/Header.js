import React, { useState } from "react";
import { View, Platform, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileImage from "./ProfileImage"

export default function Header(props) {
  const [search, setSearch] = useState("");

  const style = StyleSheet.create({
    header: {
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: "white",
      height: 100,
      width: "100%",
      paddingBottom: "3%",
    },
    content: {
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "white",
      height: "60%",
      width: "90%",
      flexDirection: "row",
      elevation: 5,
    },
    searchBarContainerStyle: {
      width: props.highlightSearch ? "100%" : "50%",
      height: "100%",
      justifyContent: "center",
    } 
  })

  if (props.highlightSearch) {
    return (
      <View style={style.header}>
        <View style={style.content}>
          <SearchBar
            autoFocus
            onCancel={() => props.setHighlightSearch(false)}
            onBlur={() => props.setHighlightSearch(false)}
            onSubmitEditing={() => props.setHighlightSearch(false)}
            platform={Platform.OS}
            containerStyle={style.searchBarContainerStyle}
            placeholder="Type Here..."
            onChangeText={(text) => setSearch(text)}
            value={search}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={style.header}>
      <View style={style.content}>
        <Icon name="menu" size={30} onPress={() => props.openDrawer()}></Icon>
        <SearchBar
          onFocus={() => {props.setHighlightSearch(true)}}
          platform={Platform.OS}
          containerStyle={style.searchBarContainerStyle}
          placeholder="search"
          value={search}
        />
        <Icon
          name={`view-${props.gridLayout ? "list" : "grid"}`}
          size={30}
          onPress={props.setGridLayout}
        ></Icon>
        <ProfileImage title={props.title} profileImageUri={props.profileImageUri} onPress={()=>props.setShowProfile(true)} size={40}/>
      </View>
    </View>
  );
}
