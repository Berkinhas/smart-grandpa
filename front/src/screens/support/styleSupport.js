import { StyleSheet } from 'react-native';

const styleSupport = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  supportIcon: {
    alignSelf: 'center',
    top: 20,
    paddingBottom: 0,
  },
  titleContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9370DB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  feedbackContainer: {
    top: 80,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  feedbackLabel: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  feedbackInput: {
    height: 120,
    textAlignVertical: 'top',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#9370DB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default styleSupport;