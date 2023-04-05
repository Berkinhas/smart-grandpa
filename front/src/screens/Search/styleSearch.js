import { StyleSheet } from 'react-native';

const styleSearch = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  header: {
    backgroundColor: '#9370DB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    left: 130,
    textAlign: 'center',
  },
   totalJobs: {
    fontSize: 20,
    top: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#555555',
    marginTop: 10,
    backgroundColor: '#FFF',
    width: 200,
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
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
    top: 20,
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
  filtro: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 10,
    width: 245,
    left: 4,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
	salario: {
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
