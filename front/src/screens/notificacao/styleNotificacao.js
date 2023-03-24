import { StyleSheet } from 'react-native';

const styleNotificacao = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    
  },
  header: {
    backgroundColor: '#9370DB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 9,
    borderBottomColor: '#F2F2F2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  backButton: {
    marginRight: 16,
  },
  screenTitle: {
    flex: 1,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholderIcon: {
    width: 24,
    height: 24,
  },
  notificationsList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  unreadNotification: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#7B68EE',
  },
  notificationInfo: {
    flex: 1,
    marginLeft: 16,
  },
  notificationTitle: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationMessage: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  notificationDate: {
    color: '#999',
    fontSize: 12,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

  export default styleNotificacao;
