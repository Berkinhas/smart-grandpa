import { StyleSheet } from 'react-native';

const styleCarevigerRegister = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#D5CBF8',
    },  

    text: {
      top: 10,
      fontSize: 16,
      alignSelf: 'center',
    },
    underline: {
      textDecorationLine: 'underline',
      color: '#8a2be2',
    },
  
    title:{
      fontSize: 25,
      color: '#3F3847',
      marginTop: 85,
      textAlign:'center',
      fontWeight: '600',
      fontFamily:'FiraSans_500Medium',
    },
  
     input:{
       height: 50,
       backgroundColor: '#FFFF',
       paddingLeft: 25,
       marginHorizontal: 20,
       borderRadius: 20,
       fontSize: 18,
       borderColor: '#E4E7EB',
       marginTop: 50,
       fontFamily:'FiraSans_500Medium'
     },
     inputEmail:{
      marginTop:-25,
     },
     inputIcon:{
      marginTop:-25,
     },
  
     icon:{
      position: 'absolute',
      right: 35,
      top: 65,
     },
  
     btnEnter:{
      height:60,
      borderRadius:15,
      backgroundColor:'#9C80BE',
      alignItems:'center',
      justifyContent:'center',
      marginTop:40,
      marginBottom:10,
      marginLeft:60,
      marginRight:60,
      fontSize:30,
     },
  
     textoSenha:{
      alignItems:'center',
   
     },
  
     textEntrada:{
      paddingTop:84,
      alignItems:'center',
     },
  
     teste:{
      alignItems:'center',
     },
  
     loginFG:{
      flexDirection:'row',
      paddingTop:15,
      alignItems:'center',
      marginLeft:17,
     },
  
     loginF:{
      backgroundColor:'white',
      padding:10,
      borderRadius:50,
      textAlign:'center',
     },
  
     loginG:{
      marginHorizontal: 15,
      backgroundColor:'white',
      padding:10,
      borderRadius:50,
     },
  
     textoCadastro:{
      alignItems:'center',
      paddingTop:40,
     }
  
  
  })
  export default styleCarevigerRegister;
