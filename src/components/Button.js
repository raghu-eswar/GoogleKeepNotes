import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet} from 'react-native';

export default function LoginScreen(props) {

    const styles = (props.style)? StyleSheet.create({
        button: {
            width: (props.style.width)? props.style.width : 100,
            height: (props.style.height)? props.style.height : 35,
            alignSelf: 'center',
            borderColor: (props.style.borderColor)? props.style.borderColor :'transparent',
            borderWidth: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (props.style.backgroundColor)? props.style.backgroundColor :'transparent',
        },
        title: {
            color: (props.style.color)? props.style.color : '#000000',
            fontSize: (props.style.fontSize)? props.style.fontSize : 15,
        }
    }):{}

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>{(props.title)? props.title : 'Botton'}</Text>
        </TouchableOpacity>
    );
}