import * as React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import MapView from 'react-native-maps';


import styleHome from './styleHome.js' 


export function HomeScreen() {

       const [email, onChangeEmail] = React.useState('');
       const [senha, setPassword] = React.useState('');
       const [hidePass, setHidePass] = React.useState(true);
       const [fonteLoaded] = useFonts({
      FiraSans_500Medium,

      });
  
  if(!fonteLoaded){
    return null;    
  }
  

      
  
  
  return(

      
      

      <Animatable.View style={styleHome.container}>
        <View style={styleHome.div2}>
      		
        </View>

        <View style={styleHome.div}>
          <Text style={styleHome.title}>Cuidadores perto de você</Text> 
        
          <MapView style={styleHome.map}/>
        </View>
      </Animatable.View>
   
  );
}

