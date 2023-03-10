import React from 'react';
import styleRegister from './styleRegister';
import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import loginFacebook from '/home/matheus/Área de Trabalho/mobile/front/assets/facebook.png';
import loginGoogle from '/home/matheus/Área de Trabalho/mobile/front/assets/google.png';
import axios from 'axios';
import api from '/home/matheus/Área de Trabalho/mobile/front/src/api/index.js'

async function cadastrarUsuario(nome, sobrenome, email, senha) {
  try {
    const response = await api.post('/autenticacaoComum/registrar', {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

export function RegisterScreen({ navigation }){
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [senha, setPassword] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);
  const [fonteLoaded] = useFonts({
    FiraSans_500Medium,

  });
  
  if(!fonteLoaded){
    return null;
  }

  const handleNomeChange = (nome) => {
    setNome(nome);
  };

  const handleSobrenomeChange = (sobrenome) => {
    setSobrenome(sobrenome);
  };
    
  
  return(
      <View style={styleRegister.container}>

        <Text style={styleRegister.title}>Cadastro</Text>
      
        <TextInput
          style={styleRegister.input}
          onChangeText={handleNomeChange}
          value={nome}
          placeholder="Nome"
        />
        
        <View style={styleRegister.inputEmail}>
          <TextInput
          style={styleRegister.input}
          onChangeText={handleSobrenomeChange}
          value={sobrenome}
          placeholder="Sobrenome"
        />
        </View>
    
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
          value={senha}
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

        <TouchableOpacity style={styleRegister.btnEnter} onPress={() =>        {          
          function register() {
            cadastrarUsuario(nome,sobrenome,email,senha)
            
          }

          function navegacao(){
            navigation.navigate('LoginScreen')
          }
          register()
          navegacao()
        }}> 
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
