import { StyleSheet } from 'react-native';

const styleEditProfile = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },


  editButton: {
  
    backgroundColor: '#8B5FBF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    top: 50,
    right: 30,
  },
  
    editSalvar: {
    backgroundColor: '#8B5FBF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginRight: 16,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    top: -5,
    color: 'white',
    width: 80,
    fontSize: 20,
    left: 50,
  },

  document: {
    top: 380,
    borderRadius: 50,
    
  },

  header: {
    width: 500,
    height: 300,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 50,
    alignSelf: 'center',
    top: -35,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    
  },
  profileImage: {
   alignSelf: 'center',
   height: 150,
   width: 150,
   top: 20,
   borderRadius: 100,
  },
  imageIcon: {
   top: 70,
   left: 250,
  zIndex: 1,
  height: 60,
  width: 60,
  backgroundColor: '#8B5FBF',
  borderRadius: 60,
  color: '#333',
  },
 image: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  name: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  title: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },

  location: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    top: 60,
    alignSelf: 'center',
    width: 300,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  icon: {
    marginRight: 10,
    color: '#757575',
  },

  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#212121',
    fontFamily: 'FiraSans_500Medium',
  },


});

export default styleEditProfile;

