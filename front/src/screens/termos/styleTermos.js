import { StyleSheet } from 'react-native';

const styleTerms = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
    color: '#4d4d4d',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    width: 100,
    height: 40,
  },
});


export default styleTerms;
