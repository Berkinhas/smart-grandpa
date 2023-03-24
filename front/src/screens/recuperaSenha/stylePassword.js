import { StyleSheet } from 'react-native';

const stylePassword = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#D5CBF8',
        

    },

    title:{
        fontSize: 25,
        color: '#3F3847',
        marginTop: 85,
        textAlign:'center',
        alignItems: 'center',
        fontWeight: '600',
        fontFamily:'FiraSans_500Medium',
      },
      textDescription:{
        
        alignItems: 'center',
        textAlign: 'center',
        fontSize:14,
        marginHorizontal: 15,
        marginTop:5,
        fontFamily:'FiraSans_500Medium'

    
      },

      containerSenha:{
        marginTop:60,

      },

      textSenha:{
        fontFamily:'FiraSans_500Medium'

      },
      design:{
        flex:1,
        marginTop:110,
        backgroundColor: 'white',
        borderTopEndRadius: 20,
        borderTopStartRadius:20,
        marginHorizontal: 2,
        

      },

      

      boxInput:{
        paddingHorizontal:25,
        paddingTop:20,
      },
      
      input:{
        height: 50,
        borderWidth: 0.8,
        borderColor: '#D8BFD8',
        padding: 10,
        borderRadius:10,
        paddingHorizontal:20,
        backgroundColor:'white',
        fontFamily:'FiraSans_500Medium'
      },

      btnSenha:{
        height:60,
        borderRadius:15,
        backgroundColor:'#9C80BE',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        marginBottom:10,
        marginLeft:70,
        marginRight:70,
        fontSize:30,
       },



})
export default stylePassword;