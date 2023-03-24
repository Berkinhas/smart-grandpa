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
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  optionsContainer: {
    marginTop: 32,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 16,
    fontSize: 18,
  },
  modalContainer: {
  backgroundColor: 'white',
  marginHorizontal: 20,
  marginTop: 'auto',
  marginBottom: 'auto',
  borderRadius: 20,
  padding: 20,
  height: '80%',
},
modalContent: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
modalTitle: {
  fontFamily: 'FiraSans_500Medium',
  fontSize: 24,
  marginBottom: 8,
},
modalDescription: {
  fontFamily: 'FiraSans_500Medium',
  fontSize: 16,
  marginBottom: 16,
},
backButton: {
  marginTop: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
backButtonText: {
  fontFamily: 'FiraSans_500Medium',
  fontSize: 16,
  marginLeft: 8,
},
settingsButton: {
    position: 'absolute',
    top: 70,
    right: 20,
    zIndex: 999,
    margin: 20,
    backgroundColor: 'transparent',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
 buttonNotification: {
    position: 'absolute',
    top: 70,
    right: 55,
    zIndex: 999,
    margin: 20,
    backgroundColor: 'transparent',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
 },


  
       })
  export default styleHome;
