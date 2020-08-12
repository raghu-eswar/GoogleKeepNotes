import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  content: {
    width: "70%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
    marginTop: "20%",
  },
  icon: {
    alignSelf: "center",
    color: "#fccc54",
  },
  containerStyle: {
    margin: 10,
    width: 250,
    height: 50,
  },
  inputContainerStyle: {
    borderBottomColor: "#fccc54",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
  },
  loginButton: {
    borderColor: "#ffffff",
    backgroundColor: "#fccc54",
    color: "#ffffff",
  },
  signUpButton: {
    borderColor: "#fccc54",
    backgroundColor: "#ffffff",
    color: "#fccc54",
  },
  forgotButton: {
    width: 200,
    color: "#fccc54",
    fontSize: 20,
  },
});
