import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import loginFacebook from '/home/matheus/Área de Trabalho/mobile/front/assets/facebook.png';
import loginGoogle from '/home/matheus/Área de Trabalho/mobile/front/assets/google.png';
import { NavigationContainer } from '@react-navigation/native';


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
      <View style={styles.container}>

        <Text style={styles.title}>Login</Text>
      
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
        />


        <View style={styles.inputIcon}>
        <TextInput
          style={styles.input}
          onChangeText={ (texto) => setPassword(texto)}
          value={password}
          placeholder="Senha"
          secureTextEntry={hidePass}
        /> 

        <TouchableOpacity style={styles.icon}  onPress={() => setHidePass(!hidePass) } >
          {hidePass ?
          <Ionicons name="eye-off" color="#9C80BE" size={25}/>
          :
          <Ionicons name="eye" color="#9C80BE" size={25}/>
          }
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnEnter}>
          <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Enter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.textoSenha}>
            <Text style={{color:"#3D3C41", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={[styles.textEntrada,styles.texto]}>
            <Text style={{color:"#3D3C41",fontSize:16, fontFamily:'FiraSans_500Medium',}}>Entrar com:</Text>
          </View>

          <View style={styles.teste}>
            <View style={styles.loginFG}> 
              <TouchableOpacity>
              <View style={styles.loginF}>
                <Image source={loginFacebook}></Image> 
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.loginG}>
                  <Image source={loginGoogle}></Image> 
                </View>              
              </TouchableOpacity>
            </View> 
          </View>

          <TouchableOpacity style={styles.textoCadastro} onPress={() => ('RegisterScreen')}>
            <Text style={{color:"#3D3C41", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Ainda não é usuário? Cadastrar</Text>
          </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#D5CBF8',
  },  

  title:{
    fontSize: 25,
    color: '#3F3847',
    marginTop: 85,
    textAlign:'center',
    fontWeight: '600',
    fontFamily:'FiraSans_500Medium',
  },

   input:{
     height: 50,
     backgroundColor: '#FFFF',
     paddingLeft: 25,
     marginHorizontal: 20,
     borderRadius: 20,
     fontSize: 18,
     borderColor: '#E4E7EB',
     marginTop: 55,
     fontFamily:'FiraSans_500Medium'
   },

   inputIcon:{
    marginTop:-25,
   },

   icon:{
    position: 'absolute',
    right: 35,
    top: 65,
   },

   btnEnter:{
    height:60,
    borderRadius:15,
    backgroundColor:'#9C80BE',
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:10,
    marginLeft:60,
    marginRight:60,
    fontSize:30,
   },

   textoSenha:{
    alignItems:'center',
 
   },

   textEntrada:{
    paddingTop:84,
    alignItems:'center',
   },

   teste:{
    alignItems:'center',
   },

   loginFG:{
    flexDirection:'row',
    paddingTop:15,
    alignItems:'center',
    marginLeft:17,
   },

   loginF:{
    backgroundColor:'white',
    padding:10,
    borderRadius:50,
    textAlign:'center',
   },

   loginG:{
    marginHorizontal: 15,
    backgroundColor:'white',
    padding:10,
    borderRadius:50,
   },

   textoCadastro:{
    alignItems:'center',
    paddingTop:40,
   }


})