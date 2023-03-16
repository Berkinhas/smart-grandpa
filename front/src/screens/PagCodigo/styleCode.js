import { StyleSheet } from 'react-native';

const styleCode = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D5CBF8',
      },

      text:{
      fontSize: 25,
      color: '#3F3847',
      marginTop: 85,
      textAlign:'center',
      fontWeight: '600',
      fontFamily:'FiraSans_500Medium',

      },
      codeDesign:{
      flex:1,
      marginTop:110,
      backgroundColor: '#f7fff7',
      borderTopEndRadius: 20,
      borderTopStartRadius:20,
      marginHorizontal: 2,

      },

      opContainer:{
        marginHorizontal:50,
        marginBottom:20,
        marginTop: 100,
        
      },
      containerCode:{
        alignItems:'center',
        flexDirection:'row',
        
        
        
      },

      boxContainer:{
      marginBottom: 30
      },

      otpBox:{
        borderRadius:10,
        borderColor: 'purple',
        borderWidth: 1.3,
        marginLeft: 10,
        
        
        

        
        

      },
      otpText:{
        fontSize:25,
        color:'black',
        padding:0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        
      },

      textDescription:{
        alignItems:'center',
        textAlign:'center',
        fontSize: 18,
        paddingTop:10,
        marginHorizontal:25,
        fontFamily:'FiraSans_500Medium'
  
       },

       btnSenha:{
        height:55,
        borderRadius:15,
        backgroundColor:'#9C80BE',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        marginBottom:5,
        marginLeft:60,
        marginRight:60,
        fontSize:30,
       },
    
    
      
      
   
      
     

})
export default styleCode;