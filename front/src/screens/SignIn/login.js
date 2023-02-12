import React from 'react';
import styleLogin from './styleLogin';
import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import loginFacebook from '/home/matheus/Área de Trabalho/mobile/front/assets/facebook.png';
import loginGoogle from '/home/matheus/Área de Trabalho/mobile/front/assets/google.png';



export function LoginScreen({ navigation }){

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
      <View style={styleLogin.container}>

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
          value={password}
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

        <TouchableOpacity testID='btn-enter' style={styleLogin.btnEnter}>
          <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Enter</Text>
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

          <TouchableOpacity testID='btn-no-user' style={styleLogin.textoCadastro} onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{color:"#3D3C41", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Ainda não é usuário? Cadastrar</Text>
          </TouchableOpacity>

      </View>
  );
}