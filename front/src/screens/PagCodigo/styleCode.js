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

      opContainer:{
        marginHorizontal:20,
        marginBottom:20,
        alignItems:'center',
        flexDirection:'row',
      
      },

      otpBox:{
        borderRadius:5,
        borderColor: 'blue',
        borderWidth: 0.5,
        
        

      },
      otpText:{
        fontSize:25,
        color:'black',
        padding:0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        
      }
      
   
      
     

})
export default styleCode;