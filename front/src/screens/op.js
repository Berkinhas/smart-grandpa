import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native'

import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';





export function OpScreen() {

  const [fonteLoaded] = useFonts({
    FiraSans_500Medium,

  });
  
  if(!fonteLoaded){
    return null;
  }
    
  
  return(
    <View style={styles.container}>

      <Text style={styles.title}>Quem você é?</Text>
       <TouchableOpacity style={styles.btnIdoso}>
        <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Sou idoso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnIdoso}>
        <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Sou cuidador</Text>
        </TouchableOpacity>  
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#D5CBF8',
  },  

  title:{
    fontSize: 25,
    color: '#3F3847',
    top: 80,
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
     marginTop: 55,
     fontFamily:'FiraSans_500Medium'
   },

   inputIcon:{
    marginTop:-25,
   },

   icon:{
    position: 'absolute',
    right: 35,
    top: 65,
   },

   btnIdoso:{
    top: 120,
    height:60,
    borderRadius:15,
    backgroundColor:'#9C80BE',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
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