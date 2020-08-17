import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NotesScreen from "./NotesScreen";
import * as Styled from "../styles/profile.style"

const Drawer = createDrawerNavigator();

export default function ProfileScreen() {

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#ffed85",
        labelStyle: {
          color: "#000000",
        },
        itemStyle: Styled.styles.navigatorItemStyle,
        style: Styled.styles.navigatorStyle,
      }}
      initialRouteName="Notes"
    >
      <Drawer.Screen name="Notes" component={NotesScreen} />
    </Drawer.Navigator>
  );
}
