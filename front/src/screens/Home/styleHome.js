import { StyleSheet } from 'react-native';

const styleHome = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#D5CBF8',
    },  
    
    div: {
      backgroundColor: '#FFF',
      borderRadius: 10, 
      marginTop: 370,
      marginHorizontal: 12,
      flex: 0.5
    }, 

    div2: {
      backgroundColor: '#FFF',
      borderRadius: 10, 
      marginTop: 90,
      marginBottom: -300,
      marginHorizontal: 12,
      flex: 0.2
    },

    title:{
      fontSize: 20,
      color: '#3F3847',
      marginTop: 40,
      marginBottom: 10,
      textAlign:'center',
      fontWeight: '20',
      fontFamily:'FiraSans_500Medium',
    },

    map: {
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 10,
      width: '90%',
      height: '55%',
    }
  
       })
  export default styleHome;
