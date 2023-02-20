import React from 'react';
import styleSenha from './styleSenha';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import cadeado from '/home/matheus/Área de Trabalho/mobile/front/assets/cadeado.png'
import * as Animatable from 'react-native-animatable';

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

      
        <Animatable.View animation="flipInY" style={styleSenha.cadeado}>
          <Image style={{width:70, height: 70}} source={cadeado}></Image> 
        </Animatable.View> 

      <Animatable.Text delay={300} animation="flipInX" style={styleSenha.title}>Redefinir sua senha</Animatable.Text>

      <Animatable.View delay={500} animation="fadeInUp" style={styleSenha.containerSenha}>
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
      </Animatable.View>
       
          
      
      </View>
  );
}
