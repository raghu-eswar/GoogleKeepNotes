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
    marginTop: '20%',
  },
  input: {
    margin: 10,
    width: 250,
    height: 50,
    borderColor: '#fdd36c',
    borderWidth: 2,
    borderRadius: 50,
    textAlign: 'center',
    alignSelf: 'center',
  },  
  submitButton: {
    width: 125,
    height: 40,
    borderColor:'#ffffff', 
    backgroundColor:'#fccc54', 
    color:'#ffffff',
    fontSize: 18,
  },
});