import React, { useState } from 'react';
import stylePassword from './stylePassword';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import api from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/src/api/index.js'


export function RecuperarSenhaScreen({ navigation }){
    



    const [senha, setPassword] = React.useState('');
    const [senhaConfirm, setPasswordConfirm] = React.useState('');
    const [hidePass, setHidePass] = React.useState(true);
    const [fonteLoaded] = useFonts({
      FiraSans_500Medium,
  
    });
    
    if(!fonteLoaded){
      return null;
    }
      
    const trocarSenha = async () => {
      try {
        const response = await axios.post('/recuperar/mudar_senha', {
          token: token,
          senha: senha,
        });
  
        console.log(response.data);
        navigation.navigate('LoginScreen');
      } catch (error) {
        console.error(error);
      }
    };
    
    return(
        <View style={stylePassword.container}>
  
            <Text style={stylePassword.title}>Insira sua senha nova</Text>
            <Text style={stylePassword.textDescription}>Sua nova senha deve ser diferente da sua senha anterior</Text>
            
            <View style={stylePassword.design}>
              <View style={stylePassword.containerSenha}>
                <View style={stylePassword.box}>

                  <View style={stylePassword.boxInput}>
                    <Text style={stylePassword.textSenha}>Insira sua senha nova senha</Text>
                    <TextInput
                    style={stylePassword.input}
                    onChangeText={ (texto) => setPassword(texto)}
                    value={senha}
                    placeholder="Nova senha"
                    secureTextEntry={hidePass}
                    />
                  </View>

                  <View style={stylePassword.boxInput}>
                    <Text style={stylePassword.textSenha}>Confirme sua senha</Text>
                    <TextInput
                    style={stylePassword.input}
                    onChangeText={ (texto) => setPasswordConfirm(texto)}
                    value={senhaConfirm}
                    placeholder="Senha"
                    secureTextEntry={hidePass}
                    />  
                  </View>

                    <TouchableOpacity style={stylePassword.btnSenha} onPress={trocarSenha} >
                      <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Confirmar </Text>
                    </TouchableOpacity>
                  </View> 
                </View>
            </View>
            

          </View>
        
            
        
        
    );
  }
  
