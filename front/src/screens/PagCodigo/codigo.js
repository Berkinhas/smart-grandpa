import React, { useRef, useState, useEffect } from 'react';
import styleCode from './styleCode';
import { View, Text , TextInput, StyleSheet,TouchableOpacity, Alert} from 'react-native'
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import api from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/src/api/index.js'
import { useNavigation } from '@react-navigation/native';


export function CodeScreen({ route }){
  const navigation = useNavigation();

  // const verificationScreen = ({
  //   route: {
  //     params: {phoneNumber}
  //   }
  // })

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''})


  const [fonteLoaded] = useFonts({

        FiraSans_500Medium,

      });

      if(!fonteLoaded){
        return null;
      }

      async function enviarToken(token) {
        try {
          const response = await api.post('/recuperar/mudar_senha', { token });
          if (response.data.valid) {
            navigation.navigate('RecuperarSenhaScreen');
          } else {
            Alert.alert('Erro', 'Código inválido. Verifique e tente novamente.');
          }
        } catch (error) {
          Alert.alert('Erro', 'Ocorreu um erro ao validar o código. Verifique sua conexão e tente novamente.');
        }
      }


return(
  <View style={styleCode.container}>
     <Text style={styleCode.text}>Digite o código</Text>

     <View style={styleCode.codeDesign}>
      <View style={styleCode.opContainer}>
      <View  style={styleCode.boxContainer}>
       <View style={styleCode.containerCode}>
          <View style={styleCode.otpBox}>
          <TextInput
            style={styleCode.otpText}
            keyboardType='default'
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text})
              text && secondInput.current.focus();
            }}
            />
        </View>

        <View style={styleCode.otpBox}>
          <TextInput
            style={styleCode.otpText}
            keyboardType='default'
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text})
              text ? thirdInput.current.focus() : firstInput.current.focus()
            }}
          />
          </View>
        <View style={styleCode.otpBox}>
          <TextInput
            style={styleCode.otpText}
            keyboardType='default'
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text})
              text ? fourthInput.current.focus() : secondInput.current.focus()
            }}
          />
        </View>
        <View style={styleCode.otpBox}>
          <TextInput
            style={styleCode.otpText}
            keyboardType='default'
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text})
              text ? fourthInput.current.focus() : thirdInput.current.focus()
            }}
          /> 
          </View>
        </View>
       </View>
      </View>
       <Text style={styleCode.textDescription}> Digite o código que foi enviado no seu e-mail.</Text>
       <TouchableOpacity style={styleCode.btnSenha} onPress={() => enviarToken(token)}>
          <Text style={{color:"#DAD0FB", fontSize:16, fontFamily:'FiraSans_500Medium',}}>Enviar código</Text>
        </TouchableOpacity>
     </View>
  </View>
)}
