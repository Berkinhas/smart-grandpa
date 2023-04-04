import { StyleSheet } from 'react-native';

const styleProfile = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    
  },
  header: {
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    paddingHorizontal: 20,
    width: 500,
    alignSelf: 'center',
    top: -75,
    paddingVertical: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    top: 200,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    top: 200,
    left: 140,
  },
  idade: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    top: 230,
    left: 220,
  },
  location: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    top: 170,
    left: 170,
  },
  documentContainer: {
    top: 30,
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },

  documentText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  documentName: {
    fontSize: 16,
    marginBottom: 10,
  },

  updateButton: {
    backgroundColor: '#9c27b0',
    borderRadius: 10,
    padding: 10,
  },

  updateText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  
    })
  export default styleProfile;
