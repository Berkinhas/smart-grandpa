import React from 'react';
import styleCarevigerRegister from './styleRegisterCareviger.js';
import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import loginFacebook from '/home/matheus/Área de Trabalho/mobile/front/assets/facebook.png';
import loginGoogle from '/home/matheus/Área de Trabalho/mobile/front/assets/google.png';
import axios from 'axios';

async function cadastrarUsuarioCuidador(nome,email,password){
  try {
    const response = await axios.post('http://localhost:8080/autenticacaoCuidador/registrar', {
      nome: nome,
    
      email: email,
      senha: password
  });
  console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export function RegisterCarevigerScreen({ navigation }){

  const [nome, onChangeText] = React.useState('');
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
      <View style={styleCarevigerRegister.container}>

        <Text style={styleCarevigerRegister.title}>Cadastro</Text>
      
        <TextInput
          style={styleCarevigerRegister.input}
          onChangeText={onChangeText}
          value={nome}
          placeholder="Nomes completo"
        />
    
        <View style={styleCarevigerRegister.inputEmail}>
          <TextInput
          style={styleCarevigerRegister.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
        />
        </View>

        <View style={styleCarevigerRegister.inputIcon}>
        <TextInput
          style={styleCarevigerRegister.input}
          onChangeText={ (texto) => setPassword(texto)}
          value={password}
          placeholder="Senha"
          secureTextEntry={hidePass}
        /> 
        

        <TouchableOpacity style={styleCarevigerRegister.icon}  onPress={() => setHidePass(!hidePass) } >
          {hidePass ?
          <Ionicons name="eye-off" color="#9C80BE" size={25}/>
          :
          <Ionicons name="eye" color="#9C80BE" size={25}/>
          }
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styleCarevigerRegister.btnEnter} onPress={() =>        {          
          function register() {
            cadastrarUsuarioCuidador(nome,email,password)
            
          }

          function navegacao(){
            navigation.navigate('LoginScreen')
          }
          register()
          navegacao()
        }}> 
          <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={[styleCarevigerRegister.textEntrada,styleCarevigerRegister.texto]}>
            <Text style={{color:"#3D3C41",fontSize:16, fontFamily:'FiraSans_500Medium',}}>Cadastrar com:</Text>
          </View>

          <View style={styleCarevigerRegister.teste}>
            <View style={styleCarevigerRegister.loginFG}> 
              <TouchableOpacity>
              <View style={styleCarevigerRegister.loginF}>
                <Image source={loginFacebook}></Image> 
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleCarevigerRegister.loginG}>
                  <Image source={loginGoogle}></Image> 
                </View>              
              </TouchableOpacity>
            </View> 
          </View>

      </View>
  );
}
