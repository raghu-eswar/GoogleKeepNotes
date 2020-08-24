import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
    flex: 1, 
    height: '100%',
    justifyContent: "flex-start",
    backgroundColor: '#ffffff',
  },
  content: {
    height: '100%', 
    width: "100%", 
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  scrollViewStyle: {
    flex: 1,
  },
  scrollViewContentContainerStyle: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    minHeight: '90%'
  },
});
