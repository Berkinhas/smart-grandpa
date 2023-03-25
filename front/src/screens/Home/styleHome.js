import { StyleSheet } from 'react-native';

import { Animated } from 'react-native';

const pulseAnimation = new Animated.Value(1);

Animated.loop(
  Animated.sequence([
    Animated.timing(pulseAnimation, {
      toValue: 1.2,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(pulseAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }),
  ])
).start();




const styleHome = StyleSheet.create({
   background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    width: 100,
    height: 100,
    borderRadius: 50, // metade da largura e altura do contêiner
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 50, // metade da largura e altura do contêiner
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#FFF',
    borderRadius: 25,
    top: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: pulseAnimation }],
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: '80%',
    color: '#FFF',
    top: -10,
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
buttonText: {
 colorText: "black",
 alignItems: "center",
 left: 10,

},
  buttonContainer: {
    position: 'absolute',
    top: 90,
    right: 20,
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#FFF",
  },
  settingsButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonNotification: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  
       })
  export default styleHome;
