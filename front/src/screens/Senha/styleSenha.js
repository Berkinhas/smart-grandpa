import { StyleSheet } from 'react-native';

const styleSenha = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#D5CBF8',
    },  
  
    title:{
      fontSize: 25,
      color: '#3F3847',
      marginTop: 25,
      textAlign:'center',
      fontWeight: '600',
      fontFamily:'FiraSans_500Medium',
    },

    cadeado:{
      alignItems: 'center',
      paddingTop: 60

    },

    containerSenha:{

       flex:1,
      marginTop:110,
      backgroundColor: '#f7fff7',
      borderTopEndRadius: 20,
      borderTopStartRadius:20,
      marginHorizontal: 5,
      

    },
    design:{
      marginTop:25,

    },
  
     input:{
       height: 50,
       backgroundColor: '#e7ecef',
       paddingLeft: 25,
       marginHorizontal: 20,
       borderRadius: 15,
       fontSize: 18,
       borderColor: '#E4E7EB',
       marginTop: 40,
       fontFamily:'FiraSans_500Medium'
     },

     containerText:{
      marginTop:20,

     },

     text:{
      alignItems:'center',
      textAlign:'center',
      fontSize: 16,
      marginHorizontal:25,
      fontFamily:'FiraSans_500Medium'

     },
  
    
  
     btnSenha:{
      height:55,
      borderRadius:15,
      backgroundColor:'#9C80BE',
      alignItems:'center',
      justifyContent:'center',
      marginTop:80,
      marginBottom:10,
      marginLeft:60,
      marginRight:60,
      fontSize:30,
     },
  
   
   
  
  
  



})
export default styleSenha;
