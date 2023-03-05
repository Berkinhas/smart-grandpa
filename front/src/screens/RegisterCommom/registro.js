import React from 'react';
import styleRegister from './styleRegister';
import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import loginFacebook from '/home/matheus/Área de Trabalho/mobile/front/assets/facebook.png';
import loginGoogle from '/home/matheus/Área de Trabalho/mobile/front/assets/google.png';
import axios from 'axios';

async function cadastrarUsuario(){
  try {
    const response = await axios.post('localhost:8080/autenticacaoComum/registrar', {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: password
  });
  console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export function RegisterScreen({ navigation }){

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
      <View style={styleRegister.container}>

        <Text style={styleRegister.title}>Cadastro</Text>
      
        <TextInput
          style={styleRegister.input}
          onChangeText={onChangeText}
          value={nome}
          placeholder="Nome completo"
        />
    
        <View style={styleRegister.inputEmail}>
          <TextInput
          style={styleRegister.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
        />
        </View>

        <View style={styleRegister.inputIcon}>
        <TextInput
          style={styleRegister.input}
          onChangeText={ (texto) => setPassword(texto)}
          value={password}
          placeholder="Senha"
          secureTextEntry={hidePass}
        /> 
        

        <TouchableOpacity style={styleRegister.icon}  onPress={() => setHidePass(!hidePass) } >
          {hidePass ?
          <Ionicons name="eye-off" color="#9C80BE" size={25}/>
          :
          <Ionicons name="eye" color="#9C80BE" size={25}/>
          }
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styleRegister.btnEnter} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={[styleRegister.textEntrada,styleRegister.texto]}>
            <Text style={{color:"#3D3C41",fontSize:16, fontFamily:'FiraSans_500Medium',}}>Cadastrar com:</Text>
          </View>

          <View style={styleRegister.teste}>
            <View style={styleRegister.loginFG}> 
              <TouchableOpacity>
              <View style={styleRegister.loginF}>
                <Image source={loginFacebook}></Image> 
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleRegister.loginG}>
                  <Image source={loginGoogle}></Image> 
                </View>              
              </TouchableOpacity>
            </View> 
          </View>

      </View>
  );
}
