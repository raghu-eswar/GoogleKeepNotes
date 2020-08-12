import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  content: {
    width: '100%', 
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  message: {
    alignSelf: 'center',
    margin: 20,
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 0.8,
    color: '#fcb70b',
  },
  containerStyle: {
    margin: 10,
    width: 300,
    height: 50,
    alignSelf: 'center',
  }, 
  inputContainerStyle: {
    borderBottomColor: '#fccc54',
  }, 
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
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