import { StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { View, KeyboardAvoidingView, Text } from "react-native";

export const Content = styled(KeyboardAvoidingView) `
  width: 100%; 
  height: 60%;
  align-items: center;
  justify-content: space-evenly;
`

export const Buttons = styled(View) `
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`

export const Message = styled(Text) `
  align-self: center;
  margin: 5%;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.8px;
  color: #fcb70b;
`

export const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
    width: 300,
    height: 50,
    alignSelf: 'center',
  }, 
  inputContainerStyle: {
    borderBottomColor: '#fccc54',
  }, 
  confirmButton: {
    width: 150,
    height: 40,
    fontSize: 18,
    borderColor:'#ffffff', 
    backgroundColor:'#fccc54', 
    color:'#ffffff',
  },
});