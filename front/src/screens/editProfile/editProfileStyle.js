import { StyleSheet } from 'react-native';

const styleEditProfile = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    
  },

  buttonContainer: {
    position: 'relative',
    top: 90,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
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
},


  
  
  header: {
    alignItems: 'center',
    paddingTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  contact: {
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  bio: {
    marginTop: 20,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    color: '#555',
  },
  skills: {
    marginTop: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    margin: 5,
  },
  skillText: {
    fontSize: 16,
    color: '#555',
  },
  skillButtonSelected: {
    backgroundColor: '#fd7e14',
    color: '#fff',
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  
    })
  export default styleEditProfile;
