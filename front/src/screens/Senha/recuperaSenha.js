import React from 'react';
import styleSenha from './styleSenha';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import cadeado from '/home/matheus/Área de Trabalho/mobile/front/assets/cadeado.png'


export function SenhaSreen({ navigation }){

  const [email, onChangeEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);
  const [fonteLoaded] = useFonts({
    FiraSans_500Medium,

  });
  
  if(!fonteLoaded){
    return null;
  }
    
  
  return(
      <View style={styleSenha.container}>

      
        <View style={styleSenha.cadeado}>
          <Image style={{width:70, height: 70}} source={cadeado}></Image> 
        </View> 

      <Text style={styleSenha.title}>Redefinir sua senha</Text>

      <View style={styleSenha.containerSenha}>
        <View style={styleSenha.design}>
          <TextInput
          style={styleSenha.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
          />
         <View style={styleSenha.containerText}>
          <Text style={styleSenha.text}> Digite o seu e-mail registrado
           para a recuperar sua senha</Text>  
         </View>
         
         <TouchableOpacity style={styleSenha.btnSenha} onPress={() => navigation.navigate('CodeScreen')}>
         <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Enviar código</Text>
         </TouchableOpacity>


        </View>
      </View>
       
          
      
      </View>
  );
}
