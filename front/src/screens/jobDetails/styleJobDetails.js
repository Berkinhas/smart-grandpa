import { StyleSheet } from 'react-native';

const styleJob = StyleSheet.create({
 container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    
    height: 100,
    paddingVertical: 8,
    backgroundColor: '#6E54A3'
  },
  headerTitle: {
    top: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconback: {
  	top: 20,
  	left: 20,
  
  },
  content: {
    top: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16
  },
  employerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 30,
  },
  jobName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    left: -40
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  placeholder: {
    fontSize: 14,
    color: '#888',
  },
  detailsText: {
    fontSize: 17.5,
  },
  detailsContainer: {
paddingTop: 20,  
flexDirection: 'column',
alignItems: 'flex-start',
paddingLeft: 16,
paddingRight: 16,
paddingBottom: 32,
backgroundColor: '#FFF',

},
headerContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
backgroundColor: '#FFF',
},
backButton: {
width: 24,
height: 24,
resizeMode: 'contain',
},
titleContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 16,
},
titleText: {
fontSize: 25,
fontWeight: 'bold',
marginLeft: 16,
},
detailContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 8,
},
detailIcon: {
width: 20,
height: 20,
marginRight: 8,
resizeMode: 'contain',
tintColor: '#555',
},
detailText: {
fontSize: 16,
},
applyButton: {
backgroundColor: '#9370DB',
width: '100%',
height: 56,
borderRadius: 10,
justifyContent: 'center',
alignItems: 'center',
marginBottom: 50,

},
applyButtonText: {
color: '#FFF',
fontWeight: 'bold',
fontSize: 18,

},
});
  export default styleJob;
