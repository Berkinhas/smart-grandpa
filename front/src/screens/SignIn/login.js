import React, { useState, useEffect, useCallback  } from 'react';
import styleLogin from './styleLogin';
import { View, Text, TextInput, TouchableOpacity,Image, Alert} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import loginFacebook from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/assets/facebook.png';
import loginGoogle from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/assets/google.png';
import * as Animatable from 'react-native-animatable';
import api from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/src/api/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

//ADM
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjczOGU4NDczOTcyMTA5NGI3Y2VlNyIsImlhdCI6MTY4MDM1MTkwMCwiZXhwIjoxNjgwNDM4MzAwfQ.Imfc24IuKacBPF_zUeUPdDmamenFN-3_0ufeiuddfcE

//user
//

export function LoginScreen({ navigation }){


  const [userToken, setUserToken] = useState('');
  const [email, onChangeEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [fonteLoaded] = useFonts({
    FiraSans_500Medium,
  });

  function setToken(token) {
    // store the token in localStorage, AsyncStorage or any other storage mechanism of your choice
    AsyncStorage.setItem('userToken', token);
  }

  async function loginUser(email, senha) {
    try {
      const response = await api.post('/login', {
        email: email,
        senha: senha
      });
  
      // Salva o token de autenticação do usuário no AsyncStorage
      const token = response.data.token
      setToken(token);
      console.log('Token do usuário armazenado: ', token);
  
      // Obtém as informações do perfil do usuário
      const perfilResponse = await api.get('/perfil', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      const idUsuario = perfilResponse.data._id;
      const isCuidador = perfilResponse.data.cuidador;
      await AsyncStorage.setItem('userPerfil', JSON.stringify(perfilResponse.data));
      if (isCuidador !== undefined) {
        AsyncStorage.setItem('isCuidador', JSON.stringify(isCuidador));
      }

      console.log(perfilResponse)
      console.log(isCuidador)
      return idUsuario;
    } catch (error) {
      console.error(error.message);
      throw new Error('Não foi possível fazer login. Verifique suas credenciais e tente novamente.');
    }
  }

  useEffect(() => {
    // Recupera o token do usuário armazenado no AsyncStorage
    const getUserToken = async () => {
    try {
    const token = await AsyncStorage.getItem('userToken');
    setUserToken(token);
    console.log('Token do usuário armazenado: ', token);
    } catch (error) {
    console.error(error.message);
    }
    };
    getUserToken();
    }, []);
  

    

  if(!fonteLoaded){
    return null;
  }
    
  
  return(
      <Animatable.View style={styleLogin.container}>

        <Text style={styleLogin.title}>Login</Text>
      
        <TextInput
          style={styleLogin.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
        />


        <View style={styleLogin.inputIcon}>
        <TextInput
          style={styleLogin.input}
          onChangeText={ (texto) => setPassword(texto)}
          value={senha}
          placeholder="Senha"
          secureTextEntry={hidePass}
        /> 

        <TouchableOpacity testID="btn-eye" style={styleLogin.icon}  onPress={() => setHidePass(!hidePass) } >
          {hidePass ?
          <Ionicons name="eye-off" color="#9C80BE" size={25}/>
          :
          <Ionicons name="eye" color="#9C80BE" size={25}/>
          }
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          testID='btn-enter'
          style={styleLogin.btnEnter}
          onPress={async () => {
            try {
              const idUsuario = await loginUser(email, senha);
              await AsyncStorage.setItem('userToken', userToken);
              setUserToken(userToken);
              navigation.navigate('HomeScreen');
            } catch (error) {
              Alert.alert(error.message);
            }
          }}
        >
          <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity testID='btn-remember' style={styleLogin.textoSenha} onPress={() => navigation.navigate('SenhaSreen')}>
            <Text style={{color:"#3D3C41", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={[styleLogin.textEntrada,styleLogin.texto]}>
            <Text style={{color:"#3D3C41",fontSize:16, fontFamily:'FiraSans_500Medium',}}>Entrar com:</Text>
          </View>

          <View style={styleLogin.teste}>
            <View style={styleLogin.loginFG}> 
              <TouchableOpacity testID='btn-enter-facebook'>
              <View style={styleLogin.loginF}>
                <Image source={loginFacebook}></Image> 
              </View>
              </TouchableOpacity>
              <TouchableOpacity testID='btn-enter-google'>
                <View style={styleLogin.loginG}>
                  <Image source={loginGoogle}></Image> 
                </View>              
              </TouchableOpacity>
            </View> 
          </View>

          <TouchableOpacity testID='btn-no-user' style={styleLogin.textoCadastro} onPress={() => navigation.navigate('OpScreen')}>
            <Text style={{color:"#3D3C41", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Ainda não é usuário? Cadastrar</Text>
          </TouchableOpacity>

      </Animatable.View>
  );
}