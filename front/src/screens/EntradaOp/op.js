import React from 'react';
import styleOp from './styleOp';
import { View, Text, TouchableOpacity,} from 'react-native'
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';





export  function OpScreen ({ navigation }) {

  const [fonteLoaded] = useFonts({
    FiraSans_500Medium,

  });
  
  if(!fonteLoaded){
    return null;
  }
    
  
  return(
    <View style={styleOp.container}>

      <Text style={styleOp.title}>Quem você é?</Text>
       <TouchableOpacity style={styleOp.btnIdoso} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Sou idoso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleOp.btnIdoso} onPress={() => navigation.navigate('RegisterCarevigerScreen')}>
        <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Sou cuidador</Text>
        </TouchableOpacity>  
    </View>
    
  );
}
