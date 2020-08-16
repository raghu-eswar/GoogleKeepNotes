import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotesScreen from './NotesScreen';

const Drawer = createDrawerNavigator();

export default function ProfileScreen() {

    return (
        <Drawer.Navigator initialRouteName="Notes">
            <Drawer.Screen name="Notes" component={NotesScreen}/>
        </Drawer.Navigator>
    );
}
