import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "flex-start",
  },
  content: {
    flex: 1, 
    width: "100%" 
  },
  madalContainer: {
    width:'100%', 
    height: '100%', 
    backgroundColor: 'black', 
    opacity: 0.4,
  },
  madalConent: {
    width:'90%', 
    height: '40%', 
    position: 'absolute', 
    top: '15%', 
    alignSelf: 'center', 
    elevation: 5,
  },
});
