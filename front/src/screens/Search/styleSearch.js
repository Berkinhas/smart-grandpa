import { StyleSheet } from 'react-native';

const styleSearch = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 64,
    backgroundColor: '#9370DB',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  noJobsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noJobsText: {
    fontSize: 20,
    color: '#333333',
  },
  jobsContainer: {
    paddingBottom: 20,
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoContainer: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',

	},
	jobDetailsContainer: {
	flex: 1,
	justifyContent: 'center',
	},
	jobTitle: {
	fontSize: 16,
	fontWeight: 'bold',
	marginBottom: 4,
	color: '#333',
	},
	company: {
	fontSize: 14,
	color: '#666',
	marginBottom: 4,
	},
	location: {
	fontSize: 14,
	color: '#666',
	marginBottom: 4,
	},
	applyButtonContainer: {
	width: 80,
	height: 32,
	borderRadius: 16,
	backgroundColor: '#0077b5',
	alignItems: 'center',
	justifyContent: 'center',
	},
	applyButtonText: {
	color: '#fff',
	fontSize: 14,
	fontWeight: 'bold',
	},
	noJobContainer: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	},
	noJobText: {
	fontSize: 20,
	fontWeight: 'bold',
	color: '#333',
	},


})

  export default styleSearch;
