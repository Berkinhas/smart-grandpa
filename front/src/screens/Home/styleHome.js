import { StyleSheet } from 'react-native';

const styleHome = StyleSheet.create({
   background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 20,
    marginBottom: 30,
  },
  healthIcon: {
    width: 120,
    height: 120,
  },
  messageText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  arrowIcon: {
    width: '80%',
    color: '#FFF'
  },
  
       })
  export default styleHome;
